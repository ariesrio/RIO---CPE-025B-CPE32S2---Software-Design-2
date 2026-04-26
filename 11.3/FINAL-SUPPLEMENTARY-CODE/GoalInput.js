import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function GoalInput(props) {
  const [enteredText, setEnteredText] = useState('');
  const [isPressed, setIsPressed] = useState(false);

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

      <Pressable
        onPress={addGoalHandler}
        onPressIn={() => {
          console.log('Pressed In');
          setIsPressed(true);
        }}
        onPressOut={() => {
          console.log('Pressed Out');
          setIsPressed(false);
        }}
        onLongPress={() => console.log('Long Press Activated')}
        delayLongPress={1000}
        hitSlop={10}
        disabled={enteredText.trim().length === 0}
        android_ripple={{ color: '#cde3d2' }}
        testID="add-goal-pressable"
        style={({ pressed }) => [
          styles.button,
          (pressed || isPressed) && styles.buttonPressed,
          enteredText.trim().length === 0 && styles.buttonDisabled,
        ]}
      >
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
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ffd6a5',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },

  button: {
    backgroundColor: '#ffb703',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
  },

  buttonPressed: {
    opacity: 0.6, // visual feedback when pressed
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});