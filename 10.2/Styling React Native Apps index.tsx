import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <Text>-Aries C. Rio</Text>

      <View>
        <Text style={styles2.textStyle}>Just another sample!</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>TAP ME!</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles2.textStyle}>Just another testing text.</Text>
      </View>
    </View>
  );
}

/* OLD styles (container + button only) */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

/* NEW styles2 (NO StyleSheet.create) */
const styles2 = {
  textStyle: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'red',
    padding: 16,
    backgroundColor: 'blue',
    color: 'white',
  },
};