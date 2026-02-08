import { useMemo, useState } from "react";
import LotCard from "../components/LotCard";

export default function Feed({ lots, onGo, onSelectLot }) {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState("Todos");

  const filtered = useMemo(() => {
    return lots.filter(l => {
      const q = query.trim().toLowerCase();
      const matchesQ = !q || (
        l.title.toLowerCase().includes(q) ||
        l.ownerName.toLowerCase().includes(q) ||
        l.category.toLowerCase().includes(q) ||
        l.address.toLowerCase().includes(q)
      );
      const matchesMode = mode === "Todos" || l.mode === mode;
      return matchesQ && matchesMode;
    });
  }, [lots, query, mode]);

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 20 }}>
      <Topbar onGo={onGo} />

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar: zona, categoría, restaurante..."
          style={inputStyle()}
        />
        <select value={mode} onChange={(e) => setMode(e.target.value)} style={inputStyle()}>
          <option>Todos</option>
          <option>Donación</option>
          <option>Venta con descuento</option>
        </select>
      </div>

      <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 14 }}>
        {filtered.map(lot => (
          <LotCard key={lot.id} lot={lot} onOpen={onSelectLot} />
        ))}
      </div>
    </div>
  );
}

function Topbar({ onGo }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
      <div>
        <div style={{ fontSize: 22, fontWeight: 800 }}>Cero Desperdicio MX</div>
        <div style={{ fontSize: 13, opacity: 0.75 }}>Rescate, donación y redistribución de alimentos</div>
      </div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button onClick={() => onGo("impact")} style={btnLight()}>Impacto</button>
      </div>
    </div>
  );
}

function inputStyle() {
  return { padding: "10px 12px", borderRadius: 12, border: "1px solid #e5e7eb", minWidth: 240 };
}
function btnLight() {
  return { height: 40, padding: "0 14px", borderRadius: 12, border: "1px solid #e5e7eb", background: "white", cursor: "pointer" };
}
