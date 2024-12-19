import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface PasswordHistoryProps {
  history: string[];
}

const PasswordHistory: React.FC<PasswordHistoryProps> = ({ history }) => {
  return (
    <View style={styles.containerHistory}>
      <Text style={styles.title}>Password History</Text>
      <FlatList
        data={history}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerHistory: {
    marginTop: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default PasswordHistory;
