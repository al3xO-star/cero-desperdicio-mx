import { useState } from "react";
import Feed from "./pages/Feed";
import LotDetail from "./pages/LotDetail";
import { mockLots } from "./data/mockLots";

export default function App() {
  const [page, setPage] = useState("feed"); // feed | detail | impact
  const [lots] = useState(mockLots);
  const [selected, setSelected] = useState(null);

  function openLot(lot) {
    setSelected(lot);
    setPage("detail");
  }

  if (page === "feed") return <Feed lots={lots} onGo={setPage} onSelectLot={openLot} />;
  if (page === "detail") return <LotDetail lot={selected} onBack={() => setPage("feed")} />;

  // Placeholder simple de "impact"
  if (page === "impact") {
    return (
      <div style={{ maxWidth: 920, margin: "0 auto", padding: 20 }}>
        <button onClick={() => setPage("feed")} style={{ height: 40, padding: "0 14px", borderRadius: 12, border: "1px solid #e5e7eb", background: "white", cursor: "pointer" }}>
          ← Volver
        </button>
        <h2 style={{ marginTop: 14, fontSize: 24, fontWeight: 900 }}>Impacto (simulado)</h2>
        <p style={{ opacity: 0.75 }}>Aquí luego ponemos kg rescatados, porciones, CO₂, etc.</p>
      </div>
    );
  }

  return null;
}
