import '../tamagui-web.css'

import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { TamaguiProvider } from 'tamagui'
import  tamaguiConfig  from '../tamagui.config'

import { Stack, SplashScreen } from 'expo-router';
import { AuthProvider, useAuth } from '../AuthProvider';
import { View, Text, StatusBar, useColorScheme } from 'react-native';

SplashScreen.preventAutoHideAsync()

const Layout = () => {
  const { user, loading } = useAuth();

  const colorScheme = useColorScheme()

  if (loading) {
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
          <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {!user ? (
          <>
            <Stack.Screen name="login" />
          </>
        ) : (
          <Stack.Screen name="home" />
        )}
      </Stack>
      </AuthProvider>
      </ThemeProvider>
      </TamaguiProvider>
  );
};

export default Layout;
