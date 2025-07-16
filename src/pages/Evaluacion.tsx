import React from "react";
import { useState } from "react";
import { Card, CardContent } from "../componentes/ui/card";
import { Button } from "../componentes/ui/button";

export default function Evaluacion() {
  const [resultado, setResultado] = useState<{ score: number; feedback: string } | null>(null);

  const handleEvaluacion = () => {
    setResultado({
      score: 8.5,
      feedback: "¡Buen trabajo! Revisa el núcleo 5 para reforzar conceptos.",
    });
  };

  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <h2 className="text-xl font-semibold">Autoevaluación</h2>
        <p>Responde el cuestionario para conocer tu progreso.</p>
        <Button onClick={handleEvaluacion}>Iniciar Evaluación</Button>
        {resultado && (
          <div className="mt-4">
            <p className="text-green-600 font-semibold">Puntaje: {resultado.score}/10</p>
            <p className="text-sm italic">{resultado.feedback}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
