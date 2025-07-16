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

function App() {
  // Núcleos temáticos dentro de Contenido
  const contenidoTabs = [
    { value: "intro", label: "Introducción", component: <Introduccion /> },
    { value: "cambio", label: "Cambio Organizacional", component: <Organizacional /> },
    { value: "fases", label: "Fases", component: <Fases /> },
    { value: "historia", label: "Historia", component: <Historia /> },
    { value: "enfoques", label: "Enfoques", component: <Enfoques /> },
    { value: "estrategias", label: "Estrategias", component: <Estrategias /> },
    { value: "diagnostico", label: "Diagnóstico", component: <Diagnostico /> },
    { value: "consultor", label: "Consultor", component: <Consultor /> },
  ];

  // Menú principal, ya con Recursos y Metodología afuera
  const mainTabs = [
    { value: "inicio", label: "Inicio" },
    { value: "contenido", label: "Contenido" },
    { value: "evaluacion", label: "Evaluación" },
    { value: "metodologia", label: "Metodología" },
    { value: "recursos", label: "Recursos" },
  ];

  // Estados para pestaña principal y sub-pestaña contenido
  const [activeMainTab, setActiveMainTab] = useState("inicio");
  const [activeContenidoTab, setActiveContenidoTab] = useState("intro");
  const [showSidebar, setShowSidebar] = useState(false);

  // Decide qué componente mostrar según selección
  const renderContent = () => {
    if (activeMainTab === "inicio") return <Inicio />;
    if (activeMainTab === "evaluacion") return <Evaluacion />;
    if (activeMainTab === "metodologia") return <Metodologia />;
    if (activeMainTab === "recursos") return <Recursos />;

    if (activeMainTab === "contenido") {
      const tab = contenidoTabs.find((t) => t.value === activeContenidoTab);
      return tab ? tab.component : <div>Selecciona un tema</div>;
    }

    return null;
  };

  return (
    <>
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
            />
          </div>
          <div className="offcanvas-body p-0">
            <ul className="nav nav-pills flex-column">
              {mainTabs.map((tab) => (
                <li className="nav-item" key={tab.value}>
                  <button
                    className={`nav-link text-start ${
                      activeMainTab === tab.value ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveMainTab(tab.value);
                      setShowSidebar(false);
                      // Reinicia sub-tab contenido solo si vas a contenido
                      if (tab.value === "contenido" && !activeContenidoTab) {
                        setActiveContenidoTab("intro");
                      }
                    }}
                  >
                    {tab.label}
                  </button>

                  {/* Mostrar submenu solo si estás en Contenido */}
                  {tab.value === "contenido" && activeMainTab === "contenido" && (
                    <ul className="nav flex-column ps-3">
                      {contenidoTabs.map((subtab) => (
                        <li key={subtab.value} className="nav-item">
                          <button
                            className={`nav-link text-start ${
                              activeContenidoTab === subtab.value ? "active" : ""
                            }`}
                            onClick={() => {
                              setActiveContenidoTab(subtab.value);
                              setShowSidebar(false);
                            }}
                          >
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
      </div>
    </>
  );
}

export default App;
