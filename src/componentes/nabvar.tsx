import React, { ReactNode } from "react";

interface NavbarProps {
  children?: ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        backgroundColor: "#1232e69f",
        color: "white",
        height: "60px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div className="container-fluid px-4">
        <a className="navbar-brand text-white fw-bold" href="#">
          Gestión del Cambio
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto">
            {/* Aquí puedes insertar cualquier contenido dinámico desde App.tsx */}
            {children}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
