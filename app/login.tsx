import { useState } from 'react';
import { YStack, Input, Button, Text } from 'tamagui';
import { useAuth } from 'AuthProvider';

export default function SimpleLoginForm () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      await login(email, password);
      alert('Login bem-sucedido!');
    } catch (error) {
      alert('Erro ao fazer login: ' + error.message);
    }
  };

  return (
    <YStack padding="$6" backgroundColor="$background">
      <Text fontWeight="bold" fontSize="$6">
        Login
      </Text>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        padding="$3"
      />
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        padding="$3"
      />
      <Button onPress={handleLogin} backgroundColor="$blue10">
        Entrar
      </Button>
    </YStack>
  );
};
