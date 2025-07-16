import React from "react";
import { Card, CardContent } from "../../componentes/ui/card";

export default function Historia() {
  return (
    <Card className="contenido-principal">
      <CardContent className="p-6 space-y-6">
        <h2 className="text-2xl font-bold text-blue-700 text-center">
          Historia del Desarrollo Organizacional
        </h2>

        {/* Imagen al principio */}
        <div className="flex justify-center">
          <img
            src="/imagenes/historia1.png"
            alt="Orígenes del desarrollo organizacional"
            className="img-uniforme"
          />
        </div>

        {/* Texto principal */}
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            El desarrollo organizacional (DO) tiene sus raíces en la segunda mitad del siglo XX, como una respuesta a los profundos cambios sociales, económicos y tecnológicos que afectaban a las organizaciones. Su evolución refleja una creciente conciencia sobre la importancia del factor humano en el éxito empresarial y la necesidad de adaptarse a entornos cambiantes mediante procesos de mejora continua.
          </p>

          <p>
            <strong>Orígenes en las ciencias del comportamiento (1940-1950):</strong> El DO se fundamenta en investigaciones realizadas por psicólogos y sociólogos organizacionales. Un hito importante fue el experimento de Hawthorne en la década de 1930, que destacó la influencia del entorno social y la motivación en el rendimiento laboral.
          </p>

          {/* Imagen a mitad del contenido */}
          <div className="flex justify-center my-6">
            <img
              src="/imagenes/historia2.jpg"
              alt="Evolución del desarrollo organizacional"
              className="img-uniforme"
            />
          </div>

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

        {/* Caso de estudio contextualizado */}
        <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            🧠 Caso de Estudio: Aplicación Histórica del DO en General Electric
          </h3>
          <p className="text-gray-800">
            En los años 60, General Electric implementó un programa de Desarrollo Organizacional como parte de su modernización administrativa. Siguiendo los principios de Kurt Lewin, trabajaron con equipos multidisciplinarios para promover la comunicación, la resolución colaborativa de problemas y la toma de decisiones participativa.
          </p>
          <p className="text-gray-800 mt-2">
            Esta intervención incorporó sesiones de retroalimentación y talleres de sensibilización que permitieron identificar barreras culturales y promover el liderazgo transformacional. El resultado fue una mejora significativa en la productividad y en el clima laboral, y se convirtió en un modelo replicado por otras corporaciones.
          </p>

          {/* Preguntas para análisis */}
          <ul className="list-disc pl-6 mt-3 text-gray-700">
            <li>¿Qué aportes de Kurt Lewin se ven reflejados en este caso?</li>
            <li>¿Cómo se aplicaron los principios de retroalimentación y participación?</li>
            <li>¿Qué relación existe entre este caso y los enfoques sistémicos del DO?</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
