// src/LandingPage.jsx
// React import removed because JSX transform doesn't require it and ESLint flagged it as unused

export default function LandingPage({ styles, onNavigate }) {
  return (
    <div style={styles.appContainer}>
      <h1 style={styles.mainTitle}>🎓 PathFinder B.Tech Portal</h1>
      <p style={styles.mainSubtitle}>Explore 10+ colleges, 10 branch options, and a 10-question quiz built to guide your choice.</p>

      <div style={styles.cardGrid}>
        <button style={styles.branchCard} onClick={() => onNavigate("college")}>🏫 Explore Colleges</button>
        <button style={styles.branchCard} onClick={() => onNavigate("branch")}>🎓 Explore Branches</button>
        <button style={styles.branchCard} onClick={() => onNavigate("quiz")}>📝 Take 10-Question Quiz</button>
        <button style={styles.branchCard} onClick={() => onNavigate("salary")}>💰 Salary Estimator</button>
        <button style={styles.branchCard} onClick={() => onNavigate("compare")}>🏫 Compare Colleges</button>
      </div>
    </div>
  );
}
