import Navbar from "../../components/Navbar";

export default function Loan() {
  return (
    <>
      <Navbar />

      <div style={container}>
        <h2>💰 Apply for Loan</h2>
        <p>Fill details to check loan eligibility</p>

        <input placeholder="Enter Name" style={input} />
        <input placeholder="Enter Income" style={input} />
        <input placeholder="Loan Amount" style={input} />

        <button style={btn}>Submit</button>
      </div>
    </>
  );
}

const container = {
  padding: "40px",
  textAlign: "center"
};

const input = {
  display: "block",
  margin: "10px auto",
  padding: "10px",
  width: "250px"
};

const btn = {
  padding: "10px 20px",
  marginTop: "10px",
  cursor: "pointer"
};
