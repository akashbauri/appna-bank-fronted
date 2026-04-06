export default function Loan() {
  const eligibility = 500;

  return (
    <div style={{ padding: 20 }}>
      <h2>Loan Eligibility</h2>

      <p>You are eligible for:</p>
      <h1>₹{eligibility}</h1>

      <p>Improve your profile to increase your limit.</p>
    </div>
  );
}
