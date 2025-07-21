import React, { useState } from "react";
import Navbar from "./componentes/nabvar";
import Inicio from "./pages/subtemas/Inicio";
import Introduccion from "./pages/subtemas/Introduccion";
import Organizacional from "./pages/subtemas/Organizacional";
import Fases from "./pages/subtemas/Fases";
import Historia from "./pages/subtemas/Historia";
import Enfoques from "./pages/subtemas/Enfoques";
import Estrategias from "./pages/subtemas/Estrategias";
import Diagnostico from "./pages/subtemas/Diagnostico";
import Consultor from "./pages/subtemas/Consultor";
import Evaluacion from "./pages/subtemas/Evaluacion";
import Metodologia from "./pages/subtemas/Metodologia";
import Recursos from "./pages/subtemas/Recursos";
import Contacto from "./pages/subtemas/Contacto";
import Footer from "./componentes/footer";
// Íconos
import {
  FaHome,
  FaBookOpen,
  FaVial,
  FaLightbulb,
  FaRegChartBar,
  FaHistory,
  FaProjectDiagram,
  FaClipboardCheck,
  FaStethoscope,
  FaUserTie,
  FaGraduationCap,
  FaToolbox,
  FaCogs,
  FaClipboardList,
  FaEnvelopeOpenText,
} from "react-icons/fa";

function App() {
  const contenidoTabs = [
    { value: "intro", label: "Introducción", icon: <FaLightbulb />, component: <Introduccion /> },
    { value: "cambio", label: "Cambio Organizacional", icon: <FaVial />, component: <Organizacional /> },
    { value: "fases", label: "Fases", icon: <FaRegChartBar />, component: <Fases /> },
    { value: "historia", label: "Historia", icon: <FaHistory />, component: <Historia /> },
    { value: "enfoques", label: "Enfoques", icon: <FaProjectDiagram />, component: <Enfoques /> },
    { value: "estrategias", label: "Estrategias", icon: <FaClipboardCheck />, component: <Estrategias /> },
    { value: "diagnostico", label: "Diagnóstico", icon: <FaStethoscope />, component: <Diagnostico /> },
    { value: "consultor", label: "Consultor", icon: <FaUserTie />, component: <Consultor /> },
  ];

  const mainTabs = [
    { value: "inicio", label: "Inicio", icon: <FaHome /> },
    { value: "contenido", label: "Contenido", icon: <FaBookOpen /> },
    { value: "evaluacion", label: "Evaluación", icon: <FaGraduationCap /> },
    { value: "metodologia", label: "Metodología", icon: <FaToolbox /> },
    { value: "recursos", label: "Recursos", icon: <FaClipboardList /> },
    { value: "contacto", label: "Contacto", icon: <FaEnvelopeOpenText /> },
  ];

  const [activeMainTab, setActiveMainTab] = useState("inicio");
  const [activeContenidoTab, setActiveContenidoTab] = useState("intro");
  const [showSidebar, setShowSidebar] = useState(false);

  const renderContent = () => {
    switch (activeMainTab) {
      case "inicio":
        return <Inicio />;
      case "evaluacion":
        return <Evaluacion />;
      case "metodologia":
        return <Metodologia />;
      case "recursos":
        return <Recursos />;
      case "contacto":
        return <Contacto />;
      case "contenido":
        const tab = contenidoTabs.find((t) => t.value === activeContenidoTab);
        return tab ? tab.component : <div>Selecciona un tema</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar>
        <button
  className="btn btn-outline-primary d-flex align-items-center justify-content-center"
  type="button"
  onClick={() => setShowSidebar(true)}
  aria-controls="sidebarOffcanvas"
  aria-expanded={showSidebar}
  style={{
    fontSize: "1.5rem",
    padding: "10px 20px",
    borderRadius: "8px",
    border: "2px solid #004aad",
    backgroundColor: "white",
    color: "#004aad",
  }}
>
  ☰ 
</button>

      </Navbar>

      <div className="d-flex flex-column bg-light min-vh-100">
        {/* Sidebar */}
        <div
          className={`offcanvas offcanvas-start ${showSidebar ? "show" : ""}`}
          tabIndex={-1}
          id="sidebarOffcanvas"
          aria-labelledby="sidebarOffcanvasLabel"
          style={{
            visibility: showSidebar ? "visible" : "hidden",
            backgroundColor: "#e0f0ff",
            width: "280px",
            borderRight: "1px solid #c0d4f7",
          }}
        >
          <div className="offcanvas-header" style={{ borderBottom: "1px solid #c0d4f7", paddingBottom: "0.5rem" }}>
            <h5 className="offcanvas-title" id="sidebarOffcanvasLabel">
              Navegación
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              aria-label="Cerrar"
              onClick={() => setShowSidebar(false)}
            />
          </div>
          <div className="offcanvas-body p-0">
            <ul className="nav nav-pills flex-column p-2" style={{ gap: "10px" }}>
              {mainTabs.map((tab) => (
                <li className="nav-item" key={tab.value}>
                  <button
                    className={`nav-link d-flex align-items-center gap-2 text-start ${
                      activeMainTab === tab.value ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveMainTab(tab.value);
                      setShowSidebar(false);
                      if (tab.value === "contenido" && !activeContenidoTab) {
                        setActiveContenidoTab("intro");
                      }
                    }}
                    style={{
                      fontSize: "1.25rem",
                      padding: "12px 20px",
                      backgroundColor: activeMainTab === tab.value ? "#004aad" : "transparent",
                      color: activeMainTab === tab.value ? "#fff" : "#333",
                      borderRadius: "6px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>

                  {tab.value === "contenido" && activeMainTab === "contenido" && (
                    <ul className="nav flex-column ps-4 mt-2" style={{ gap: "6px" }}>
                      {contenidoTabs.map((subtab) => (
                        <li key={subtab.value} className="nav-item">
                          <button
                            className={`nav-link d-flex align-items-center gap-2 text-start ${
                              activeContenidoTab === subtab.value ? "active" : ""
                            }`}
                            onClick={() => {
                              setActiveContenidoTab(subtab.value);
                              setShowSidebar(false);
                            }}
                            style={{
                              fontSize: "1.1rem",
                              padding: "10px 20px",
                              backgroundColor: activeContenidoTab === subtab.value ? "#007bff" : "transparent",
                              color: activeContenidoTab === subtab.value ? "#fff" : "#555",
                              borderRadius: "6px",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            {subtab.icon}
                            {subtab.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contenido principal */}
        <main className="container-fluid mt-5 pt-5">
          <div className="bg-white p-4 rounded shadow-sm">{renderContent()}</div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
