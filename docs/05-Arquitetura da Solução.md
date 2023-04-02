# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![Classe UML - Classe UML](https://user-images.githubusercontent.com/103431797/228698187-9bbd652c-43d3-4623-87b0-45d19de5e9c6.jpeg)

## Modelo ER

O Modelo ER apresentado abaixo representa através de um diagrama como as entidades, usuário e tarefa, se relacionam entre si por meio de suas cardinalidades na aplicação interativa, bem como seus atributos correspondentes.

![DerPomodoro03](https://user-images.githubusercontent.com/103853727/226481493-1830d62c-53ae-4db4-b3e4-b53253601f36.jpg)


## Esquema Relacional

O Esquema Relacional a seguir é a representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
 ![DiagramaEsquemaRelacionalPomodoroTimer04 ](https://user-images.githubusercontent.com/103853727/228359972-32ecf5eb-2a95-4a4c-a151-9f2bf97d7704.jpg)
 
 ## Indicadores de Desempenho
 
 ![Indicadores]https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-time-1-pomodoro-timer/blob/9358df78500c39b45b18453b3fda161022a98772/docs/img/Indicadores%20de%20desempenho.png


## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software


> - Deverar usar extensção prettier do vsCode para identação do codigo.
> - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
>  - Sera utilizado eslink para verificação dos padroes de codigo.
> - [Eslint](https://eslint.org/)
> - Todo os componentes e telas devem estar em pastas separadas.
> - src/components/componente1/Componente1.jsx & src/screens/home/Home.jsx
> - arquivos components e eelas devem começar com letras MAIUSCULAS
> - Padrao de import conforme es7
> - [Import](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)
> - Variaveis, let e const devem estar no padrao infixCaps.
> - Exemplo: let firstName; const lastName;
> - [PadroesCodigo](https://www.devmedia.com.br/padroes-de-codificacao/16529)

[PomodoTimer](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-time-1-pomodoro-timer)   |
> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
