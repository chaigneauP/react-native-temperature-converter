import { Text } from 'react-native';
import style from './TemperatureDisplay.style';

export function TemperatureDisplay({
  value,
  unit,
}: {
  value: string;
  unit: string;
}) {
  return (
    <Text style={style.text}>
      {value} {unit}
    </Text>
  );
}
