import React from "react";
import { Card, CardContent } from "../../componentes/ui/card";

export default function Diagnostico() {
  return (
    <Card className="contenido-principal">
      <CardContent className="p-6 space-y-6">
        <h2 className="text-2xl font-bold text-blue-700 text-center">
          Diagnóstico, Investigación e Intervención para Medir la Salud Organizacional
        </h2>

        {/* Imagen al inicio */}
        <div className="flex justify-center mb-6">
          <img
            src="/imagenes/diagnostico1.jpg"
            alt="Reunión de diagnóstico organizacional"
            className="img-uniforme"
          />
        </div>

        <div className="text-gray-700 space-y-4 leading-relaxed">
          <p>
            El diagnóstico, la investigación y la intervención son componentes fundamentales del desarrollo organizacional, ya que permiten identificar el estado de salud de una organización, comprender sus dinámicas internas y aplicar acciones correctivas o de mejora con base en evidencia.
          </p>

          <p>
            La <strong>salud organizacional</strong> se refiere al grado en que una organización opera de forma eficaz, mantiene el bienestar de sus colaboradores y es capaz de adaptarse al cambio. Para mantener o mejorar esta salud, es esencial aplicar un enfoque sistemático y participativo.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">Fases del Diagnóstico Organizacional</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Recolección de datos:</strong> Se utilizan entrevistas, encuestas, grupos focales y observación directa para captar información relevante sobre procesos, relaciones y clima laboral.</li>
            <li><strong>Análisis e interpretación:</strong> Los datos se procesan para identificar patrones, conflictos, fortalezas y debilidades organizacionales.</li>
            <li><strong>Retroalimentación:</strong> Se comparte el diagnóstico con los actores clave para validar hallazgos y fomentar la participación activa.</li>
            <li><strong>Diseño de la intervención:</strong> En base al diagnóstico, se proponen estrategias para resolver problemas y potenciar áreas clave.</li>
          </ul>

          {/* Imagen a mitad */}
          <div className="flex justify-center my-6">
            <img
              src="/imagenes/diagnostico2.png"
              alt="Equipo aplicando intervención"
              className="img-uniforme"
            />
          </div>

          <h3 className="text-xl font-semibold text-blue-600">Investigación Organizacional</h3>
          <p>
            Implica el uso de métodos cuantitativos y cualitativos para profundizar en las causas de los problemas detectados. La investigación permite validar hipótesis, obtener una visión objetiva del funcionamiento organizacional y sustentar decisiones estratégicas con datos confiables.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">Intervención Organizacional</h3>
          <p>
            Las intervenciones son las acciones planificadas y ejecutadas con el objetivo de mejorar la situación de la organización. Estas pueden incluir programas de formación, rediseño estructural, fortalecimiento del liderazgo, cambios culturales, entre otros. El proceso debe ser participativo, progresivo y evaluado continuamente.
          </p>

          <p className="font-medium">
            En conjunto, estas tres etapas permiten promover una transformación profunda, sostenible y centrada en las personas, elevando la salud organizacional de forma integral.
          </p>
        </div>

        {/* Caso de estudio */}
        <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            🧩 Caso de Estudio: Diagnóstico para Mejorar el Clima Laboral
          </h3>
          <p className="text-gray-800">
            Una empresa tecnológica detectó una disminución en la productividad y un aumento en la rotación de personal. Se decidió aplicar un diagnóstico organizacional usando encuestas de clima laboral, entrevistas con empleados y análisis de procesos. Se identificaron problemas de comunicación y falta de reconocimiento.
          </p>

          <ul className="list-disc pl-6 mt-3 text-gray-700">
            <li>¿Qué técnicas de diagnóstico se usaron y por qué?</li>
            <li>¿Cómo se puede involucrar a los empleados en la fase de retroalimentación?</li>
            <li>¿Qué tipo de intervenciones podrían mejorar el clima laboral?</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
