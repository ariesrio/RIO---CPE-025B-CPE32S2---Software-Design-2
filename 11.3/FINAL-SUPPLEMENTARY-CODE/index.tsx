import { useState } from 'react';
import {
  Alert,
  FlatList,
  Modal,
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
  const [modalVisible, setModalVisible] = useState(false);

  function addGoalHandler(enteredGoalText: string) {
    const updatedGoals = [
      ...courseGoals,
      {
        text: enteredGoalText,
        key: Math.random().toString(),
      },
    ];

    setCourseGoals(updatedGoals);

    if (updatedGoals.length > 5) {
      setModalVisible(true);
    }
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

      {/* 🔷 HEADER WITH USER ICON */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>🌴 Summer Goals ☀️</Text>

        <Pressable onPress={showWelcome}>
          <MaterialIcons name="account-circle" size={28} color="#ff8c42" />
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

      {/* 🔴 MODAL (when > 5 goals) */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>
              ⚠️ You are adding too many goals. Don’t overwhelm yourself!
            </Text>

            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

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

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modalBox: {
    width: 260,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
  },

  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#ffb703',
    padding: 10,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});