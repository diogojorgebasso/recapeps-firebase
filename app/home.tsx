import { YStack, Button, Text } from 'tamagui';
import { useAuth } from '../AuthProvider';

const Home = () => {
  const { logout } = useAuth();

  return (
    <YStack padding="$6" backgroundColor="$background">
      <Text fontWeight="bold" fontSize="$6">Bem-vindo à Home!</Text>
      <Button onPress={logout} backgroundColor="$red10">
        Logout
      </Button>
    </YStack>
  );
};

export default Home;
