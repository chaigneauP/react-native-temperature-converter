const { StyleSheet } = require('react-native');

const style = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 50,
    paddingLeft: 25,
  },
  unit: {
    position: 'absolute',
    fontSize: 18,
    alignSelf: 'flex-end',
    paddingRight: 25,
  },
});

export default style;
