import React from "react";
import { Card, CardContent } from "../componentes/ui/card";

export default function Enfoques() {
  return (
    <Card className="shadow-md rounded-xl border border-gray-200 bg-white">
      <CardContent className="p-6 space-y-6">
        <h2 className="text-2xl font-bold text-blue-700">Enfoques Clásicos del Desarrollo Organizacional</h2>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Los enfoques clásicos del desarrollo organizacional han sido fundamentales para comprender y guiar los procesos de cambio dentro de las organizaciones. Cada uno ofrece una visión distinta de cómo diagnosticar, intervenir y mejorar el funcionamiento organizacional. A continuación se explican los principales enfoques:
          </p>

          <p><strong>1. Enfoque de sistemas abiertos:</strong> Considera a la organización como un sistema compuesto por subsistemas interrelacionados que interactúan con el entorno. Propone que cualquier cambio en una parte afecta al todo, por lo que se necesita una visión global, adaptable y coordinada del cambio.</p>

          <p><strong>2. Enfoque humanista:</strong> Se enfoca en el desarrollo del potencial humano dentro de la organización. Promueve un liderazgo participativo, la motivación, la comunicación abierta y el trabajo en equipo. Parte de teorías como la de Maslow (jerarquía de necesidades) y Herzberg (factores motivacionales e higiénicos).</p>

          <p><strong>3. Enfoque sociotécnico:</strong> Plantea que el éxito organizacional depende del equilibrio entre los sistemas sociales (personas, relaciones) y los sistemas técnicos (procesos, tecnologías). Busca diseñar entornos de trabajo eficientes y humanizados al mismo tiempo.</p>

          <p><strong>4. Enfoque contingencial:</strong> Este enfoque sostiene que no hay una única forma de gestionar una organización. Las decisiones deben adaptarse a las circunstancias internas y externas (tamaño, tecnología, entorno, cultura). Favorece soluciones flexibles según cada contexto específico.</p>
        </div>

        {/* Espacio para imágenes */}
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <img
            src="/imagenes/enfoque1.jpg"
            alt="Sistema organizacional abierto"
            className="w-full max-w-xs rounded shadow"
          />
          <img
            src="/imagenes/enfoque2.jpg"
            alt="Interacción humano-tecnología"
            className="w-full max-w-xs rounded shadow"
          />
        </div>
      </CardContent>
    </Card>
  );
}
