import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'expo-router';
import { auth } from 'utils/firebaseConfig';

// 1. Tipagem do Contexto de Autenticação
interface AuthContextProps {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

// 2. Criando o contexto de autenticação com valor inicial
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// 3. Tipagem do AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

// 4. Criando o AuthProvider
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
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
        router.replace("/");
      }
    });

    // Cleanup ao desmontar
    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  const logout = async () => {
    try {
      await auth().signOut();
      setUser(null);
      router.replace('/'); 
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 5. Hook para usar o contexto de autenticação
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
