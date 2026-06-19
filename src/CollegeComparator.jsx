import { useState } from 'react';
import { colleges } from './colleges';

export default function CollegeComparator({ styles }) {
  const [selected, setSelected] = useState([]);

  const toggleCollege = (id) => {
    setSelected(prev => prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id].slice(-2));
  };

  const chosen = colleges.filter(c => selected.includes(c.id));

  return (
    <div style={styles.detailsPanel}>
      <h2 style={styles.panelTitle}>🏫 College Comparator</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "18px" }}>
        {colleges.map(c => (
          <label key={c.id} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", borderRadius: "14px", background: "rgba(255,255,255,0.65)", border: "1px solid rgba(148,163,184,0.18)" }}>
            <input type="checkbox" checked={selected.includes(c.id)} onChange={() => toggleCollege(c.id)} />
            <img src={c.image} alt={c.name} style={{ width: "42px", height: "42px", objectFit: "cover", borderRadius: "10px" }} />
            <span>{c.name}</span>
          </label>
        ))}
      </div>
      {chosen.length === 2 && (
        <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Feature</th>
              {chosen.map(c => <th key={c.id}>{c.name}</th>)}
            </tr>
          </thead>
          <tbody>
            <tr><td>Fees</td>{chosen.map(c => <td key={c.id}>{c.fees}</td>)}</tr>
            <tr><td>Available Seats</td>{chosen.map(c => <td key={c.id}>{c.availableSeats}</td>)}</tr>
            <tr><td>Branches</td>{chosen.map(c => <td key={c.id}>{c.branches.join(", ")}</td>)}</tr>
            <tr><td>Placements</td>{chosen.map(c => <td key={c.id}>{c.placements}</td>)}</tr>
            <tr><td>Career Growth</td>{chosen.map(c => <td key={c.id}>{c.careerGrowth}</td>)}</tr>
            <tr><td>Campus Vibe</td>{chosen.map(c => <td key={c.id}>{c.vibe}</td>)}</tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
