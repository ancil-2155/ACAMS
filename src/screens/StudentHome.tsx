import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const StudentHome = ({ navigation }: any) => {
  return (
    <View style={styles.container}>

      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.replace('Login')}
      >
        <Text style={styles.backText}>⬅ Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Student Dashboard</Text>
      <Text>View attendance, assignments 📘</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20
  },
  backText: {
    fontSize: 18,
    color: '#2563EB'
  }
});

export default StudentHome;
