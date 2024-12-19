import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Button,
  FlatList,
  TextInput,
  Switch,
} from 'react-native';
import * as Clipboard from 'expo-clipboard';

const generatePassword = (
  length: number,
  includeUppercase: boolean,
  includeNumbers: boolean,
  includeSymbols: boolean
): string => {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  let characters = lowercase;
  if (includeUppercase) characters += uppercase;
  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
};

const Home = () => {
  const [password, setPassword] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [length, setLength] = useState(0);
  const [criteria, setCriteria] = useState({
    includeUppercase: true,
    includeNumbers: true,
    includeSymbols: true,
  });

  const handleGeneratePassword = () => {
    if(length > 25){
      Alert.alert('Error', 'The maximum length is 25 characters');
      return;
    }
    const newPassword = generatePassword(
      length,
      criteria.includeUppercase,
      criteria.includeNumbers,
      criteria.includeSymbols
    );
    setPassword(newPassword);

    setHistory((prevHistory) => [newPassword, ...prevHistory]);
  };

  const handleCopyToClipboard = async () => {
    if(!password){
      Alert.alert('Error', 'No password to copy');
      return;
    }
    await Clipboard.setStringAsync(password);
    Alert.alert('Copied!', 'Password copied to clipboard!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Password Generator</Text>
      <View style={styles.controls}>
        <Text>Length: {length}</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={length.toString()}
          onChangeText={(value) =>
            setLength(Number(value) > 0 ? Number(value) : 0)
          }
        />

        <View style={styles.switchRow}>
          <Text>Include Uppercase</Text>
          <Switch
            value={criteria.includeUppercase}
            onValueChange={(value) =>
              setCriteria((prev) => ({ ...prev, includeUppercase: value }))
            }
          />
        </View>

        <View style={styles.switchRow}>
          <Text>Include Numbers</Text>
          <Switch
            value={criteria.includeNumbers}
            onValueChange={(value) =>
              setCriteria((prev) => ({ ...prev, includeNumbers: value }))
            }
          />
        </View>

        <View style={styles.switchRow}>
          <Text>Include Symbols</Text>
          <Switch
            value={criteria.includeSymbols}
            onValueChange={(value) =>
              setCriteria((prev) => ({ ...prev, includeSymbols: value }))
            }
          />
        </View>
      </View>
      <View style={styles.passwordContainer}>
        <Text style={styles.password}>{password || 'Your password will appear here'}</Text>
        <Button title="Copy to Clipboard" onPress={handleCopyToClipboard} />
      </View>
      <Button title="Generate Password" onPress={handleGeneratePassword} />
      <Text style={styles.historyTitle}>Password History</Text>
      <FlatList
        data={history}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => <Text style={styles.historyItem}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1D3557',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#FFFFFF',
  },
  controls: {
    marginBottom: 5,
    borderWidth: 3,
    borderColor: '#DAA520',
    borderRadius: 20,
    padding: 15,
    marginTop: 5,
    backgroundColor: '#FFFFFF',
  },
  input: {
    borderWidth: 2,
    borderColor: '#DAA520',
    borderRadius: 10,
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 1,
  },
  passwordContainer: {
    marginVertical: 10,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#DAA520',
    borderRadius: 20,
    padding: 15,
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  password: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#DAA520',
    borderRadius: 15,
    padding: 10,
    marginTop: 10,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#FFFFFF',
  },
  historyItem: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ffffff',
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default Home;
