# Importante
  Para esse projeto estou utilizando o Sistema Operacional Windows.
  
## Links das ferramentas
  Vamos começar com o básico, a instalação do Node.js baixando direto do site do próprio node. <br><br>
  <a>https://nodejs.org/en/download/</a><br><br>
  E também vamos utilizar o Visual Studio Code como nosso editor de texto (IDE). <br><br>
  <a>https://code.visualstudio.com/</a>
  <hr>

## Criando o projeto

 Após instalar o node, crie um diretório para o projeto node <br><br>

## Iniciando o package.json
  
  Abra o diretório de que foi criado para o projeto com o VScode:<br><br>
  Clicando com o comendo no seu telcado:
  ~~~
  'CRTL+K+O'
  ~~~
  É necessário utilizar o terminal, você pode utilizar o próprio terminal do VScode clicando em 'terminal' no canto superior direito do VScode.<br>
  Agora já com o terminal aberto digite o seguinte comando para iniciar o package.json
  ~~~
  npm init -y
  ~~~
## Instalando dependencias necessárias

  Agora, ainda no terminal, vamos instalar o 'EXPRESS' que será responsavel para crianção da pasta node_modules e por colocar nossa aplicação funcionando.<br><br>
  digite o comando
  ~~~
  npm install --save express
  ~~~
  Vamos instalar também uma dependencia de desenvolvimento 'nodemon' para manter nossa aplicação rodando e caso tenha alterações no código ela vai restartar a aplicação.<br><br>
  então com o comando
  ~~~
  npm install --save-dev nodemon
  ~~~
## Organização 
  Usando o vscode crie uma pasta chamada 'SRC' e em seguida crie um arquivo com o nome 'index.js'.
  <br><br>

## Mão no massa
  
  No arquivo index.js vamos colocar o seguinte código:
  ~~~JavaScript
  const express = require('express');
  const port = 8080;

  const app = express();

  app.get('/produtos', (req, res, next) => {
    res.send([
      { nome: 'Notebook', preco: 123.32 },
      { nome: 'Iphone', preco: 400.00}
      ]);
  });

  app.listen(port, () => {
    console.log('listening on port ' + port );
  });

  ~~~

## Editando o package.json
  Agora precisamos editar o package.json e escrever alguns scripts para podermos iniciar nossa aplicação.<br><br>
  Em nosso arquivo package.json vamos procurar por "main" e vamos colocar o caminho para o nossa aplicação que é o nosso index.json. <br><br>
  ~~~json
  "main": "src/index.js", 
  ~~~
  Agora vamos procurar por "script" e vamos criar o script que iniciar nossa aplicação. <br><br>
  dentro do escopo "scripts" vamos colocar o seguinte:
  ~~~json
  "start": "nodemon"
  ~~~
  e está pronta para ser iniciada a nossa aplicação!<br><br>

## Iniciar 
  Vamos agora em nosso terminal executar o comando:
  ~~~
  npm start
  ~~~
  e nossa aplicação estará ativa na porta indicada!


  
