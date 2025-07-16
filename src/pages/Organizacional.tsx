import React from "react";
import { Card, CardContent } from "../componentes/ui/card";

export default function Organizacional() {
  return (
    <Card className="shadow-md rounded-xl border border-gray-200 bg-white">
      <CardContent className="p-6 space-y-6">
        <h2 className="text-2xl font-bold text-blue-700">Cambio Organizacional</h2>

        <div className="text-gray-700 space-y-4 leading-relaxed">
          <p>
            El cambio organizacional es un proceso mediante el cual una organización modifica elementos clave como su estructura, cultura, procesos o tecnología con el fin de mejorar su rendimiento o adaptarse a nuevos contextos. Este cambio puede ser planificado o no, pero siempre implica un impacto en las personas y en la forma de trabajar.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">Tipos de cambio organizacional</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cambio incremental:</strong> Se da de forma progresiva mediante pequeñas mejoras continuas.</li>
            <li><strong>Cambio transformacional:</strong> Es profundo, afecta toda la organización y requiere reestructuración o rediseño cultural.</li>
            <li><strong>Cambio planificado:</strong> Responde a un diagnóstico previo y se ejecuta con una estrategia clara.</li>
            <li><strong>Cambio no planificado:</strong> Reacción rápida ante imprevistos, crisis o presiones externas.</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-600">Factores que impulsan el cambio</h3>
          <p>
            El entorno cambiante obliga a las organizaciones a transformarse. Entre los factores más comunes se encuentran los avances tecnológicos, las exigencias del mercado, los cambios regulatorios, las expectativas de los clientes y las nuevas formas de trabajo.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">Resistencia al cambio</h3>
          <p>
            Las personas pueden mostrar resistencia al cambio por miedo a lo desconocido, pérdida de control o falta de información. Una comunicación clara, la participación activa y el acompañamiento emocional son claves para superar esa resistencia.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">Gestión del cambio organizacional</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Evaluar la situación actual de la organización.</li>
            <li>Establecer metas claras de cambio.</li>
            <li>Diseñar un plan de intervención participativo.</li>
            <li>Capacitar y apoyar a los líderes y equipos.</li>
            <li>Medir los resultados y ajustar las acciones.</li>
          </ul>

          <p>
            Un cambio organizacional bien gestionado fortalece el compromiso, mejora el clima laboral y permite a la organización evolucionar de forma sostenible.
          </p>
        </div>

        {/* Imágenes opcionales */}
        <div className="flex flex-wrap gap-4 justify-center pt-6">
          <img
            src="/imagenes/cambio1.jpg"
            alt="Transformación organizacional"
            className="w-full max-w-xs rounded shadow"
          />
          <img
            src="/imagenes/cambio2.jpg"
            alt="Gestión del cambio en equipos"
            className="w-full max-w-xs rounded shadow"
          />
        </div>
      </CardContent>
    </Card>
  );
}
