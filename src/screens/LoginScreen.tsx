import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

type Role = 'Student' | 'Teacher' | 'Parent';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<Role>('Student');

 const handleLogin = () => {
  if (role === 'Student') {
    navigation.replace('StudentHome');
  } 
  else if (role === 'Teacher') {
    navigation.replace('TeacherHome');
  } 
  else if (role === 'Parent') {
    navigation.replace('ParentHome');
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>ACAMS Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Text style={styles.roleTitle}>Select Role</Text>

      <View style={styles.roleContainer}>
        {['Student', 'Teacher', 'Parent'].map(item => (
          <TouchableOpacity
            key={item}
            style={[
              styles.roleButton,
              role === item && styles.roleSelected,
            ]}
            onPress={() => setRole(item as Role)}
          >
            <Text
              style={[
                styles.roleText,
                role === item && styles.roleTextSelected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login as {role}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 14,
  },
  roleTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 10,
  },
  roleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  roleButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  roleSelected: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },
  roleText: {
    color: '#000',
    fontWeight: '600',
  },
  roleTextSelected: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginScreen;
