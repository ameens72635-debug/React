import { useState } from 'react';
import { btechData, quizQuestions } from './branchData';

export default function Quiz({ styles }) {
  const [step, setStep] = useState(0);
  const initialScore = Object.fromEntries(btechData.map((branch) => [branch.id, 0]));
  const [score, setScore] = useState(initialScore);

  const handleAnswer = (branchScores) => {
    setScore(prev => ({
      ...prev,
      ...Object.fromEntries(
        Object.keys(prev).map((branchId) => [branchId, prev[branchId] + (branchScores?.[branchId] || 0)])
      )
    }));
    setStep((current) => current + 1);
  };

  if (step >= quizQuestions.length) {
    const rankedBranches = Object.entries(score).sort((a, b) => b[1] - a[1]);
    const bestBranch = btechData.find((branch) => branch.id === rankedBranches[0][0]);
    const runnerUp = btechData.find((branch) => branch.id === rankedBranches[1]?.[0]);
    return (
      <div style={styles.detailsPanel}>
        <h2 style={styles.panelTitle}>🎯 Recommended Branch: {bestBranch?.name}</h2>
        <p style={styles.cardText}>Based on your answers, {bestBranch?.name} fits your interests best.</p>
        <div style={styles.salaryAlert}>
          <p style={styles.cardText}><strong>Top Match Score:</strong> {rankedBranches[0]?.[1]} points</p>
          {runnerUp && <p style={styles.cardText}><strong>Next Best Match:</strong> {runnerUp.name}</p>}
        </div>
      </div>
    );
  }

  const currentQuestion = quizQuestions[step];

  return (
    <div style={styles.detailsPanel}>
      <h2 style={styles.panelTitle}>Quiz Question {step + 1} of {quizQuestions.length}</h2>
      <p style={styles.cardText}>{currentQuestion.question}</p>
      <div style={styles.cardGrid}>
        <button style={styles.branchCard} onClick={() => handleAnswer(currentQuestion.yes)}>Yes</button>
        <button style={styles.branchCard} onClick={() => handleAnswer(currentQuestion.no)}>No</button>
      </div>
    </div>
  );
}
