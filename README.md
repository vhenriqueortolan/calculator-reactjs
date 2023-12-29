# Calculator-ReactJS

Este é um projeto de uma calculadora simples, mas funcional, que usa ReactJS como tecnologia principal. O objetivo deste projeto é praticar a programação com essa tecnologia e aprender como criar componentes reutilizáveis e interativos.

## Indice

- [Tecnologia usada](#tecnologia-usada)
- [Instalação e execução](#instalação-e-execução)
- [Uso](#uso)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Tecnologia usada

- [ReactJS](https://react.dev/), uma biblioteca JavaScript para criar interfaces de usuário.

## Instalação e execução

Para instalar e executar este projeto localmente, você precisa ter o [Node.js] e o [npm] instalados na sua máquina.

Siga os passos abaixo:

1. Clone este repositório para a sua máquina usando o comando:

```bash
git clone https://github.com/vhenriqueortolan/calculator-reactjs.git
```

2. Entre na pasta do projeto usando o comando:

```bash
cd calculator-reactjs
```

3. Instale as dependências do projeto usando o comando:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento usando o comando:

```bash
npm start
```

5. Abra o seu navegador e acesse o endereço:

```bash
http://localhost:3000
```

## Uso

Para usar a calculadora, você pode clicar nos botões na tela. A calculadora possui as seguintes funções:

- Os botões de **0** a **9** permitem digitar os números que você quer calcular.
- O botão de **,** permite digitar números não inteiros, usando o ponto como separador decimal.
- Os botões de **+**, **-**, **x** e **/** permitem escolher a operação matemática que você quer realizar, entre soma, subtração, multiplicação e divisão.
- O botão de **=** permite obter o resultado da operação que você digitou.
- O botão de **C** permite limpar a tela e começar uma nova operação.

## Estrutura do projeto

Este projeto segue a estrutura padrão de uma aplicação React criada com o [Create React App]. Ele possui as seguintes pastas e arquivos principais:

- **public**: Esta pasta contém os arquivos estáticos que são servidos pelo servidor web, como o arquivo index.html, o favicon, o manifest e o logo.
- **src**: Esta pasta contém os arquivos de código fonte da aplicação, como os componentes React, os estilos, as imagens e os testes.
  - **context**: Esta pasta contém o arquivo MathContext.js, que cria o contexto e o provider para a utilização da Context API do React. Este arquivo também contém todas as funções referentes às operações matemáticas e os hooks necessários para o funcionamento da tela do app e demais funcionalidades da aplicação.
  - **App.css e index.css**: Arquivos de estilo CSS que definem a aparência dos componentes React.
  - **index.js**: Este é o arquivo de entrada da aplicação, que renderiza o componente App no elemento root do index.html e fornece o provider do contexto para usar em App.
  - **App.js**: Este é o único componente da aplicação.

## Contribuição

Este projeto é de código aberto e está disponível no [GitHub]. Você pode enviar as suas sugestões, correções ou melhorias através de [issues](https://github.com/vhenriqueortolan/calculator-reactjs/issues) ou [pull requests](https://github.com/vhenriqueortolan/calculator-reactjs/pulls).

Algumas melhorias possíveis para este projeto são:

- Implementar mais operações comuns em calculadoras, como raiz quadrada, potência, logaritmo, etc.
- Corrigir a exibição em determinados dispositivos, como o Safari para mobile, que pode apresentar problemas de responsividade ou alinhamento.
- Reconhecer os dígitos do teclado do dispositivo, além dos cliques nos botões da aplicação.
- Refatorar o código, separando melhor as responsabilidades em arquivos diferentes, para uma melhor leitura do código e manutenção. Por exemplo, extrair as funções e os hooks do arquivo MathContext.js para arquivos separados.

## Licença

Este projeto está licenciado sob a [MIT License], que permite o uso, a cópia, a modificação e a distribuição do código, desde que os direitos autorais e as permissões sejam mantidos.
