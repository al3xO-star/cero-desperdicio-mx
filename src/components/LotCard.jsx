export default function LotCard({ lot, onOpen }) {
  return (
    <div className="card" style={{ padding: 16 }}>
      {lot.image && (
        <img
          src={lot.image}
          alt={lot.title}
          style={{
            width: "100%",
            height: 160,
            objectFit: "cover",
            borderRadius: 14,
            marginBottom: 12,
            border: "1px solid var(--border)",
          }}
        />
      )}

      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <div>
          <div style={{ fontSize: 13, color: "#374151" }}>
            {lot.ownerType} · {lot.ownerName}
          </div>

          <div style={{ fontSize: 18, fontWeight: 700, marginTop: 6 }}>
            {lot.title}
          </div>

          <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
            <span className="pill">{lot.mode}</span>
            <span className="pill">{lot.category}</span>
            <span className="pill">{lot.portions} porciones</span>
          </div>
        </div>

        <button onClick={() => onOpen(lot)} className="btn btn-primary">
          Ver
        </button>
      </div>

      <div style={{ marginTop: 12, fontSize: 13, opacity: 0.85 }}>
        <div>
          <b>Consumir antes de:</b> {lot.bestBefore}
        </div>
        <div>
          <b>Recolección:</b> {lot.pickupWindow}
        </div>
        <div>
          <b>Zona:</b> {lot.address}
        </div>
      </div>
    </div>
  );
}

