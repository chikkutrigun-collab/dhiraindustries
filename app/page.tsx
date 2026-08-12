export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F8F5EF",
        color: "#2B180B",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* ANNOUNCEMENT BAR */}
      <div
        style={{
          background: "#2B180B",
          color: "#F4E7C1",
          height: "38px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "45px",
          fontSize: "11px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        <span>Quality Every Batch</span>
        <span>✦</span>
        <span>Trusted Since 2010</span>
        <span>✦</span>
        <span>Crafted With Care Since 2010</span>
        <span>✦</span>
        <span>Free Shipping On Orders Above ₹499</span>
        <span>✦</span>
        <span>Authentic Quality Every Batch</span>
      </div>

      {/* NAVIGATION */}
      <header
        style={{
          height: "92px",
          borderBottom: "1px solid #E8DCC4",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 4.5%",
          background: "#FBF9F5",
        }}
      >
        {/* BRAND */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <img
            src="/images/9F5947D2-B6A4-49DF-971F-728CD4B1680A.png"
            alt="DHIRA Industries"
            style={{
              width: "54px",
              height: "54px",
              objectFit: "contain",
              borderRadius: "50%",
            }}
          />

          <div>
            <div
              style={{
                fontSize: "27px",
                fontWeight: 600,
                letterSpacing: "2px",
              }}
            >
              DHIRA
            </div>

            <div
              style={{
                fontSize: "9px",
                color: "#C49A35",
                letterSpacing: "4px",
                marginTop: "2px",
              }}
            >
              SINCE 2010
            </div>
          </div>
        </div>

        {/* NAV LINKS */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "38px",
            fontFamily: "Arial, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            letterSpacing: "1px",
          }}
        >
          <a href="#home" style={navStyle}>
            HOME
          </a>
          <a href="#shop" style={navStyle}>
            SHOP
          </a>
          <a href="#about" style={navStyle}>
            ABOUT
          </a>
          <a href="#process" style={navStyle}>
            OUR PROCESS
          </a>
          <a href="#quality" style={navStyle}>
            QUALITY
          </a>
          <a href="#contact" style={navStyle}>
            CONTACT
          </a>
        </nav>

        {/* ICONS */}
        <div
          style={{
            display: "flex",
            gap: "23px",
            fontSize: "22px",
            alignItems: "center",
          }}
        >
          <span>⌕</span>
          <span>♙</span>
          <span>♡</span>
          <span>▢</span>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        style={{
          minHeight: "720px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          padding: "70px 4.5%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            right: "8%",
            top: "45px",
            width: "560px",
            height: "560px",
            border: "1px solid #E8D7A7",
            borderRadius: "50%",
            opacity: 0.65,
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "10%",
            top: "85px",
            width: "480px",
            height: "480px",
            border: "1px solid #E8D7A7",
            borderRadius: "50%",
            opacity: 0.65,
          }}
        />

        {/* LEFT CONTENT */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "650px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "13px",
              marginBottom: "45px",
            }}
          >
            <div
              style={{
                width: "35px",
                height: "1px",
                background: "#C79E32",
              }}
            />

            <span
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "11px",
                letterSpacing: "5px",
                color: "#C79E32",
              }}
            >
              SINCE 2010
            </span>

            <div
              style={{
                width: "35px",
                height: "1px",
                background: "#C79E32",
              }}
            />
          </div>

          <h1
            style={{
              fontSize: "72px",
              lineHeight: "1.05",
              fontWeight: 400,
              margin: 0,
              letterSpacing: "-2px",
            }}
          >
            Tradition You
            <br />

            <span style={{ color: "#C79E32" }}>Can Taste.</span>
            <br />

            Quality You
            <br />

            Can Trust.
          </h1>

          <p
            style={{
              fontFamily: "Arial, sans-serif",
              color: "#76685D",
              fontSize: "18px",
              lineHeight: "1.7",
              maxWidth: "570px",
              marginTop: "35px",
            }}
          >
            Since 2010, DHIRA has been committed to crafting quality
            products with care, consistency and authenticity. Every batch,
            every time.
          </p>

          <div
            style={{
              display: "flex",
              gap: "17px",
              marginTop: "38px",
            }}
          >
            <a
              href="#shop"
              style={{
                background: "#2B180B",
                color: "#fff",
                padding: "17px 32px",
                textDecoration: "none",
                fontFamily: "Arial, sans-serif",
                fontSize: "13px",
                letterSpacing: "2px",
              }}
            >
              SHOP NOW
            </a>

            <a
              href="#about"
              style={{
                border: "1px solid #2B180B",
                color: "#2B180B",
                padding: "17px 30px",
                textDecoration: "none",
                fontFamily: "Arial, sans-serif",
                fontSize: "13px",
                letterSpacing: "2px",
              }}
            >
              DISCOVER DHIRA
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          style={{
            position: "relative",
            height: "620px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, #EEEAE3 0%, #F3F0EB 55%, transparent 70%)",
              position: "absolute",
            }}
          />

          <img
            src="/images/9F5947D2-B6A4-49DF-971F-728CD4B1680A.png"
            alt="DHIRA Premium Quality"
            style={{
              width: "min(500px, 85%)",
              maxHeight: "500px",
              objectFit: "contain",
              position: "relative",
              zIndex: 2,
              borderRadius: "18px",
            }}
          />

          {/* PREMIUM BADGE */}
          <div
            style={{
              position: "absolute",
              left: "2%",
              top: "220px",
              background: "#87B52C",
              color: "#fff",
              padding: "13px 23px",
              fontFamily: "Arial, sans-serif",
              fontSize: "10px",
              letterSpacing: "3px",
              zIndex: 4,
            }}
          >
            PREMIUM QUALITY
          </div>

          {/* YEAR BADGE */}
          <div
            style={{
              position: "absolute",
              right: "0",
              bottom: "70px",
              background: "#2B180B",
              color: "#CDA83C",
              width: "120px",
              height: "85px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 4,
            }}
          >
            <strong
              style={{
                fontSize: "22px",
              }}
            >
              2010
            </strong>

            <span
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "9px",
                letterSpacing: "2px",
                marginTop: "5px",
              }}
            >
              ESTABLISHED
            </span>
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section
        id="about"
        style={{
          background: "#1D2923",
          color: "#F8F5EF",
          padding: "105px 7%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#CDA83C",
            fontFamily: "Arial, sans-serif",
            fontSize: "10px",
            letterSpacing: "5px",
            marginBottom: "20px",
          }}
        >
          OUR STORY
        </div>

        <h2
          style={{
            fontSize: "48px",
            fontWeight: 400,
            margin: 0,
          }}
        >
          Rooted in Tradition
        </h2>

        <p
          style={{
            maxWidth: "720px",
            margin: "25px auto 0",
            fontFamily: "Arial, sans-serif",
            color: "#C7C4BC",
            fontSize: "16px",
            lineHeight: "1.8",
          }}
        >
          DHIRA Industries brings together timeless traditions, carefully
          selected ingredients and uncompromising quality to create products
          that families can trust and enjoy.
        </p>
      </section>

      {/* QUALITY */}
      <section
        id="quality"
        style={{
          padding: "100px 7%",
          background: "#F8F5EF",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#CDA83C",
            fontFamily: "Arial, sans-serif",
            fontSize: "10px",
            letterSpacing: "5px",
          }}
        >
          THE DHIRA PROMISE
        </div>

        <h2
          style={{
            fontSize: "48px",
            fontWeight: 400,
            margin: "20px 0 60px",
          }}
        >
          Crafted With Care
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "25px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <QualityCard
            number="01"
            title="Authenticity"
            text="True to our roots, every DHIRA product carries the spirit of tradition."
          />

          <QualityCard
            number="02"
            title="Consistency"
            text="Every batch is created with the same attention to quality and detail."
          />

          <QualityCard
            number="03"
            title="Trust"
            text="Quality products made for families who expect nothing less."
          />
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        style={{
          background: "#EFE7D7",
          padding: "100px 7%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#A97F21",
            fontFamily: "Arial, sans-serif",
            fontSize: "10px",
            letterSpacing: "5px",
          }}
        >
          OUR PROCESS
        </div>

        <h2
          style={{
            fontSize: "48px",
            fontWeight: 400,
            margin: "20px 0 30px",
          }}
        >
          From Tradition to You
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            fontFamily: "Arial, sans-serif",
            color: "#67594C",
            lineHeight: "1.8",
          }}
        >
          From selecting quality ingredients to careful preparation and
          packaging, every stage is handled with precision and care.
        </p>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "100px 7%",
          background: "#2B180B",
          color: "#F8F5EF",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#CDA83C",
            fontFamily: "Arial, sans-serif",
            fontSize: "10px",
            letterSpacing: "5px",
          }}
        >
          CONNECT WITH DHIRA
        </div>

        <h2
          style={{
            fontSize: "48px",
            fontWeight: 400,
            margin: "20px 0",
          }}
        >
          Taste the Tradition
        </h2>

        <p
          style={{
            fontFamily: "Arial, sans-serif",
            color: "#D7CDC0",
            maxWidth: "600px",
            margin: "0 auto 35px",
            lineHeight: "1.7",
          }}
        >
          Discover DHIRA and experience products crafted with authenticity,
          consistency and care.
        </p>

        <a
          href="mailto:info@dhiraindustries.com"
          style={{
            display: "inline-block",
            background: "#CDA83C",
            color: "#2B180B",
            padding: "16px 35px",
            textDecoration: "none",
            fontFamily: "Arial, sans-serif",
            fontSize: "12px",
            letterSpacing: "2px",
          }}
        >
          CONTACT US
        </a>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#171F1B",
          color: "#A9A69E",
          textAlign: "center",
          padding: "25px",
          fontFamily: "Arial, sans-serif",
          fontSize: "11px",
        }}
      >
        © 2026 DHIRA Industries. All rights reserved.
      </footer>
    </main>
  );
}

function QualityCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        background: "#FBF9F5",
        padding: "45px 30px",
        border: "1px solid #E2D6C0",
        textAlign: "center",
      }}
    >
      <div
        style={{
          color: "#CDA83C",
          fontFamily: "Arial, sans-serif",
          fontSize: "12px",
          letterSpacing: "3px",
          marginBottom: "20px",
        }}
      >
        {number}
      </div>

      <h3
        style={{
          fontSize: "28px",
          fontWeight: 400,
          margin: "0 0 15px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontFamily: "Arial, sans-serif",
          color: "#76685D",
          fontSize: "14px",
          lineHeight: "1.7",
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  );
}

const navStyle = {
  color: "#2B180B",
  textDecoration: "none",
};
