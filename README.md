
# Aplicativo Educacional (Expo, React, Firebase e AES)

Este é um aplicativo educacional em francês criado usando **Expo**, **React**, **Firebase** e **AES**. O app tem como objetivo fornecer uma plataforma interativa para os usuários revisarem conteúdos e se prepararem para exames, oferecendo funcionalidades como fiches de revisão, quizzes, flash cards e um chatbot. A aplicação também garante segurança e privacidade ao usar **AES (Advanced Encryption Standard)** para criptografar dados sensíveis.

## Funcionalidades Principais

- **Fiches de Révision (Folhas de Revisão)**: Permite aos usuários revisar conteúdos importantes.
- **Quizz**: Questionários interativos para testar o conhecimento.
- **Flash Cards**: Ajuda os usuários a memorizar informações de forma dinâmica.
- **Chatbot**: Assistente virtual para tirar dúvidas e guiar o usuário.

## Tecnologias Utilizadas

- **Expo**: Framework para criação de apps React Native.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Firebase**: Backend para autenticação, armazenamento de dados e hospedagem.
- **AES**: Criptografia para segurança de dados.

## Instalação

> [!INFO]
> Para começar um projeto do zero, acesse o site [expo.new](https://expo.new) e siga as instruções.

1. Clone o repositório:

   ```bash
   git clone https://github.com/diogojorgebasso/recapeps-firebase
   cd recapeps-firebase
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

3. Configure o Firebase:

   - Adicione o arquivo `google-services.json` na pasta raiz para Android.
   - Adicione o arquivo `GoogleService-Info.plist` na pasta raiz para iOS.

5. Inicie o projeto com o Expo:

   ```bash
   expo start --dev-client
   ```

6. Se precisar, compile o aplicativo para testar localmente:

   ```bash
   expo run:android  # Para Android
   expo run:ios      # Para iOS
   ```

## Uso de AES para Criptografia

O projeto utiliza **AES** para criptografar dados sensíveis antes de armazená-los no Firebase. Aqui está um exemplo básico de como criptografar e descriptografar dados:

```javascript
import CryptoJS from 'crypto-js';

// Função para criptografar
const encryptData = (data, key) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
};

// Função para descriptografar
const decryptData = (cipherText, key) => {
  const bytes = CryptoJS.AES.decrypt(cipherText, key);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

// Exemplo de uso:
const data = { name: 'Exemplo', score: 100 };
const secretKey = 'minha-chave-secreta';

const encryptedData = encryptData(data, secretKey);
console.log('Dados Criptografados:', encryptedData);

const decryptedData = decryptData(encryptedData, secretKey);
console.log('Dados Descriptografados:', decryptedData);
```

## Estrutura de Diretórios

```bash
.
├── assets          # Imagens, ícones e outros assets do app
├── components      # Componentes React reutilizáveis
├── screens         # Telas principais do app (Fiches, Quizz, Flash Cards, Chatbot)
├── services        # Serviços para interações com Firebase e lógica de criptografia AES
├── App.js          # Arquivo principal do React Native
├── firebase.js     # Configuração e inicialização do Firebase
├── package.json    # Dependências e scripts do projeto
└── README.md       # Documentação do projeto
```

## Contribuições

Contribuições são bem-vindas! Para contribuir, siga os passos abaixo:

1. Fork o repositório.
2. Crie uma nova branch com a sua feature: `git checkout -b minha-feature`.
3. Commit suas mudanças: `git commit -m 'Adiciona nova feature'`.
4. Envie para a branch principal: `git push origin minha-feature`.
5. Abra um Pull Request.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
