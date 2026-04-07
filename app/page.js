import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <main style={main}>
        <h1>🚀 APPNA BANK</h1>
        <p>AI-powered loan platform</p>

        <div style={grid}>
          <Link href="/dashboard"><button style={btn}>Dashboard</button></Link>
          <Link href="/loan"><button style={btn}>Apply Loan</button></Link>
          <Link href="/ai-chat"><button style={btn}>AI Chat</button></Link>
          <Link href="/learn"><button style={btn}>Learn</button></Link>
        </div>
      </main>
    </>
  );
}

const main = {
  height: "100vh",
  background: "linear-gradient(135deg,#667eea,#764ba2)",
  color: "white",
  textAlign: "center",
  paddingTop: "100px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(2,200px)",
  gap: "20px",
  justifyContent: "center"
};

const btn = {
  padding: "15px",
  borderRadius: "10px",
  border: "none",
  cursor: "pointer"
};
