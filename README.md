# Desaio Utilidades (Calculadora + Imc)

Essa é uma aplicação ministrada pela escola (_VaiNaWeb_). Com Rotas, Estados, SwitchCase, Condicionais.

### Tecnologias Usadas

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)


## Sobre o projeto

Esse é um desafio no módulo de react usando o (_useState_), o hook do react na prática. O desafio consite em usar o useState para alterar o estado da variavél e alterar os valores utilizando os inputs para coletar os dados do usuários.
Como plus, componentizei com uma página principal e usei (_rotas_) para renderizar o conteúdo quando clicado, a página inicia com a (_Home_), contendo dois containers, um escrito (_Calculadora_) e o outro (_Imc_). Clicando em um deles, você é encaminhado para a página referente podemos efetuar calculos matemáticos ou o seu Imc e saber se como está o seu índice.

### Código

`app` no app apenas chamei o componente (_Pages_).

`Page` o page recebe os imports de (_RouterMain_) e exporta ele no seu return.

`routerMain` esse componente recebe o Route, Routes e a importação das outras páginas, armazenando o caminho das rotas e seus elementos.

`home` essa página recebe uma (_nav_) que armazenar uma (_ul_) e dentro uma (_li_), contendo as partes clicáveis para as crotas usando o hook (_Link_), para direcionar para as páginas.

`Calculadora e Imc` são duas páginas, cada uma contém as funções responsáveis para funcionalidade da apicação, como o (_useState_), (_inputs_) e (_condicionais_). Com o detalhe que o (_Imc_) recebe o (_SwitchCase_) armazenando possíveis mensagens a depender do resultado dos cálculos do usuário.
Ambos inputs recebem verificação se há números para que não retorne algumas mensagem inesperada para o usuário, caso ele peça para calcular sem algum valor no campo de input.

`Main` um detalhe para a main que recebe o (_BrowserRouter_), englobando nosso app e evitando o uso em vários pontos do mesmo, apenas necessitando das rotas em qualquer lugar.

`Style` criei apenas um arquivo de (_reset_) para resetar tudo e o restante foi consumido por (_Sass_), que é componentizado e utilizado em casa arquivo separadamente, facilitando a manutenção do código.
