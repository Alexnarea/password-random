import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

interface CriteriaCheckboxProps {
  label: string;
  value: boolean;
  onToggle: (value: boolean) => void;
}

const CriteriaCheckbox: React.FC<CriteriaCheckboxProps> = ({ label, value, onToggle }) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <Switch value={value} onValueChange={onToggle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
});

export default CriteriaCheckbox;
