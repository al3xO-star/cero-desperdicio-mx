export default function LotDetail({ lot, onBack }) {
  if (!lot) return null;

  return (
    <div style={{ maxWidth: 920, margin: "0 auto", padding: 20 }}>
      <button onClick={onBack} style={btnLight()}>← Volver</button>

      <div style={{ marginTop: 14, border: "1px solid #e5e7eb", borderRadius: 16, padding: 18, background: "white" }}>
        <div style={{ fontSize: 12, opacity: 0.7 }}>
          {lot.ownerType} · {lot.ownerName} · ID {lot.id}
        </div>
        <div style={{ fontSize: 26, fontWeight: 900, marginTop: 6 }}>{lot.title}</div>

        <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
          <span style={pill()}>{lot.mode}</span>
          <span style={pill()}>{lot.category}</span>
          <span style={pill()}>{lot.portions} porciones</span>
        </div>

        <div style={{ marginTop: 14, fontSize: 14 }}>
          <div><b>Consumir antes de:</b> {lot.bestBefore}</div>
          <div><b>Ventana de recolección:</b> {lot.pickupWindow}</div>
          <div><b>Ubicación:</b> {lot.address}</div>
          <div style={{ marginTop: 10 }}><b>Notas:</b> {lot.notes}</div>
        </div>
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
function btnLight() {
  return {
    height: 40,
    padding: "0 14px",
    borderRadius: 12,
    border: "1px solid #e5e7eb",
    background: "white",
    cursor: "pointer"
  };
}
