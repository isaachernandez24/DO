import React from "react";
import { Card, CardContent } from "../componentes/ui/card";

export default function Estrategias() {
  return (
    <Card className="contenido-principal">
      <CardContent className="p-6 space-y-6">
        <h2 className="text-2xl font-bold text-blue-700">Estrategias del Desarrollo Organizacional</h2>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Las estrategias del desarrollo organizacional son un conjunto de acciones planificadas que buscan mejorar la efectividad de una organización a través del cambio sistemático y sostenido. Estas estrategias se basan en teorías del comportamiento humano, la gestión del cambio, la cultura organizacional y la dinámica de grupos. Su finalidad es promover un entorno laboral saludable, productivo y adaptativo frente a los desafíos del entorno.
          </p>

          <p><strong>1. Intervenciones en procesos humanos:</strong> Buscan mejorar la comunicación, el trabajo en equipo y las relaciones interpersonales. Se aplican mediante talleres, dinámicas grupales y entrenamientos en habilidades sociales.</p>

          <p><strong>2. Desarrollo del liderazgo:</strong> Se enfoca en formar líderes capaces de guiar los procesos de cambio mediante programas de coaching, liderazgo transformacional y toma de decisiones estratégicas.</p>

          <p><strong>3. Mejoramiento de la estructura organizacional:</strong> Implica rediseñar la jerarquía, funciones y procesos para lograr una organización más ágil, eficiente y alineada con sus metas estratégicas.</p>

          <p><strong>4. Gestión de la cultura organizacional:</strong> Busca modificar valores, creencias y hábitos que obstaculizan el cambio, promoviendo una cultura de innovación, confianza y mejora continua.</p>

          <p><strong>5. Desarrollo del talento humano:</strong> Se refiere a la formación, capacitación, gestión del desempeño y desarrollo de competencias que permitan al personal crecer y responder a los retos organizacionales.</p>

          <p><strong>6. Gestión del cambio organizacional:</strong> Acompaña todo proceso de transformación, asegurando que el cambio sea planificado, comunicado, sostenido y aceptado por todos los miembros de la organización.</p>
        </div>

        {/* Espacio para imágenes */}
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <img
            src="/imagenes/estrategia1.jpg"
            alt="Taller de equipo"
            className="img-uniforme"
          />
          <img
            src="/imagenes/estrategia2.jpg"
            alt="Sesión de liderazgo organizacional"
            className="img-uniforme"
          />
        </div>
      </CardContent>
    </Card>
  );
}
