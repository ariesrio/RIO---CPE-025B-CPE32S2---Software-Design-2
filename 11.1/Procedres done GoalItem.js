import { StyleSheet, Text, View } from 'react-native';

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>🏖️ {props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#ff8c42',
  },
  goalText: {
    fontSize: 16,
    color: '#444',
  },
});