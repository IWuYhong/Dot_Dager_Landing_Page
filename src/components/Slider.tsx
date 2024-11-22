import { useState, useEffect } from 'react';

const frases = [
  'Mi programa para cortar pepinos arrojó una excepción de \'Pepino Demasiado Corto Exception\'.',
  'Estoy creando una base de datos de pepinos. Ya tengo campos para el tamaño, el color y la variedad, pero aún no sé cómo representar el sabor en un tipo de dato primitivo.',
  'Dicen que ordenar una lista de objetos en Java es sencillo, pero intentar clasificar los pepinos de la abuela según su nivel de madurez es un problema NP-completo.',
];

interface SlideProps {
  interval?: number; // Tiempo en milisegundos entre cada cambio de frase
  className?: string; // Clase adicional para personalizar el estilo
}

const Slide = ({ interval = 5000, className = '' }: SlideProps) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % frases.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval, frases.length]);

  return (
    <div className={`text-center ${className}`}>
      <span className="w-full h-auto text-4xl md:text-1xl font-bold text-gray-100">
        {frases[currentPhraseIndex]}
      </span>
    </div>
  );
};

export default Slide;
