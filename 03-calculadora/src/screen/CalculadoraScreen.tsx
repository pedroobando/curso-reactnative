import React from 'react';
import {View, Text} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {useCalculadora} from '../hooks/useCalculadora';
import {styles} from '../themes/ThemeApp';

const cnaranja = '#FF9427';
const cgrisClaro = '#9B9B9B';

export const CalculadoraScreen = () => {
  const {
    numero,
    numeroAnterior,
    handleArmarNumero,
    handleCalcular,
    handleChangeSign,
    handleClear,
    handleDelete,
    handleOperacionDividir,
    handleOperacionMultiplicar,
    handleOperacionRestar,
    handleOperacionSumar,
  } = useCalculadora({numero1: '0', numeroAnterior2: '0'});

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      <View style={styles.fila}>
        <BotonCalc texto="C" color={cgrisClaro} accion={handleClear} />
        <BotonCalc texto="+/-" color={cgrisClaro} accion={handleChangeSign} />
        <BotonCalc texto="del" color={cgrisClaro} accion={handleDelete} />
        <BotonCalc texto="/" color={cnaranja} accion={handleOperacionDividir} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="7" accion={handleArmarNumero} />
        <BotonCalc texto="8" accion={handleArmarNumero} />
        <BotonCalc texto="9" accion={handleArmarNumero} />
        <BotonCalc
          texto="x"
          accion={handleOperacionMultiplicar}
          color={'#FF9427'}
        />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="4" accion={handleArmarNumero} />
        <BotonCalc texto="5" accion={handleArmarNumero} />
        <BotonCalc texto="6" accion={handleArmarNumero} />
        <BotonCalc texto="-" accion={handleOperacionRestar} color={'#FF9427'} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="1" accion={handleArmarNumero} />
        <BotonCalc texto="2" accion={handleArmarNumero} />
        <BotonCalc texto="3" accion={handleArmarNumero} />
        <BotonCalc texto="+" accion={handleOperacionSumar} color={'#FF9427'} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="0" accion={handleArmarNumero} ancho={true} />
        <BotonCalc texto="." accion={handleArmarNumero} />
        <BotonCalc texto="=" accion={handleCalcular} color={'#FF9427'} />
      </View>
    </View>
  );
};
