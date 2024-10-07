import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'expo-router';
import { View, Text, ActivityIndicator } from 'react-native';
import { getCartasByMateria } from '../../services/firebase';

export default function Quizz() {
  const { materia } = useSearchParams();  // Pegando a matéria da URL
  const [cartas, setCartas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cartasList = await getCartasByMateria(materia);
        setCartas(cartasList);
      } catch (error) {
        console.error("Erro ao carregar cartas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [materia]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }