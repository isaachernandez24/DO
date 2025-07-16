import React from "react";
import { Card, CardContent } from "../componentes/ui/card";

export default function Historia() {
  return (
    <Card className="shadow-md rounded-xl border border-gray-200 bg-white">
      <CardContent className="p-6 space-y-6">
        <h2 className="text-2xl font-bold text-blue-700">Historia del Desarrollo Organizacional</h2>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            El desarrollo organizacional (DO) tiene sus raíces en la segunda mitad del siglo XX, como una respuesta a los profundos cambios sociales, económicos y tecnológicos que afectaban a las organizaciones. Su evolución refleja una creciente conciencia sobre la importancia del factor humano en el éxito empresarial y la necesidad de adaptarse a entornos cambiantes mediante procesos de mejora continua.
          </p>

          <p>
            <strong>Orígenes en las ciencias del comportamiento (1940-1950):</strong> El DO se fundamenta en investigaciones realizadas por psicólogos y sociólogos organizacionales. Un hito importante fue el experimento de Hawthorne en la década de 1930, que destacó la influencia del entorno social y la motivación en el rendimiento laboral.
          </p>

          <p>
            <strong>Desarrollo inicial y teoría de grupos (1950-1960):</strong> Kurt Lewin, considerado uno de los padres del DO, introdujo conceptos fundamentales como la “investigación-acción” y el modelo de cambio en tres etapas (descongelar, cambiar, recongelar). Se comenzaron a aplicar técnicas grupales para promover la participación y el cambio.
          </p>

          <p>
            <strong>Expansión y formalización (1960-1970):</strong> El DO se estableció como disciplina formal. Se implementaron programas de cambio organizacional en grandes empresas y universidades. Se promovieron métodos de retroalimentación, reestructuración y capacitación en habilidades blandas.
          </p>

          <p>
            <strong>Enfoque sistémico (1980-1990):</strong> Se incorporó la perspectiva de sistemas abiertos, considerando que las organizaciones interactúan de forma continua con su entorno. Esto llevó a una visión más integradora del cambio, con énfasis en la calidad total, la cultura organizacional y la adaptación continua.
          </p>

          <p>
            <strong>Modernización y transformación digital (2000 en adelante):</strong> El DO se ha orientado a la innovación tecnológica, la sostenibilidad y la estrategia organizacional. Se integran herramientas como el coaching, la inteligencia emocional, el liderazgo transformacional y la gestión del conocimiento.
          </p>
        </div>

        {/* Espacio para imágenes */}
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <img
            src="/imagenes/historia1.png"
            alt="Orígenes del desarrollo organizacional"
            className="w-full max-w-xs rounded shadow"
          />
          <img
            src="/imagenes/historia2.jpg"
            alt="Evolución del desarrollo organizacional"
            className="w-full max-w-xs rounded shadow"
          />
        </div>
      </CardContent>
    </Card>
  );
}

