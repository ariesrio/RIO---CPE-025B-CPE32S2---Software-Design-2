import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState<{ text: string; id: string }[]>([]);

  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) return;

    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);

    setEnteredGoalText('');
  }

  return (
    <View style={styles.appContainer}>
      
      <Text style={styles.header}>🌴 Summer Goals ☀️</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="What’s your summer goal?"
          placeholderTextColor="#888"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />

        <Pressable style={styles.button} onPress={addGoalHandler}>
          <Text style={styles.buttonText}>+ Add</Text>
        </Pressable>
      </View>

      <FlatList
        data={courseGoals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.goalCard}>
            <Text style={styles.goalText}>🏖️ {item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff7e6', // soft sand color
  },

  header: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    color: '#ff8c42', // sunset orange
    textAlign: 'center',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  textInput: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ffd6a5',
    marginRight: 10,
  },

  button: {
    backgroundColor: '#ffb703', // sunny yellow
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },

  goalCard: {
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 15,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#ff8c42', // accent stripe
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  goalText: {
    fontSize: 16,
    color: '#444',
  },
});