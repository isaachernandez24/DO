import React from "react";
import { Card, CardContent } from "../componentes/ui/card";

export default function Consultor() {
  return (
    <Card className="shadow-md rounded-xl border border-gray-200 bg-white">
      <CardContent className="p-6 space-y-6">
        <h2 className="text-2xl font-bold text-blue-700">Consultor del Desarrollo Organizacional</h2>

        <p className="text-gray-700 leading-relaxed">
          El consultor del desarrollo organizacional es un profesional especializado en facilitar y acompañar los procesos de cambio y mejora dentro de las organizaciones. Su papel principal consiste en diagnosticar las necesidades, diseñar intervenciones estratégicas y apoyar la implementación de acciones que contribuyan a incrementar la efectividad organizacional y el bienestar de sus miembros.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Este consultor posee un profundo conocimiento de teorías del comportamiento organizacional, dinámicas de grupo, gestión del cambio, y herramientas de diagnóstico y evaluación. Además, cuenta con habilidades interpersonales para generar confianza, comunicación efectiva y liderazgo situacional, elementos indispensables para influir positivamente en los distintos niveles de la organización.
        </p>

        <p className="text-gray-700 leading-relaxed">
          La función del consultor no es imponer soluciones, sino más bien actuar como facilitador del proceso de transformación, promoviendo la participación activa de los colaboradores y el desarrollo de capacidades internas. A través de técnicas como entrevistas, talleres, análisis de clima laboral y evaluación de procesos, el consultor identifica áreas de oportunidad y propone estrategias ajustadas a la cultura y objetivos organizacionales.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Además, el consultor de desarrollo organizacional contribuye a crear un ambiente propicio para la innovación, la colaboración y la adaptación continua frente a los desafíos externos e internos. Su trabajo impacta directamente en la mejora del desempeño, la satisfacción laboral y la sostenibilidad a largo plazo de la empresa.
        </p>

        <p className="text-gray-700 leading-relaxed">
          En suma, el consultor del desarrollo organizacional es un aliado estratégico que acompaña a las organizaciones en su proceso de evolución, ayudándolas a construir estructuras flexibles, culturas saludables y prácticas efectivas que favorecen el logro de sus metas y el crecimiento integral de sus miembros.
        </p>

        {/* Espacio para imágenes */}
        <div className="flex flex-wrap gap-4 justify-center">
          <img
            src="/imagenes/consultor1.jpg"
            alt="Consultor organizacional en reunión"
            className="img-uniforme"
          />
          <img
            src="/imagenes/consultor2.png"
            alt="Proceso de consultoría organizacional"
            className="img-uniforme"
          />
        </div>
      </CardContent>
    </Card>
  );
}
