# Desaio Utilidades (Calculadora + Imc)

Essa é uma aplicação ministrada pela escola (_VaiNaWeb_). Com Rotas, Estados, SwitchCase, Condicionais.

### Tecnologias Usadas

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)


## Sobre o projeto

Esse é um desafio no módulo de react usando o __useState__, o hook do react na prática. O desafio consite em usar o useState para alterar o estado da variavél e alterar os valores utilizando os inputs para coletar os dados do usuários.
Como plus, componentizei com uma página principal e usei __rotas__ para renderizar o conteúdo quando clicado, a página inicia com a __Home__, contendo dois containers, um escrito __Calculadora__ e o outro __Imc__. Clicando em um deles, você é encaminhado para a página referente podemos efetuar calculos matemáticos ou o seu Imc e saber se como está o seu índice.

### Código

`app` no app apenas chamei o componente __Pages__.

`Page` o page recebe os imports de __RouterMain__ e exporta ele no seu return.

`routerMain` esse componente recebe o Route, Routes e a importação das outras páginas, armazenando o caminho das rotas e seus elementos.

`home` essa página recebe uma __nav__ que armazenar uma __ul__ e dentro uma __li__, contendo as partes clicáveis para as crotas usando o hook __Link__, para direcionar para as páginas.

`Calculadora e Imc` são duas páginas, cada uma contém as funções responsáveis para funcionalidade da apicação, como o 
__useState__, __inputs__ e __condicionais__. Com o detalhe que o __Imc__ recebe o __SwitchCase__ armazenando possíveis mensagens a depender do resultado dos cálculos do usuário.
Ambos inputs recebem verificação se há números para que não retorne algumas mensagem inesperada para o usuário, caso ele peça para calcular sem algum valor no campo de input.

`Main` um detalhe para a main que recebe o __BrowserRouter__, englobando nosso app e evitando o uso em vários pontos do mesmo, apenas necessitando das rotas em qualquer lugar.

`Style` criei apenas um arquivo de __reset__ para resetar tudo e o restante foi consumido por __Sass__, que é componentizado e utilizado em casa arquivo separadamente, facilitando a manutenção do código.
