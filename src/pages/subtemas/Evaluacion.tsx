import React, { useState } from "react";
import { Card, CardContent } from "../../componentes/ui/card";
import { Button } from "../../componentes/ui/button";
import { bancoPreguntas } from "../../data/preguntas"; // ✅ Importa las preguntas externas

export default function Evaluacion() {
  const [respuestas, setRespuestas] = useState<Record<string, string>>({});
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [preguntasSeleccionadas] = useState(() => {
    const todasLasPreguntas = bancoPreguntas
      .map((b) => b.preguntas)
      .reduce((acc, curr) => acc.concat(curr), []);

    return [...todasLasPreguntas]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
  });

  const manejarCambio = (pregunta: string, seleccion: string) => {
    setRespuestas({ ...respuestas, [pregunta]: seleccion });
  };

  const calcularPuntaje = () => {
    return preguntasSeleccionadas.reduce((total, p) => {
      return total + (respuestas[p.pregunta] === p.respuesta ? 1 : 0);
    }, 0);
  };

  const puntajeFinal = calcularPuntaje();

  return (
    <Card>
      <CardContent className="contenido-principal space-y-6">
        <h2 className="text-2xl font-bold text-blue-700">Autoevaluación</h2>
        <p className="text-gray-700 mb-6">
          Selecciona tus respuestas y haz clic en <strong>Evaluar Respuestas</strong> para conocer tu resultado.
        </p>

        {preguntasSeleccionadas.map((preg, i) => (
          <div key={i} className="space-y-3 bg-gray-50 p-4 rounded-md border border-gray-200 shadow-sm">
            <p className="font-medium text-lg text-gray-800">{i + 1}. {preg.pregunta}</p>
            <div className="space-y-2">
              {preg.opciones.map((op, j) => (
                <label
                  key={j}
                  className="block px-4 py-2 rounded hover:bg-blue-50 cursor-pointer transition-all duration-200"
                >
                  <input
                    type="radio"
                    name={preg.pregunta}
                    value={op}
                    checked={respuestas[preg.pregunta] === op}
                    onChange={() => manejarCambio(preg.pregunta, op)}
                    className="mr-2"
                  />
                  {op}
                </label>
              ))}
            </div>
          </div>
        ))}

        {!mostrarResultado && (
          <Button className="mt-4" onClick={() => setMostrarResultado(true)}>
            Evaluar Respuestas
          </Button>
        )}

        {mostrarResultado && (
          <div className="mt-6 bg-green-50 p-4 rounded-md border border-green-200">
            <p className="text-green-700 font-semibold text-lg">
              Puntaje: {puntajeFinal} / 5
            </p>
            <p className="text-sm text-green-700 mt-1 italic">
              {puntajeFinal === 5
                ? "¡Excelente! Dominaste el contenido."
                : puntajeFinal >= 3
                ? "Buen trabajo. Puedes revisar algunos temas para reforzar."
                : "Te recomendamos repasar el contenido antes de intentar nuevamente."}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
