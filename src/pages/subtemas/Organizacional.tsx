import React from "react";
import { Card, CardContent } from "../../componentes/ui/card";

export default function Organizacional() {
  return (
    <Card className="contenido-principal">
      <CardContent className="p-6 space-y-6">
        <h2 className="text-2xl font-bold text-blue-700 text-center">
          Cambio Organizacional
        </h2>

        {/* Imagen al inicio */}
        <div className="flex justify-center mb-6">
          <img
            src="/imagenes/cambio1.jpg"
            alt="Transformación organizacional"
            className="img-uniforme"
          />
        </div>

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

          {/* Imagen a mitad */}
          <div className="flex justify-center my-6">
            <img
              src="/imagenes/cambio2.jpg"
              alt="Gestión del cambio en equipos"
              className="img-uniforme"
            />
          </div>

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

        {/* Caso de estudio */}
        <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            🧠 Caso de Estudio: Superando la Resistencia al Cambio
          </h3>
          <p className="text-gray-800">
            Una empresa manufacturera implementó un cambio tecnológico significativo que impactó los procesos de producción. Muchos empleados mostraron resistencia, preocupados por su estabilidad laboral y adaptación a las nuevas tecnologías. El equipo directivo desarrolló un plan de comunicación abierta y capacitaciones constantes, involucrando a los empleados en la transición.
          </p>

          <ul className="list-disc pl-6 mt-3 text-gray-700">
            <li>¿Qué estrategias se utilizaron para reducir la resistencia al cambio?</li>
            <li>¿Cómo influyó la comunicación en el éxito del cambio?</li>
            <li>¿Qué papel jugaron las capacitaciones en la adaptación del personal?</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
