import {
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Button,
  ActivityIndicator
} from 'react-native';

import auth from '@react-native-firebase/auth'

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import React from 'react';

export default function HomeScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const signUp = async () => {
    setLoading(true)
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      alert('check your email')
    }
    catch (e: any) {
      alert('Registration failded! ' + e)
    }
    finally {
      setLoading(false)
    }
  }

  const signIn = async () => {
    setLoading(true)
    try {
      await auth().signInWithEmailAndPassword(email, password);
      alert('Welcome back!')
    }
    catch (e: any) {
      alert('Login failded! ' + e)
    }
    finally {
      setLoading(false)
    }

    return (
      <KeyboardAvoidingView behavior='padding'>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Welcome to the Recapeps APP!</ThemedText>
          <Image
            source={require('@/assets/images/react-logo.png')}
            style={styles.reactLogo}
          />
        </ThemedView>
        <ThemedText>Sign in to continue</ThemedText>
        <ThemedView style={styles.stepContainer}>
          <ThemedText>Email</ThemedText>
          <TextInput
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
            textContentType='emailAddress'
            autoCapitalize='none'
            style={{ padding: 8, backgroundColor: '#f0f0f0', borderRadius: 8 }}
          />
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText>Password</ThemedText>
          <TextInput
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            textContentType='password'
            secureTextEntry
            style={{ padding: 8, backgroundColor: '#f0f0f0', borderRadius: 8 }}
          />
        </ThemedView>
        {loading ? (
          <ActivityIndicator size={'small'} style={{ margin: 28 }} />
        ) : (
          <>
            <Button
              title='Sign in'
              onPress={signIn}
            />
            <ThemedText>or</ThemedText>
            <Button
              title='Sign up'
              onPress={signUp}
            />
          </>
        )}

      </KeyboardAvoidingView>
    );
  }

  const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
  });
}