import { useState } from 'react';
import { btechData } from './branchData';

export default function SalaryEstimator({ styles }) {
  const [branch, setBranch] = useState(null);

  return (
    <div style={styles.detailsPanel}>
      <h2 style={styles.panelTitle}>💰 Salary & Career Estimator</h2>
      <p style={styles.cardText}>Choose a branch to see salary range, growth, and key skills.</p>
      <select
        style={{ width: "100%", padding: "14px 16px", borderRadius: "14px", border: "1px solid #cbd5e1", marginBottom: "18px", fontSize: "1rem" }}
        onChange={(e) => setBranch(btechData.find(b => b.id === e.target.value))}
      >
        <option value="">Select Branch</option>
        {btechData.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
      </select>
      {branch && (
        <div style={styles.salaryAlert}>
          <p><strong>Starting Salary:</strong> {branch.startingSalary}</p>
          <p><strong>Future Growth:</strong> {branch.futureGrowth}</p>
          <p><strong>Career Growth:</strong> {branch.careerGrowth}</p>
          <p><strong>Top Roles:</strong> {branch.jobRoles.join(", ")}</p>
          <p><strong>Key Skills:</strong> {branch.keySkills.join(", ")}</p>
        </div>
      )}
    </div>
  );
}
