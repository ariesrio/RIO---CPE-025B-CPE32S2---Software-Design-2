import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>

      <Pressable onPress={() => props.onDelete(props.id)}>
        <Text style={styles.deleteText}>X</Text>
      </Pressable>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  goalText: {
    fontSize: 15,
    color: '#444',
    flex: 1,
  },

  deleteText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});