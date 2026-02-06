import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ParentHome = ({ navigation }: any) => {
  return (
    <View style={styles.container}>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.replace('Login')}
      >
        <Text style={styles.backText}>⬅ Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Parent Dashboard</Text>
      <Text style={styles.subtitle}>Monitor child attendance 👨‍👩‍👧</Text>

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
  subtitle: {
    marginTop: 10,
    fontSize: 16
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20
  },
  backText: {
    fontSize: 18,
    color: '#2563EB'
  }
});

export default ParentHome;
