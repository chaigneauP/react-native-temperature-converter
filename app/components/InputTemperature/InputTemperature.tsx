import { Text, TextInput, View } from 'react-native';
import styles from './InputTemperature.style';

export function InputTemperature({
  defaultValue,
  onChangeText,
  unit,
}: {
  defaultValue: string;
  onChangeText: (text: string) => void;
  unit: string;
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Entrez une temperature"
        keyboardType="numeric"
        maxLength={4}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
      />
      <Text style={styles.unit}>{unit}</Text>
    </View>
  );
}
