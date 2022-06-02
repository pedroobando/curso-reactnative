import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';

interface iTochableIconProps {
  iconName: string;
  color: string;
}

export const TochableIcon = ({iconName, color}: iTochableIconProps) => {
  const {changeFavIcon} = useContext(AuthContext);
  // useEffect(() => {
  //   console.log('hola mundo');
  // }, []);

  // const handleOnPress = () => {
  //   console.log(name);
  // };

  return (
    <TouchableOpacity onPress={() => changeFavIcon(iconName)}>
      <Icon name={iconName} size={80} color={color} />
    </TouchableOpacity>
  );
};
