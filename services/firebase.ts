import firestore from '@react-native-firebase/firestore';

// Função para buscar cartas de uma matéria específica
export const getCartasByMateria = async (materia: string) => {
  try {
    const cartasRef = firestore().collection('fichas').doc(materia).collection('cartas');
    const snapshot = await cartasRef.get();
    const cartasList = snapshot.docs.map((doc) => doc.data());
    return cartasList;
  } catch (error) {
    console.error("Erro ao buscar cartas:", error);
    throw error;
  }
};
