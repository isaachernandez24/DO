import React from "react";
import { Card, CardContent } from "../../componentes/ui/card";

export default function Fases() {
  return (
    <Card className="contenido-principal">
      <CardContent className="p-6 space-y-6">
        <h2 className="text-2xl font-bold text-blue-700 text-center">
          Fases del Desarrollo Organizacional
        </h2>

        {/* Imagen inicial */}
        <div className="flex justify-center mb-4">
          <img
            src="/imagenes/fase1.jpg"
            alt="Diagnóstico organizacional"
            className="img-uniforme"
          />
        </div>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong>1. Diagnóstico organizacional:</strong> Esta fase consiste en identificar y comprender la situación actual de la organización. Se analizan áreas problemáticas, procesos ineficientes y necesidades de cambio mediante encuestas, entrevistas y observaciones. Es la base para definir una intervención adecuada.
          </p>

          <p>
            <strong>2. Planeación del cambio:</strong> A partir del diagnóstico, se diseña un plan estratégico. Esto incluye definir objetivos, seleccionar técnicas apropiadas, asignar recursos y establecer un cronograma. La planificación debe considerar la cultura organizacional y contar con el compromiso de la alta dirección.
          </p>

          {/* Imagen intermedia */}
          <div className="flex justify-center my-6">
            <img
              src="/imagenes/fase2.jpg"
              alt="Implementación del cambio"
              className="img-uniforme"
            />
          </div>

          <p>
            <strong>3. Implementación:</strong> En esta fase se ejecutan las acciones. Se introducen cambios estructurales, conductuales o culturales, y se promueve la participación activa del personal. Es clave una buena comunicación, liderazgo efectivo y seguimiento.
          </p>

          <p>
            <strong>4. Evaluación:</strong> Se comparan resultados con los objetivos y se determinan logros y áreas de mejora. La evaluación incluye indicadores de desempeño, encuestas de satisfacción y análisis de procesos.
          </p>

          <p>
            <strong>5. Retroalimentación y mantenimiento:</strong> Se realiza retroalimentación con los miembros de la organización. Se institucionalizan los cambios exitosos y se establecen mecanismos para su sostenibilidad, fomentando una cultura de mejora continua.
          </p>
        </div>

        {/* Caso de estudio */}
        <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            🧠 Caso de Estudio: Transformación en una empresa de manufactura
          </h3>
          <p className="text-gray-800">
            Una empresa de manufactura enfrentaba retrasos de producción y altos niveles de rotación. Tras un diagnóstico profundo, se descubrió falta de liderazgo intermedio y baja comunicación entre departamentos. Se diseñó un plan para capacitar supervisores, reestructurar procesos y reforzar la cultura de colaboración. La implementación fue progresiva, con acompañamiento técnico. Se midieron resultados trimestralmente y se ajustaron las acciones según retroalimentación del personal.
          </p>

          <ul className="list-disc pl-6 mt-3 text-gray-700">
            <li>¿Qué fase fue más crítica en el caso presentado y por qué?</li>
            <li>¿Cómo se garantizó la sostenibilidad de los cambios?</li>
            <li>¿Qué indicadores podrías usar para evaluar este tipo de intervención?</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
