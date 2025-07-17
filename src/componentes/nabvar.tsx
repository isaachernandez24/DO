import React, { ReactNode } from "react";

interface NavbarProps {
  children?: ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        backgroundColor: "#1232e6",
        color: "white",
        height: "80px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        padding: "0 100px",
      }}
    >
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <a className="navbar-brand text-white fw-bold" href="#">
          Desarrollo Organizacional
        </a>

        {/* Aquí se renderiza cualquier contenido que venga desde App.tsx */}
        <div>{children}</div>
      </div>
    </nav>
  );
};

export default Navbar;
