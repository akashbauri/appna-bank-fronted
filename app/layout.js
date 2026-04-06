export const metadata = {
  title: "APPNA BANK",
  description: "AI Loan App Prototype"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "#f3f4f6", fontFamily: "Arial" }}>
        {children}
      </body>
    </html>
  );
}
