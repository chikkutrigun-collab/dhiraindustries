export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8f5ef",
        color: "#1f2a24",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <img
          src="/images/9F5947D2-B6A4-49DF-971F-728CD4B1680A.png"
          alt="DHIRA Industries"
          style={{
            width: "min(850px, 90vw)",
            maxHeight: "520px",
            objectFit: "contain",
            marginBottom: "35px",
            borderRadius: "18px",
          }}
        />

        <p
          style={{
            fontSize: "14px",
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: "#8b6b3f",
            marginBottom: "18px",
          }}
        >
          Since 2010
        </p>

        <h1
          style={{
            fontSize: "clamp(42px, 7vw, 82px)",
            margin: "0 0 18px",
            fontWeight: "500",
            letterSpacing: "2px",
          }}
        >
          DHIRA
        </h1>

        <p
          style={{
            fontSize: "clamp(18px, 2vw, 25px)",
            maxWidth: "650px",
            lineHeight: "1.6",
            margin: "0 auto 35px",
          }}
        >
          Tradition You Can Taste. Quality You Can Trust.
        </p>

        <button
          style={{
            padding: "15px 34px",
            border: "1px solid #8b6b3f",
            background: "#1f2a24",
            color: "#fff",
            borderRadius: "30px",
            fontSize: "15px",
            letterSpacing: "1px",
            cursor: "pointer",
          }}
        >
          Discover DHIRA
        </button>
      </section>

      {/* ABOUT */}
      <section
        style={{
          padding: "100px 25px",
          textAlign: "center",
          background: "#1f2a24",
          color: "#f8f5ef",
        }}
      >
        <p
          style={{
            color: "#c8a66a",
            letterSpacing: "4px",
            textTransform: "uppercase",
            fontSize: "13px",
          }}
        >
          Our Story
        </p>

        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 55px)",
            fontWeight: "400",
            margin: "20px 0",
          }}
        >
          Rooted in Tradition
        </h2>

        <p
          style={{
            maxWidth: "750px",
            margin: "0 auto",
            lineHeight: "1.9",
            fontSize: "18px",
            opacity: 0.9,
          }}
        >
          DHIRA Industries brings together timeless traditions, carefully
          selected ingredients and uncompromising quality to create products
          that families can trust and enjoy.
        </p>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "35px 20px",
          textAlign: "center",
          background: "#141b17",
          color: "#aaa",
          fontFamily: "Arial, sans-serif",
          fontSize: "13px",
        }}
      >
        © {new Date().getFullYear()} DHIRA Industries. All rights reserved.
      </footer>
    </main>
  );
}
