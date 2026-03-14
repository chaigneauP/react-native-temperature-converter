import { useEffect, useState } from 'react';
import { ImageBackground, View } from 'react-native';
import cold from '../assets/images/cold.png';
import hot from '../assets/images/hot.png';
import styles from './Index.style';
import ButtonConvert from './components/ButtonConvert/ButtonConvert';
import { InputTemperature } from './components/InputTemperature/InputTemperature';
import { TemperatureDisplay } from './components/TemperatureDisplay/TemperatureDisplay';
import { DEFAULT_TEMPERATURE, DEFAULT_UNIT } from './constant';
import {
  convertTemperatureToOppositeUnit,
  getOppositeUnit,
  isIceTemperature,
} from './services/temperature-service';

export default function Index() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const oppositeUnit = getOppositeUnit(currentUnit);
  const [currentBackground, setCurrentBackground] = useState(hot);

  useEffect(() => {
    const temperatureAsFloat = Number.parseFloat(inputValue);
    if (!isNaN(temperatureAsFloat)) {
      const isColdBackground = isIceTemperature(inputValue, currentUnit);
      setCurrentBackground(isColdBackground ? cold : hot);
    }
  }, [inputValue, currentUnit]);

  function getConvertedTemperature() {
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat)
      ? ''
      : convertTemperatureToOppositeUnit(valueAsFloat, oppositeUnit).toFixed(1);
  }

  return (
    <ImageBackground source={currentBackground} style={styles.container}>
      <View style={styles.workspace}>
        <View>
          <TemperatureDisplay
            value={getConvertedTemperature()}
            unit={oppositeUnit}
          />
        </View>
        <InputTemperature
          onChangeText={setInputValue}
          defaultValue={DEFAULT_TEMPERATURE}
          unit={currentUnit}
        />
        <View>
          <ButtonConvert
            onPress={() => {
              setCurrentUnit(oppositeUnit);
            }}
            unit={currentUnit}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
