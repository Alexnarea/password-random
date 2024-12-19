import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import CriteriaCheckbox from './CriteriaCheckbox';

interface PasswordControlsProps {
  length: number;
  setLength: (length: number) => void;
  criteria: {
    includeUppercase: boolean;
    includeNumbers: boolean;
    includeSymbols: boolean;
  };
  setCriteria: (key: keyof PasswordControlsProps['criteria'], value: boolean) => void;
}

const PasswordControls: React.FC<PasswordControlsProps> = ({
  length,
  setLength,
  criteria,
  setCriteria,
}) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(length)}
        onChangeText={(text) => setLength(Number(text))}
        placeholder="Length"
      />
      <CriteriaCheckbox
        label="Include Uppercase"
        value={criteria.includeUppercase}
        onToggle={(value) => setCriteria('includeUppercase', value)}
      />
      <CriteriaCheckbox
        label="Include Numbers"
        value={criteria.includeNumbers}
        onToggle={(value) => setCriteria('includeNumbers', value)}
      />
      <CriteriaCheckbox
        label="Include Symbols"
        value={criteria.includeSymbols}
        onToggle={(value) => setCriteria('includeSymbols', value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default PasswordControls;
