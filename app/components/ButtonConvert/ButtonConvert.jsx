import { Text, TouchableOpacity } from 'react-native';
import style from './ButtonConvert.style';

export default function ButtonConvert({ onPress, unit }) {
  return (
    <TouchableOpacity onPress={onPress} style={style.button}>
      <Text style={style.text}>Convertir en {unit}</Text>
    </TouchableOpacity>
  );
}
