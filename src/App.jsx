
import { useState } from "react";
import { btechData } from "./data";
import DetailsPanel from "./DetailsPanel";

export default function App() {
  const [activeBranch, setActiveBranch] = useState(null);

  return (
    <div style={styles.appContainer}>
      <header style={styles.appHeader}>
        <h1 style={styles.mainTitle}>🎓 PathFinder B.Tech Portal</h1>
        <p style={styles.mainSubtitle}>
          Honest environment details and career insights for intermediate students.
        </p>
      </header>

      <div style={styles.contentLayout}>
        <aside style={styles.sidebar}>
          <h2 style={styles.sidebarHeading}>Choose a Branch:</h2>
          {btechData.map((branch) => (
            <button
              key={branch.id}
              onClick={() => setActiveBranch(branch)}
              style={{
                ...styles.branchCard,
                backgroundColor: activeBranch?.id === branch.id ? "#2b6cb0" : "#ffffff",
                color: activeBranch?.id === branch.id ? "#ffffff" : "#2d3748",
                borderColor: activeBranch?.id === branch.id ? "#2b6cb0" : "#e2e8f0",
              }}
            >
              <h3 style={styles.cardName}>{branch.name}</h3>
              <span style={styles.cardBadge}>{branch.demand}</span>
            </button>
          ))}
        </aside>

        <main style={styles.detailsPanel}>
          <DetailsPanel activeBranch={activeBranch} styles={styles} />
        </main>
      </div>
    </div>
  );
}

const styles = {
  appContainer: { fontFamily: "Segoe UI, Roboto, sans-serif", padding: "24px", backgroundColor: "#f8fafc", minHeight: "100vh" },
  appHeader: { textAlign: "center", marginBottom: "32px", borderBottom: "1px solid #e2e8f0", paddingBottom: "24px" },
  mainTitle: { color: "#1a365d", fontSize: "2.2rem", fontWeight: "800", margin: "0 0 8px 0" },
  mainSubtitle: { color: "#64748b", fontSize: "1rem", margin: "0" },
  contentLayout: { display: "flex", gap: "32px", maxWidth: "1300px", margin: "0 auto", alignItems: "stretch" },
  sidebar: { width: "320px", flexShrink: "0" },
  sidebarHeading: { fontSize: "1.2rem", color: "#334155", marginBottom: "16px", fontWeight: "700" },
  branchCard: { width: "100%", padding: "16px 20px", marginBottom: "12px", borderRadius: "10px", border: "2px solid", textAlign: "left", cursor: "pointer", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", transition: "all 0.2s ease", display: "flex", flexDirection: "column", gap: "6px" },
  cardName: { margin: "0", fontSize: "1.05rem", fontWeight: "600" },
  cardBadge: { fontSize: "0.85rem", fontWeight: "500" },
  detailsPanel: { flexGrow: "1", backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)", padding: "32px" },
};
