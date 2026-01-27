import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);
  const reset = () => setCount(0);

  const isPositive = count > 0;
  const isNegative = count < 0;

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.top}>
          <div>
            <p style={styles.kicker}>React Project From Scratch</p>
            <h1 style={styles.title}>Counter App</h1>
          </div>

          <div
            style={{
              ...styles.badge,
              ...(isPositive ? styles.badgeGreen : {}),
              ...(isNegative ? styles.badgeRed : {}),
            }}
          >
            {isPositive ? "Growing" : isNegative ? "Dropping" : "Neutral"}
          </div>
        </div>

        <div style={styles.counterWrap}>
          <div style={styles.counterBox}>
            <span style={styles.counterLabel}>Current Count</span>
            <div
              style={{
                ...styles.counter,
                ...(isPositive ? styles.counterGreen : {}),
                ...(isNegative ? styles.counterRed : {}),
              }}
            >
              {count}
            </div>
          </div>
        </div>

        <div style={styles.buttons}>
          <button style={{ ...styles.btn, ...styles.btnGhost }} onClick={decrease}>
            − Decrease
          </button>

          <button style={{ ...styles.btn, ...styles.btnPrimary }} onClick={increase}>
            + Increase
          </button>

          <button style={{ ...styles.btn, ...styles.btnDanger }} onClick={reset}>
            Reset
          </button>
        </div>

        <div style={styles.footer}>
          <p style={styles.footerText}>
            Tip: Try going negative.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    padding: 20,
    background:
      "radial-gradient(circle at top, rgba(99,102,241,.35), transparent 45%), radial-gradient(circle at bottom, rgba(16,185,129,.25), transparent 45%), #0b1020",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
  },
  card: {
    width: "min(520px, 92vw)",
    borderRadius: 24,
    padding: 24,
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(255,255,255,.12)",
    boxShadow: "0 20px 60px rgba(0,0,0,.45)",
    backdropFilter: "blur(10px)",
    color: "rgba(255,255,255,.92)",
  },
  top: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 18,
  },
  kicker: {
    margin: 0,
    fontSize: 12,
    letterSpacing: 1.4,
    textTransform: "uppercase",
    color: "rgba(255,255,255,.65)",
  },
  title: {
    margin: "6px 0 0",
    fontSize: 34,
    lineHeight: 1.1,
  },
  badge: {
    padding: "8px 12px",
    borderRadius: 999,
    fontSize: 12,
    border: "1px solid rgba(255,255,255,.14)",
    background: "rgba(255,255,255,.07)",
    color: "rgba(255,255,255,.85)",
    userSelect: "none",
  },
  badgeGreen: {
    border: "1px solid rgba(16,185,129,.35)",
    background: "rgba(16,185,129,.15)",
  },
  badgeRed: {
    border: "1px solid rgba(239,68,68,.35)",
    background: "rgba(239,68,68,.15)",
  },
  counterWrap: {
    display: "grid",
    placeItems: "center",
    padding: "18px 0 8px",
  },
  counterBox: {
    width: "100%",
    borderRadius: 18,
    padding: 18,
    background: "rgba(0,0,0,.25)",
    border: "1px solid rgba(255,255,255,.10)",
  },
  counterLabel: {
    display: "block",
    fontSize: 13,
    color: "rgba(255,255,255,.65)",
    marginBottom: 10,
  },
  counter: {
    fontSize: 56,
    fontWeight: 800,
    letterSpacing: -1,
    textAlign: "center",
  },
  counterGreen: { color: "rgba(52, 211, 153, .95)" },
  counterRed: { color: "rgba(248, 113, 113, .95)" },

  buttons: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 12,
    marginTop: 14,
  },
  btn: {
    border: "1px solid rgba(255,255,255,.16)",
    background: "rgba(255,255,255,.06)",
    color: "rgba(255,255,255,.92)",
    padding: "12px 12px",
    borderRadius: 14,
    cursor: "pointer",
    fontWeight: 700,
    transition: "transform .08s ease, background .15s ease",
  },
  btnPrimary: {
    background: "rgba(99,102,241,.22)",
    border: "1px solid rgba(99,102,241,.35)",
  },
  btnDanger: {
    background: "rgba(239,68,68,.18)",
    border: "1px solid rgba(239,68,68,.32)",
  },
  btnGhost: {
    background: "rgba(255,255,255,.04)",
  },
  footer: {
    marginTop: 16,
    paddingTop: 14,
    borderTop: "1px solid rgba(255,255,255,.10)",
  },
  footerText: {
    margin: 0,
    fontSize: 13,
    color: "rgba(255,255,255,.65)",
  },
};
