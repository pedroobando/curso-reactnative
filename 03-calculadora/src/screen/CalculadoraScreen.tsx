import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {styles} from '../themes/ThemeApp';

export const CalculadoraScreen = () => {
  const cgrisClaro = '#9B9B9B';
  // const cgrisOscuro = '#2D2D2D';
  const cnaranja = '#FF9427';

  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');

  const handleClear = () => {
    setNumero('0');
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

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      <View style={styles.fila}>
        <BotonCalc texto="C" color={cgrisClaro} accion={handleClear} />
        <BotonCalc texto="+/-" color={cgrisClaro} accion={handleChangeSign} />
        <BotonCalc texto="del" color={cgrisClaro} accion={handleDelete} />
        <BotonCalc texto="/" color={cnaranja} accion={handleClear} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="7" accion={handleArmarNumero} />
        <BotonCalc texto="8" accion={handleArmarNumero} />
        <BotonCalc texto="9" accion={handleArmarNumero} />
        <BotonCalc texto="x" accion={handleClear} color={'#FF9427'} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="4" accion={handleArmarNumero} />
        <BotonCalc texto="5" accion={handleArmarNumero} />
        <BotonCalc texto="6" accion={handleArmarNumero} />
        <BotonCalc texto="-" accion={handleClear} color={'#FF9427'} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="1" accion={handleArmarNumero} />
        <BotonCalc texto="2" accion={handleArmarNumero} />
        <BotonCalc texto="3" accion={handleArmarNumero} />
        <BotonCalc texto="+" accion={handleClear} color={'#FF9427'} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="0" accion={handleArmarNumero} ancho={true} />
        <BotonCalc texto="." accion={handleArmarNumero} />
        <BotonCalc texto="=" accion={handleClear} color={'#FF9427'} />
      </View>
    </View>
  );
};
