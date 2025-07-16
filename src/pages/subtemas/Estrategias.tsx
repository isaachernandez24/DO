import React from "react";
import { Card, CardContent } from "../../componentes/ui/card";

export default function Estrategias() {
  return (
    <Card className="contenido-principal">
      <CardContent className="p-6 space-y-6">
        <h2 className="text-2xl font-bold text-blue-700 text-center">
          Estrategias del Desarrollo Organizacional
        </h2>

        {/* Imagen principal al inicio */}
        <div className="flex justify-center">
          <img
            src="/imagenes/estrategia1.png"
            alt="Taller de equipo"
            className="img-uniforme"
          />
        </div>

        {/* Contenido textual con puntos estratégicos */}
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Las estrategias del desarrollo organizacional (DO) son acciones planificadas que buscan mejorar la efectividad de una organización a través del cambio sistemático. Se basan en teorías del comportamiento humano, liderazgo, dinámica de grupos y gestión cultural.
          </p>

          <p>
            <strong>1. Intervenciones en procesos humanos:</strong> Mejoran la comunicación, el trabajo en equipo y las relaciones. Se implementan con talleres, dinámicas grupales y entrenamientos.
          </p>

          <p>
            <strong>2. Desarrollo del liderazgo:</strong> Forma líderes que impulsen el cambio mediante coaching, liderazgo transformacional y toma de decisiones estratégicas.
          </p>

          {/* Imagen en medio del contenido */}
          <div className="flex justify-center my-6">
            <img
              src="/imagenes/estrategia2.png"
              alt="Sesión de liderazgo organizacional"
              className="img-uniforme"
            />
          </div>

          <p>
            <strong>3. Mejoramiento de la estructura organizacional:</strong> Rediseña jerarquías, roles y procesos para lograr eficiencia y alineación estratégica.
          </p>

          <p>
            <strong>4. Gestión de la cultura organizacional:</strong> Transforma valores y creencias que impiden el cambio, fomentando una cultura de innovación y mejora continua.
          </p>

          <p>
            <strong>5. Desarrollo del talento humano:</strong> Incluye capacitación, evaluación del desempeño y desarrollo de competencias clave.
          </p>

          <p>
            <strong>6. Gestión del cambio organizacional:</strong> Asegura que todo cambio sea planificado, comunicado y sostenido por todos los actores de la organización.
          </p>
        </div>

        {/* Caso de estudio */}
        <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            🧠 Caso de Estudio: Google y el Desarrollo del Talento
          </h3>
          <p className="text-gray-800">
            Google ha sido reconocida por implementar estrategias efectivas de DO, enfocándose en el desarrollo del talento humano y la cultura organizacional. A través de su programa "People Operations", la empresa realiza encuestas internas, sesiones de retroalimentación continua y promueve la autonomía de sus empleados.
          </p>
          <p className="text-gray-800 mt-2">
            Además, fomenta el liderazgo distribuido y el aprendizaje continuo mediante programas de capacitación y mentoría. Estas estrategias han contribuido a mantener niveles altos de innovación, motivación y compromiso organizacional.
          </p>

          {/* Preguntas de análisis */}
          <ul className="list-disc pl-6 mt-3 text-gray-700">
            <li>¿Qué estrategias específicas de DO aplicó Google en este caso?</li>
            <li>¿Cómo se relaciona el desarrollo del talento humano con la cultura organizacional?</li>
            <li>¿Por qué es importante medir continuamente el clima y desempeño del personal?</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
