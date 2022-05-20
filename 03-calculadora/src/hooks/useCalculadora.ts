import {useRef, useState} from 'react';

enum Operadores {
  sumar = 1,
  restar,
  multiplicar,
  dividir,
}

interface CalculadoraProps {
  numero1: string;
  numeroAnterior2: string;
}

export const useCalculadora = ({
  numero1,
  numeroAnterior2,
}: CalculadoraProps) => {
  const [numeroAnterior, setNumeroAnterior] = useState(numeroAnterior2);
  const [numero, setNumero] = useState(numero1);
  const ultimaOperacion = useRef<Operadores>();

  const handleClear = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const handleChangeSign = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero(`-${numero}`);
    }
  };

  const handleArmarNumero = (numeroTexto: string) => {
    // no aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') {
      return;
    }

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      // punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);

        // Evaluar si es otro cero y no hay un punto
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);

        // Evaluar si es diferente de cero y no tiene un punto
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);

        // Evita 0000.000
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  // (numero.length <= 2 && numero.includes('-')) ||
  const handleDelete = () => {
    const newNum = numero.slice(0, -1);
    setNumero(newNum === '' || newNum === '-' ? '0' : newNum);
  };

  const upNumber = () => {
    setNumeroAnterior(numero.endsWith('.') ? numero.slice(0, -1) : numero);
    setNumero('0');
  };

  const handleOperacionDividir = () => {
    upNumber();
    ultimaOperacion.current = Operadores.dividir;
  };

  const handleOperacionMultiplicar = () => {
    upNumber();
    ultimaOperacion.current = Operadores.multiplicar;
  };

  const handleOperacionSumar = () => {
    upNumber();
    ultimaOperacion.current = Operadores.sumar;
  };

  const handleOperacionRestar = () => {
    upNumber();
    ultimaOperacion.current = Operadores.restar;
  };

  const handleCalcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);
    // eslint-disable-next-line use-isnan
    if (num2 === NaN) {
      setNumero('0');
      return;
    }
    try {
      switch (ultimaOperacion.current) {
        case Operadores.dividir:
          setNumero(`${num2 / num1}`);
          break;

        case Operadores.multiplicar:
          setNumero(`${num2 * num1}`);
          break;

        case Operadores.sumar:
          setNumero(`${num2 + num1}`);
          break;

        case Operadores.restar:
          setNumero(`${num2 - num1}`);
          break;

        default:
          break;
      }

      setNumeroAnterior(`${num1}`);
    } catch (error) {}
  };

  return {
    numero,
    numeroAnterior,
    handleCalcular,
    handleOperacionRestar,
    handleOperacionDividir,
    handleOperacionMultiplicar,
    handleOperacionSumar,
    handleDelete,
    handleArmarNumero,
    handleChangeSign,
    handleClear,
  };
};
