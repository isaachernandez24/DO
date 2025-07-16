import React from "react";
import { Card, CardContent } from "../../componentes/ui/card";

export default function Enfoques() {
  return (
    <Card className="contenido-principal">
      <CardContent className="p-6 space-y-6">
        <h2 className="text-2xl font-bold text-blue-700 text-center">
          Enfoques Clásicos del Desarrollo Organizacional
        </h2>

        {/* Imagen inicial */}
        <div className="flex justify-center mb-4">
          <img
            src="/imagenes/enfoque1.png"
            alt="Sistema organizacional abierto"
            className="img-uniforme"
          />
        </div>

        {/* Contenido textual */}
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Los enfoques clásicos del desarrollo organizacional han sido fundamentales para comprender y guiar los procesos de cambio dentro de las organizaciones. Cada uno ofrece una visión distinta de cómo diagnosticar, intervenir y mejorar el funcionamiento organizacional:
          </p>

          <p>
            <strong>1. Enfoque de sistemas abiertos:</strong> Considera a la organización como un sistema compuesto por subsistemas interrelacionados que interactúan con el entorno. Propone una visión global y adaptable del cambio.
          </p>

          <p>
            <strong>2. Enfoque humanista:</strong> Se enfoca en el desarrollo del potencial humano. Promueve liderazgo participativo, motivación y comunicación abierta, basado en teorías como las de Maslow y Herzberg.
          </p>

          {/* Imagen a mitad de contenido */}
          <div className="flex justify-center my-6">
            <img
              src="/imagenes/enfoque2.jpg"
              alt="Interacción humano-tecnología"
              className="img-uniforme"
            />
          </div>

          <p>
            <strong>3. Enfoque sociotécnico:</strong> Plantea que el éxito organizacional depende del equilibrio entre los sistemas sociales (personas, relaciones) y técnicos (procesos, tecnologías).
          </p>

          <p>
            <strong>4. Enfoque contingencial:</strong> Sostiene que no hay una única forma de gestionar una organización. Las decisiones deben adaptarse a las circunstancias internas y externas.
          </p>
        </div>

        {/* Caso de estudio */}
        <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            🧠 Caso de Estudio: Adaptación de una empresa de telecomunicaciones
          </h3>
          <p className="text-gray-800">
            Una empresa de telecomunicaciones enfrentaba altos niveles de rotación y baja productividad. Tras aplicar el enfoque contingencial, los líderes reorganizaron los equipos con base en las condiciones locales y fortalecieron el liderazgo participativo (humanista). También rediseñaron los sistemas técnicos y operativos con el enfoque sociotécnico.
          </p>
          <p className="text-gray-800 mt-2">
            Este enfoque combinado permitió mejorar la satisfacción laboral, reducir la rotación y aumentar la eficiencia general del sistema.
          </p>

          {/* Preguntas de análisis */}
          <ul className="list-disc pl-6 mt-3 text-gray-700">
            <li>¿Qué enfoque tuvo mayor impacto en la resolución del problema?</li>
            <li>¿Por qué fue importante combinar varios enfoques?</li>
            <li>¿Cómo se podría aplicar el enfoque de sistemas abiertos en otro contexto?</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
