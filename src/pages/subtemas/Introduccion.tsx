import * as React from "react";
import { Card, CardContent } from "../../componentes/ui/card";
import { Button } from "../../componentes/ui/button";

export default function Introduccion() {
  return (
    <Card>
      <CardContent className="contenido-principal">
        <h2 className="text-2xl font-semibold">Introducción al Desarrollo Organizacional</h2>

        {/* Imagen al inicio, junto al título */}
        <div className="flex justify-center mb-6">
          <img
            src="/imagenes/imagen1.png"
            alt="Ilustración del Desarrollo Organizacional"
            className="img-uniforme max-w-md"
            style={{ borderRadius: "8px" }}
          />
        </div>

        <p>
          El desarrollo organizacional es un enfoque integral y sistemático que busca mejorar la eficacia y la salud de una organización a través del cambio planificado. Este proceso implica la aplicación de teorías y técnicas de ciencias del comportamiento para ayudar a las organizaciones a adaptarse a un entorno dinámico, mejorar sus procesos internos, promover una cultura colaborativa y aumentar el bienestar de sus miembros.
        </p>

        <p>
          El concepto de desarrollo organizacional surge en la década de 1950, cuando investigadores en el campo de la psicología organizacional comenzaron a entender que el éxito de una organización no solo dependía de sus recursos materiales o tecnológicos, sino también del factor humano y de la capacidad para gestionar el cambio de manera efectiva. Desde entonces, el DO ha evolucionado como una disciplina que integra prácticas como el coaching, la formación en habilidades interpersonales, la mejora continua, el trabajo en equipo y la comunicación efectiva, todo orientado a generar transformaciones sostenibles en la estructura, la cultura y los procesos de las organizaciones.
        </p>

        {/* Imagen en medio del texto */}
        <div className="flex justify-center my-6">
          <img
            src="/imagenes/imagen2.jpeg"
            alt="Proceso de cambio organizacional"
            className="img-uniforme max-w-md"
            style={{ borderRadius: "8px" }}
          />
        </div>

        <p>
          En un mundo empresarial cada vez más complejo y competitivo, las organizaciones enfrentan constantes retos: cambios tecnológicos, nuevas formas de trabajo, diversidad cultural, globalización y fluctuaciones del mercado. El desarrollo organizacional se convierte así en una herramienta estratégica para que las empresas puedan anticiparse y adaptarse a estos desafíos, facilitando la innovación, mejorando la productividad y promoviendo un ambiente laboral saludable.
        </p>

        <p>
          Además, el DO no solo busca resultados económicos, sino que también pone énfasis en el desarrollo integral de las personas que conforman la organización, fomentando la participación, la motivación y el compromiso, elementos esenciales para alcanzar objetivos colectivos.
        </p>

        <p>
          En resumen, el desarrollo organizacional es un proceso continuo y colaborativo que impulsa a las organizaciones a transformar sus prácticas, cultura y estructura para alcanzar un desempeño óptimo y sostenible, teniendo en cuenta tanto las necesidades del negocio como el bienestar de sus miembros.
        </p>

        {/* Caso de estudio */}
        <section className="mt-8 p-4 border-l-4 border-blue-600 bg-blue-50 rounded">
          <h3 className="text-xl font-semibold mb-2 text-blue-700">Caso de Estudio: Transformación Cultural en Empresa XYZ</h3>
          <p>
            La empresa XYZ enfrentaba una fuerte resistencia interna al cambio debido a una cultura organizacional rígida y poco colaborativa. Implementó un programa de desarrollo organizacional basado en talleres participativos, coaching a mandos medios y rediseño de procesos para fomentar la innovación y el trabajo en equipo.
          </p>
          <p>
            En un plazo de 12 meses, la organización reportó un aumento del 25% en la satisfacción laboral, reducción de la rotación del personal y mejoras significativas en la eficiencia operativa, demostrando cómo el desarrollo organizacional puede transformar la cultura para afrontar retos y crecer sosteniblemente.
          </p>
        </section>

        <div className="mt-6 flex justify-center">
          
        </div>
      </CardContent>
    </Card>
  );
}
