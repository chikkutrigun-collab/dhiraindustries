export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#F3EBD2",
        color: "#311B09",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ fontSize: "64px", marginBottom: "10px" }}>
          DHIRA
        </h1>

        <p style={{ fontSize: "20px" }}>
          Tradition You Can Taste. Quality You Can Trust.
        </p>

        <p style={{ marginTop: "20px", color: "#8BAF35" }}>
          Since 2010
        </p>
      </div>
    </main>
  );
}
