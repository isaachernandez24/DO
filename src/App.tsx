import React, { useState } from "react";
import Navbar from "./componentes/nabvar"; 
import Inicio from "./pages/Inicio";
import Introduccion from "./pages/Introduccion";
import Organizacional from "./pages/Organizacional";
import Fases from "./pages/Fases";
import Historia from "./pages/Historia";
import Enfoques from "./pages/Enfoques";
import Estrategias from "./pages/Estrategias";
import Diagnostico from "./pages/Diagnostico";
import Consultor from "./pages/Consultor";
import Evaluacion from "./pages/Evaluacion";
import Metodologia from "./pages/Metodologia";
import Recursos from "./pages/Recursos";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
function App() {
  const tabs = [
    { value: "intro", label: "Introducción", component: <Introduccion /> },
    { value: "cambio", label: "Cambio", component: <Organizacional /> },
    { value: "fases", label: "Fases", component: <Fases /> },
    { value: "historia", label: "Historia", component: <Historia /> },
    { value: "enfoques", label: "Enfoques", component: <Enfoques /> },
    { value: "estrategias", label: "Estrategias", component: <Estrategias /> },
    { value: "diagnostico", label: "Diagnóstico", component: <Diagnostico /> },
    { value: "consultor", label: "Consultor", component: <Consultor /> },
    { value: "eval", label: "Evaluación", component: <Evaluacion /> },
    { value: "met", label: "Metodología", component: <Metodologia /> },
    { value: "rec", label: "Recursos", component: <Recursos /> },
  ];

  const [activeTab, setActiveTab] = useState("intro");
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {/* Navbar con botón para abrir sidebar */}
      <Navbar>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => setShowSidebar(true)}
          aria-controls="sidebarOffcanvas"
          aria-expanded={showSidebar}
        >
          ☰ Menú
        </button>
      </Navbar>

      <div className="d-flex bg-light min-vh-100">
        {/* Sidebar Offcanvas */}
        <div
          className={`offcanvas offcanvas-start ${showSidebar ? "show" : ""}`}
          tabIndex={-1}
          id="sidebarOffcanvas"
          aria-labelledby="sidebarOffcanvasLabel"
          style={{ visibility: showSidebar ? "visible" : "hidden" }}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="sidebarOffcanvasLabel">
              Navegación
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              aria-label="Cerrar"
              onClick={() => setShowSidebar(false)}
            ></button>
          </div>
          <div className="offcanvas-body p-0">
            <ul className="nav nav-pills flex-column">
              {tabs.map((tab) => (
                <li className="nav-item" key={tab.value}>
                  <button
                    className={`nav-link text-start ${
                      activeTab === tab.value ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveTab(tab.value);
                      setShowSidebar(false);
                    }}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

{/* Contenido principal */}
<main className="container-fluid mt-5 pt-5">
  <div className="bg-white p-4 rounded shadow-sm">

    {/* Render solo el componente activo */}
    {activeTab === "inicio" && (
      <div className="mb-4">
        <Inicio />
      </div>
    )}

    {tabs.map(
      (tab) =>
        activeTab === tab.value && tab.value !== "inicio" && (
          <div key={tab.value} className="mt-4">
            <div className="card">
              <div className="card-body">{tab.component}</div>
            </div>
          </div>
        )
    )}
  </div>
</main>

        {/* Contenido principal */}

      </div>
    </>
  );
}

export default App;
