import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import GoalInput from '@/components/GoalInput';
import GoalItem from '@/components/GoalItem';

type Goal = {
  text: string;
  key: string;
};

export default function HomeScreen() {
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {
        text: enteredGoalText,
        key: Math.random().toString(),
      },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <Text style={styles.header}>🌴 Summer Goals ☀️</Text>

      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalListContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item) => item.key}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#fff7e6',
  },
  header: {
    fontSize: 26,
    fontWeight: '700',
    color: '#ff8c42',
    textAlign: 'center',
    marginBottom: 18,
  },
  goalListContainer: {
    height: 300,
    marginTop: 6,
  },
});