import React from "react";
import { Card, CardContent } from "../../componentes/ui/card";

export default function Metodologia() {
  return (
    <Card>
      <CardContent className="contenido-principal space-y-6 text-gray-800 leading-relaxed">
        <h2 className="text-2xl font-bold text-blue-700 text-center">
          Estrategias Metodológicas y de Evaluación
        </h2>

        {/* Estrategias Metodológicas */}
        <section>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">📘 Estrategias Metodológicas</h3>
          <p>
            El proceso de enseñanza-aprendizaje en la asignatura <strong>Desarrollo Organizacional</strong> se apoya en un enfoque metodológico activo y participativo, orientado a estimular la reflexión crítica, la toma de decisiones y la capacidad de análisis del estudiante ante los desafíos organizacionales. A continuación, se describen las principales estrategias que se implementarán:
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Estudios de caso:</strong> Se utilizarán situaciones reales o hipotéticas de organizaciones en proceso de cambio. El estudiante deberá identificar los problemas, analizar sus causas y proponer soluciones viables aplicando teorías del desarrollo organizacional.
            </li>

            <li>
              <strong>Aprendizaje colaborativo:</strong> Se promoverá el trabajo en equipo como espacio para compartir experiencias, generar soluciones conjuntas y fortalecer la comunicación interpersonal. Los estudiantes aprenderán a coordinar esfuerzos y a valorar la diversidad de perspectivas.
            </li>

            <li>
              <strong>Aprendizaje Basado en Problemas (ABP):</strong> Los estudiantes enfrentarán escenarios complejos que requerirán investigación, argumentación y diseño de estrategias para resolverlos. Esta metodología favorece la autonomía, el pensamiento crítico y la integración de conocimientos.
            </li>

            <li>
              <strong>Uso de recursos audiovisuales y herramientas TIC:</strong> Se integrarán documentales, entrevistas, infografías, simuladores organizacionales y plataformas digitales que faciliten la comprensión de los contenidos, aporten ejemplos visuales y fomenten el aprendizaje autónomo.
            </li>

            <li>
              <strong>Discusión guiada:</strong> A través de foros presenciales o virtuales se fomentará el intercambio de ideas, cuestionamientos y reflexiones sobre temas clave del curso, fortaleciendo la argumentación y la participación activa.
            </li>
          </ul>
        </section>

        {/* Estrategias de Evaluación */}
        <section>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">📝 Estrategias de Evaluación</h3>
          <p>
            La evaluación será continua, formativa y sumativa, permitiendo valorar tanto el proceso como los resultados del aprendizaje. Se privilegiará la aplicación práctica de los conocimientos, la creatividad, el compromiso y la capacidad crítica. Las principales estrategias de evaluación son las siguientes:
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Proyectos integradores:</strong> Desarrollo de propuestas de intervención organizacional, aplicando modelos y herramientas estudiadas en clase. Estos proyectos pueden ser individuales o grupales y estarán orientados a diagnosticar, planificar e implementar cambios organizacionales.
            </li>

            <li>
              <strong>Presentaciones orales y multimedia:</strong> Los estudiantes expondrán resultados de sus investigaciones, propuestas o análisis de casos, utilizando herramientas visuales (como presentaciones, mapas conceptuales o videos), promoviendo la expresión oral, claridad argumentativa y dominio del contenido.
            </li>

            <li>
              <strong>Debates estructurados:</strong> Se organizarán debates donde los estudiantes tomarán posturas frente a temas controversiales del desarrollo organizacional, promoviendo el análisis de distintas perspectivas y el respeto al pensamiento divergente.
            </li>

            <li>
              <strong>Producción de materiales audiovisuales:</strong> Grabación de cápsulas informativas, entrevistas simuladas o análisis en formato video/audio, que demuestren el dominio de los conceptos teóricos y su aplicabilidad práctica.
            </li>

            <li>
              <strong>Rúbricas de evaluación:</strong> Se aplicarán criterios previamente establecidos para evaluar cada producto o desempeño, asegurando objetividad y retroalimentación constructiva al estudiante.
            </li>

            <li>
              <strong>Autoevaluación y coevaluación:</strong> Se incluirán espacios donde el estudiante pueda valorar su propio aprendizaje y el de sus compañeros, desarrollando competencias de autorreflexión y responsabilidad compartida.
            </li>
          </ul>
        </section>
      </CardContent>
    </Card>
  );
}
