import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const Screen1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const navigation = useNavigation(); // Access navigation

  // MockAPI endpoint
  const loginApiUrl = 'https://657267a9d61ba6fcc014d29d.mockapi.io/login';

  const handleLogin = async () => {
    try {
      const response = await fetch(loginApiUrl);
      const data = await response.json();

      // Find the user with the entered email
      const user = data.find(user => user.email === email);

      if (user) {
        if (user.password === password) {
          navigation.navigate('Screen2');
        } else {
          Alert.alert('Incorrect password', 'Please check your password and try again.');
        }
      } else {
        Alert.alert('User not found', 'No user found with this email.');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong, please try again.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.welcomeText}>Hello Again!</Text>
      <Text style={styles.subtitle}>Log into your account</Text>
      
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#8c8c8c" />
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#8c8c8c" />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#8c8c8c" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.continueButton} onPress={handleLogin}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      <View style={styles.socialIconsContainer}>
        <TouchableOpacity style={styles.socialIcon}>
          <Ionicons name="logo-google" size={24} color="#EA4335" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Ionicons name="logo-facebook" size={24} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Ionicons name="logo-apple" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#8c8c8c',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '100%',
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 16,
  },
  forgotPasswordText: {
    color: '#00BFFF',
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  continueButton: {
    backgroundColor: '#00BFFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    color: '#8c8c8c',
    marginBottom: 20,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  socialIcon: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#f2f2f2',
  },
});

export default Screen1;
