// DO/src/pages/Metodologia.tsx
import React from "react";
import { Card, CardContent } from "../../componentes/ui/card";

export default function Metodologia() {
  return (
    <Card>
      <CardContent className="contenido-principal">
        <h2 className="text-xl font-semibold">Estrategias Metodológicas</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Estudios de caso</li>
          <li>Aprendizaje colaborativo</li>
          <li>Aprendizaje Basado en Problemas (ABP)</li>
          <li>Uso de videos y herramientas multimedia</li>
        </ul>
      </CardContent>
    </Card>
  );
}
