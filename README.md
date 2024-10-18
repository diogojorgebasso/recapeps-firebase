
# Recapeps 


Este é um aplicativo educacional em francês criado usando **Expo**, **React Native**, **Reeact Firebase IO**, [**EAS (Expo Application Services)**](https://docs.expo.dev/eas/), **React Testing**. O app tem como objetivo fornecer uma plataforma interativa para os usuários revisarem conteúdos e se prepararem para exames, oferecendo funcionalidades como:

- fiches de revisão, 
- quizzes, 
- flash cards,
- chatbot, 
& mais

Além do mais, o código promete ser de alta qualidade, com testes automatizados e integração contínua para as seguintes plataformas:

- Android
- iOS
- WEB

A aplicação também utiliza EAS para deploy contínuo e atualizações OTA (Over-The-Air) através do [Rololut](https://docs.expo.dev/eas-update/rollouts/).

![Printscreen do Rollout conforme aplicado hoje](/docs/imgs/Rollout.png)

## Funcionalidades Principais

- **Fiches de Révision (Folhas de Revisão)**: Permite aos usuários revisar conteúdos importantes.
- **Quizz**: Questionários interativos para testar o conhecimento.
- **Flash Cards**: Ajuda os usuários a memorizar informações de forma dinâmica.
- **Chatbot**: Assistente virtual para tirar dúvidas e guiar o usuário.

## Tecnologias Utilizadas

- **Expo**: Framework para criação de apps React Native.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Firebase**: Backend para autenticação, armazenamento de dados e hospedagem.
- **EAS (Expo Application Services)**: Plataforma para gerenciamento de builds, deploys e atualizações OTA.
- **Expo Icons** Material UI: Biblioteca de componentes React para design de interfaces.
- expo-linking: Biblioteca para lidar com deep linking e universal links.




## Funcionalidade de Rollout com EAS

O **EAS** oferece um sistema de **Rollout de Atualizações**, permitindo distribuir novas versões de maneira gradual para os usuários, garantindo que bugs e problemas em potencial sejam detectados antes de uma liberação completa.

### Exemplos de Rollout de Atualizações:
1. **Build e Deploy OTA**: Com o EAS, podemos fazer builds automáticas e enviar atualizações diretamente para os dispositivos dos usuários sem a necessidade de reinstalar o app.
   ```bash
   eas build --platform android   # Build para Android
   eas build --platform ios       # Build para iOS
   ```
2. **Rollout Gradual**: Configuramos um rollout para liberar as novas funcionalidades de forma gradual para 10% dos usuários inicialmente e, em seguida, expandir para o restante.
   ```bash
   eas update --branch=development --percent=10
   ```
3. **Monitoramento de Bugs**: Acompanhamos o feedback e monitoramos erros antes de liberar para todos os usuários.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

3. Instale o Firebase e outras bibliotecas necessárias:

   ```bash
   npm install @react-native-firebase/app
   npm install expo-dev-client
   ```

4. Configure o Firebase:

   - Adicione o arquivo `google-services.json` na pasta `android/app/` para Android.
   - Adicione o arquivo `GoogleService-Info.plist` na pasta `ios/{nome-do-app}/` para iOS.

5. Inicie o projeto com o Expo:

   ```bash
   expo start --dev-client
   ```

6. Se precisar, compile o aplicativo para testar localmente:

   ```bash
   expo run:android  # Para Android
   expo run:ios      # Para iOS
   ```

## Estrutura de Diretórios

```bash
.
├── assets          # Imagens, ícones e outros assets do app
├── components      # Componentes React reutilizáveis
├── services        # Serviços para interações com Firebase
├── app             # Páginas e navegação com Expo Router
│   ├── fichas      # Páginas específicas de cada matéria
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
