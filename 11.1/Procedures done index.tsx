import { useState } from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import GoalInput from '@/components/GoalInput';
import GoalItem from '@/components/GoalItem';

type Goal = {
  text: string;
  key: string;
};

export default function HomeScreen() {
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);
  const [useFlatList, setUseFlatList] = useState(true); // toggle demo

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

      {/* LIMITED HEIGHT CONTAINER (ILO1 requirement) */}
      <View style={styles.goalListContainer}>

        {useFlatList ? (
          <FlatList
            data={courseGoals}
            keyExtractor={(item) => item.key}
            renderItem={(itemData) => (
              <GoalItem text={itemData.item.text} />
            )}
          />
        ) : (
          <ScrollView>
            {courseGoals.map((goal) => (
              <GoalItem key={goal.key} text={goal.text} />
            ))}
          </ScrollView>
        )}

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff7e6',
  },

  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ff8c42',
    textAlign: 'center',
    marginBottom: 20,
  },

  /* IMPORTANT FOR ILO1 */
  goalListContainer: {
    height: 300, // limit size (requirement)
    marginTop: 20,
  },
});