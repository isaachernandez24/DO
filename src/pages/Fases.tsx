import React from "react";
import { Card, CardContent } from "../componentes/ui/card";

export default function Fases() {
  return (
    <Card className="shadow-md rounded-xl border border-gray-200 bg-white">
      <CardContent className="p-6 space-y-6">
        <h2 className="text-2xl font-bold text-blue-700">Fases del Desarrollo Organizacional</h2>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p><strong>1. Diagnóstico organizacional:</strong> Esta fase consiste en identificar y comprender la situación actual de la organización. Se analizan áreas problemáticas, procesos ineficientes y necesidades de cambio mediante encuestas, entrevistas, observaciones y otras herramientas diagnósticas. Es la base para definir una intervención adecuada.</p>

          <p><strong>2. Planeación del cambio:</strong> A partir del diagnóstico, se diseña un plan estratégico de intervención. Esto incluye definir objetivos, seleccionar técnicas apropiadas, asignar recursos y establecer un cronograma. La planeación debe considerar la cultura organizacional y contar con el compromiso de la alta dirección.</p>

          <p><strong>3. Implementación:</strong> En esta fase se ejecutan las acciones planificadas. Se introducen cambios estructurales, conductuales o culturales, y se promueve la participación activa del personal. Es clave una buena comunicación, liderazgo efectivo y un seguimiento cercano de las acciones.</p>

          <p><strong>4. Evaluación:</strong> Una vez aplicadas las intervenciones, se evalúa su impacto. Se comparan resultados con los objetivos establecidos y se determinan logros y aspectos por mejorar. Esta evaluación puede incluir indicadores de desempeño, encuestas de satisfacción y análisis de procesos.</p>

          <p><strong>5. Retroalimentación y mantenimiento:</strong> Finalmente, se realiza un proceso de retroalimentación con los miembros de la organización. Se institucionalizan los cambios exitosos y se establecen mecanismos para su mantenimiento. Esta fase fomenta una cultura de mejora continua y aprendizaje organizacional.</p>
        </div>

        {/* Imágenes representativas */}
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <img
            src="/imagenes/fase1.jpg"
            alt="Diagnóstico organizacional"
            className="w-full max-w-xs rounded shadow"
          />
          <img
            src="/imagenes/fase2.jpg"
            alt="Implementación del cambio"
            className="w-full max-w-xs rounded shadow"
          />
        </div>
      </CardContent>
    </Card>
  );
}
