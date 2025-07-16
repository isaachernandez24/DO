import React from "react";
import Introduccion from "./subtemas/Introduccion";
import Organizacional from "./subtemas/Organizacional";
import Fases from "./subtemas/Fases";
import Historia from "./subtemas/Historia";
import Enfoques from "./subtemas/Enfoques";
import Estrategias from "./subtemas/Estrategias";
import Diagnostico from "./subtemas/Diagnostico";
import Consultor from "./subtemas/Consultor";
import Evaluacion from "./subtemas/Evaluacion";
import Metodologia from "./subtemas/Metodologia";
import Recursos from "./subtemas/Recursos";

export default function Contenido() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      {/* Índice de contenidos */}
      <nav className="mb-8 p-4 bg-blue-50 rounded shadow-sm">
        <h3 className="text-xl font-semibold mb-3">Índice de Contenidos</h3>
        <ul className="list-disc list-inside space-y-1 text-blue-700">
          <li><a href="#introduccion" className="hover:underline">Introducción</a></li>
          <li><a href="#organizacional" className="hover:underline">Cambio Organizacional</a></li>
          <li><a href="#fases" className="hover:underline">Fases del Desarrollo Organizacional</a></li>
          <li><a href="#historia" className="hover:underline">Historia del Desarrollo Organizacional</a></li>
          <li><a href="#enfoques" className="hover:underline">Enfoques Clásicos</a></li>
          <li><a href="#estrategias" className="hover:underline">Estrategias del Desarrollo Organizacional</a></li>
          <li><a href="#diagnostico" className="hover:underline">Diagnóstico, Investigación e Intervención</a></li>
          <li><a href="#consultor" className="hover:underline">Funciones y Roles del Consultor</a></li>
          <li><a href="#evaluacion" className="hover:underline">Evaluación</a></li>
          <li><a href="#metodologia" className="hover:underline">Metodología</a></li>
          <li><a href="#recursos" className="hover:underline">Recursos</a></li>
        </ul>
      </nav>

      {/* Secciones con contenido */}
      <section id="introduccion" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Introducción</h2>
        <Introduccion />
      </section>

      <section id="organizacional" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Cambio Organizacional</h2>
        <Organizacional />
      </section>

      <section id="fases" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Fases del Desarrollo Organizacional</h2>
        <Fases />
      </section>

      <section id="historia" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Historia del Desarrollo Organizacional</h2>
        <Historia />
      </section>

      <section id="enfoques" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Enfoques Clásicos</h2>
        <Enfoques />
      </section>

      <section id="estrategias" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Estrategias del Desarrollo Organizacional</h2>
        <Estrategias />
      </section>

      <section id="diagnostico" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Diagnóstico, Investigación e Intervención</h2>
        <Diagnostico />
      </section>

      <section id="consultor" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Funciones y Roles del Consultor</h2>
        <Consultor />
      </section>

      <section id="evaluacion" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Evaluación</h2>
        <Evaluacion />
      </section>

      <section id="metodologia" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Metodología</h2>
        <Metodologia />
      </section>

      <section id="recursos" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Recursos</h2>
        <Recursos />
      </section>
    </div>
  );
}
