export default function LotCard({ lot, onOpen }) {
  return (
    <div style={{
      border: "1px solid #e5e7eb",
      borderRadius: 16,
      padding: 16,
      background: "white"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <div>
          <div style={{ fontSize: 13, color: "#374151" }}>
            {lot.ownerType} · {lot.ownerName}
          </div>
          <div style={{ fontSize: 18, fontWeight: 700, marginTop: 6 }}>
            {lot.title}
          </div>
          <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
            <span style={pill()}>{lot.mode}</span>
            <span style={pill()}>{lot.category}</span>
            <span style={pill()}>{lot.portions} porciones</span>
          </div>
        </div>

        <button
          onClick={() => onOpen(lot)}
          style={{
            height: 40,
            padding: "0 14px",
            borderRadius: 12,
            border: "1px solid #111827",
            background: "#111827",
            color: "white",
            cursor: "pointer",
            whiteSpace: "nowrap"
          }}
        >
          Ver
        </button>
      </div>

      <div style={{ marginTop: 12, fontSize: 13, opacity: 0.85 }}>
        <div><b>Consumir antes de:</b> {lot.bestBefore}</div>
        <div><b>Recolección:</b> {lot.pickupWindow}</div>
        <div><b>Zona:</b> {lot.address}</div>
      </div>
    </div>
  );
}

function pill() {
  return {
    fontSize: 12,
    padding: "4px 10px",
    borderRadius: 999,
    border: "1px solid #e5e7eb",
    background: "#f9fafb"
  };
}
