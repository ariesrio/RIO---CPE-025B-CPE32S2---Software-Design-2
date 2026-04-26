import { useState } from 'react';
import {
  FlatList,
  Modal,
  Platform,
  Pressable,
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
  const [testModalVisible, setTestModalVisible] = useState(false);

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

      {/*  BUTTON TO TEST MODAL */}
      <Pressable
        onPress={() => setTestModalVisible(true)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Test Modal</Text>
      </Pressable>

      <View style={styles.goalListContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item) => item.key}
          renderItem={(itemData) => (
            <GoalItem text={itemData.item.text} />
          )}
        />
      </View>

      {/*  MODAL */}
      <Modal
        visible={testModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setTestModalVisible(false)}
        presentationStyle="fullScreen"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            
            <Text style={styles.modalText}>
              {Platform.OS === 'ios'
                ? 'This is iOS Modal'
                : 'This is Android Modal'}
            </Text>

            <Pressable
              onPress={() => setTestModalVisible(false)}
              style={styles.button}
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

  header: {
    fontSize: 26,
    fontWeight: '700',
    color: '#ff8c42',
    textAlign: 'center',
    marginBottom: 18,
  },

  goalListContainer: {
    height: 300,
    marginTop: 10,
  },

  button: {
    backgroundColor: '#ffb703',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modalBox: {
    width: 250,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },

  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
});