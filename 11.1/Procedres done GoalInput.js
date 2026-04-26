import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

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
        placeholder="Your course goals!"
        style={styles.textInput}
        onChangeText={textInputHandler}
        value={enteredText}
      />
      <Button title="ADD GOAL" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
  },
});