import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>

      <Pressable onPress={() => props.onDelete(props.id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>✕</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#ff8c42',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  goalText: {
    fontSize: 15,
    color: '#444',
    flex: 1,
    marginRight: 12,
  },
  deleteButton: {
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  deleteText: {
    color: '#d11a2a',
    fontSize: 20,
    fontWeight: '700',
  },
});