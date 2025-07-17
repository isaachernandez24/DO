import React from "react";

function Footer() {
  return (
    <footer
      className="text-center text-white"
      style={{
        backgroundColor: "#004aad",
        padding: "1rem",
        position: "relative",
        bottom: 0,
        width: "100%",
        marginTop: "auto",
      }}
    >
      <p style={{ margin: 0, fontSize: "1rem" }}>
        &copy; {new Date().getFullYear()} UDONE | Todos los derechos reservados
      </p>
    </footer>
  );
}

export default Footer;
