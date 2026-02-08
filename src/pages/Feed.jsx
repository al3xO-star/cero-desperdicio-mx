import { useMemo, useState } from "react";
import LotCard from "../components/LotCard";

export default function Feed({ lots, onGo, onSelectLot }) {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState("Todos");

  const filtered = useMemo(() => {
    return lots.filter((l) => {
      const q = query.trim().toLowerCase();
      const matchesQ =
        !q ||
        l.title.toLowerCase().includes(q) ||
        l.ownerName.toLowerCase().includes(q) ||
        l.category.toLowerCase().includes(q) ||
        l.address.toLowerCase().includes(q);

      const matchesMode = mode === "Todos" || l.mode === mode;
      return matchesQ && matchesMode;
    });
  }, [lots, query, mode]);

  return (
    <div className="container">
      <Topbar onGo={onGo} />

      <div style={{ marginTop: 12 }} className="card">
        <div style={{ padding: 14 }}>
          <div style={{ fontWeight: 800, color: "var(--green)" }}>
            Encuentra alimentos para rescate, donación o redistribución
          </div>
          <div style={{ marginTop: 6, opacity: 0.85 }}>
            Filtra por zona, tipo, o modalidad. Cada lote cuenta 🌱
          </div>

          <div
            style={{
              marginTop: 12,
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar: zona, categoría, restaurante..."
              style={inputStyle()}
            />
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              style={inputStyle()}
            >
              <option>Todos</option>
              <option>Donación</option>
              <option>Venta con descuento</option>
            </select>

            <button onClick={() => onGo("impact")} className="btn btn-accent">
              Ver impacto
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 16,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 14,
        }}
      >
        {filtered.map((lot) => (
          <LotCard key={lot.id} lot={lot} onOpen={onSelectLot} />
        ))}
      </div>
    </div>
  );
}

function Topbar({ onGo }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 12,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
  <img
    src="/img/logo.png"
    alt="Cero Desperdicio MX"
    style={{
      height: 40,
      width: "auto",
    }}
  />

  <div>
    <div style={{ fontSize: 22, fontWeight: 900, color: "var(--green)" }}>
      Cero Desperdicio MX
    </div>
    <div style={{ fontSize: 13, opacity: 0.8 }}>
      Conectando excedentes con quienes más lo necesitan.
    </div>
  </div>
</div>


      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button onClick={() => onGo("impact")} className="btn">
          Impacto
        </button>
      </div>
    </div>
  );
}

function inputStyle() {
  return {
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid var(--border)",
    background: "white",
    minWidth: 240,
    outline: "none",
  };
}

