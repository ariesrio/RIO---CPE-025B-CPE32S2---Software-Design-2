import { useState } from 'react';
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

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

  function deleteGoalHandler(id: string) {
    Alert.alert('Delete Goal', 'Are you sure you want to delete this goal?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          setCourseGoals((currentGoals) =>
            currentGoals.filter((goal) => goal.key !== id)
          );
        },
      },
    ]);
  }

  function showWelcome() {
    Alert.alert('Welcome', 'Welcome to your Goal App!');
  }

  return (
    <View style={styles.appContainer}>

      {/* 🔷 HEADER WITH ICON */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>🌴 Summer Goals ☀️</Text>

        <Pressable onPress={showWelcome}>
          <MaterialIcons name="account-circle" size={35} color="#ff8c42" />
        </Pressable>
      </View>

      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalListContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item) => item.key}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.key}
              onDelete={deleteGoalHandler}
            />
          )}
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

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  header: {
    fontSize: 26,
    fontWeight: '700',
    color: '#ff8c42',
  },

  goalListContainer: {
    marginTop: 10,
  },
});