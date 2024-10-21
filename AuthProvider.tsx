import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'expo-router';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

// 1. Tipagem do Contexto de Autenticação
interface AuthContextProps {
  user: FirebaseAuthTypes.User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

// 2. Criando o contexto de autenticação com valor inicial undefined
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// 3. Tipagem do AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

// 4. Criando o AuthProvider
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    // Ouvir as mudanças de estado do usuário
    const unsubscribe = auth().onAuthStateChanged((authenticatedUser) => {
      if (authenticatedUser) {
        setUser(authenticatedUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
        router.replace("/login"); // Redireciona para login se não estiver autenticado
      }
    });

    // Cleanup ao desmontar
    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await auth().signOut();
      setUser(null);
      router.replace('/login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {loading ? <LoadingScreen /> : children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acessar o contexto de autenticação
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};

// Exemplo de componente de carregamento enquanto espera o estado do usuário
const LoadingScreen = () => {
  return (
    <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <p>Carregando...</p>
    </div>
  );
};
