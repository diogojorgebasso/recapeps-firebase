import React, { useEffect } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';

import { useAuth } from 'app/AuthProvider';

import { useRouter } from 'expo-router';

export default function SignIn(){
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redireciona para login se não houver usuário
    if (!loading && !user) {
      router.replace('/'); // Ajuste conforme a estrutura do seu app
    }
  }, [loading, user]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Bem-vindo {user?.email}!
      </Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};
