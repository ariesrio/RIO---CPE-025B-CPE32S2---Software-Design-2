import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function GoalInput(props) {
  const [enteredText, setEnteredText] = useState('');

  function textInputHandler(text) {
    setEnteredText(text);
  }

  function addGoalHandler() {
    if (enteredText.trim().length === 0) return;
    props.onAddGoal(enteredText);
    setEnteredText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="What’s your summer goal?"
        placeholderTextColor="#999"
        style={styles.textInput}
        onChangeText={textInputHandler}
        value={enteredText}
      />
      <Pressable style={styles.button} onPress={addGoalHandler}>
        <Text style={styles.buttonText}>+ Add</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ffd6a5',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginRight: 10,
    fontSize: 13,
  },
  button: {
    backgroundColor: '#ffb703',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
  },
});