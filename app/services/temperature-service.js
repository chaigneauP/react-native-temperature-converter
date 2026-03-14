import { UNITS } from '../constant';

function getOppositeUnit(unit) {
  return unit === UNITS.celcius ? UNITS.faranheit : UNITS.celcius;
}

function convertTemperatureToOppositeUnit(temperature, unit) {
  if (unit === UNITS.celcius) {
    return (temperature - 32) / 1.8;
  }
  return temperature * 1.8 + 32;
}

function isIceTemperature(temperature, unit) {
  if (unit === UNITS.celcius) {
    return temperature <= 0;
  }
  return temperature <= 32;
}

export { convertTemperatureToOppositeUnit, getOppositeUnit, isIceTemperature };
