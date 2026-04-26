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
    backgroundColor: '#ffffff',
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#ff8c42',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  goalText: {
    fontSize: 15,
    color: '#444',
  },
});