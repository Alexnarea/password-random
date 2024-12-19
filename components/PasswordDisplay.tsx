import React, { useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

interface PasswordDisplayProps {
  password: string;
  onCopy: () => void;
}

const PasswordDisplay: React.FC<PasswordDisplayProps> = ({ password, onCopy }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.passwordBox}
        value={password}
        editable={false}
        placeholder="Generated Password"
      />
      <Button title="Copy to Clipboard" onPress={onCopy} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  passwordBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default PasswordDisplay;
