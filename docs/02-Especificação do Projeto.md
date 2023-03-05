# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Claudia Souza - 32 anos

- Secretaria
- Obesa, hipertensa com problemas cardiovasculares utiliza o app para organizar sua lista de exercicios fisicos semanais e utiliza do timer para poder intervalar exercicios de baixa/alta intensidade. Por recomendações médicas, ele precisa desenvolver uma rotina de exercícios físicos, mas tem dificuldades em manter o foco e a motivação no processo. 


Pedro Silva - 17

- Estudante
- Diagnosticado com TDAH. É estudante do ensino médio e está estudando por conta própria para prestar vestibular. É sua primeira vez nesse processo e ele não sabe muito bem como distribuir seu foco e ter disciplina. Está procurando por aplicativos que ofereçam uma solução para o seu problema.

Marcia Rodrigues - 26 
- Concurseira 
- Se formou recentemente no curso de Direito. Está estudando para concursos federais, cujas ementas são muito longas. Sabendo que ela precisa ser estratégica para gerenciar o seu tempo entre todas as matérias que precisa estudar, está a procura de ferramentas que ajudem nessa organização.


Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Concurseira  | Gerenciar o tempo de estudo de cada matéria    | Montar um cronograma de estudos    |
|Aluno do ensino médio     | Ter mais foco e disciplina                 | Ser aprovado no vestibular|
|Pessoa com problemas de coração    | Motivação e foco para manter a rotina de exercícios     | Cuidar de sua saúde|

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)





## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O App. deve conter um timer para utilizicacao da técnica pomodoro.| ALTA | 
|RF-002| Usuario deve ter a autonomia de ajustar o timer conforme sua vontade | MÉDIA |
|RF-003| Usuario podera montar uma lista de atividades para serem feitas | ALTA |
|RF-004| Usuario tera acesso ao cronometo para monitorar tempo gasto na atividade | MÉDIA |
|RF-005| Usuario pode editar, excluir e criar novas atividades conforme sua vontade| MÉDIA |
|RF-006| Usuario ira fazer login usando sua conta google. | BAIXA|
### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema sera feito para dispositivos moveis | ALTA | 
|RNF-002| O app deve estar no repositorio oficial do time| ALTA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| App sera feito em PT-BR       |
|02| Timer usara as medidas usadas no brasil HH:MM:SS  |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

O diagrama de casos de uso a seguir é um modelo gráfico com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

![CasoDeUsoPomodoro1 drawio](https://user-images.githubusercontent.com/103853727/222268250-6fa82d88-9bb5-484d-9277-01aa336ed856.png)

# Matriz de Rastreabilidade

| ID     | RF-001 | RF-002 | RF-003 | RF-004 | RF-005 | RF-006 |
|--------|--------|--------|--------|--------|--------|--------|
| Claudia| X      | X      |        |    X   | X      |        |
| Pedro  | X      | X      | X      |        | x      |        |
| Marcia | X      | X      | X      |        | X      |        |





# Gerenciamento de Projeto


De acordo com o PMBoK v6, há 10 áreas pilares para gerenciar projetos e que caracterizam a multidisciplinaridade envolvida: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições e Partes Interessadas.

Para o desenvolvimento de projetos, é necessário considerar a gerência de todas essas áreas. Como tais áreas se complementam e estão diretamente relacionadas, não é possível examinar apenas uma área. Por exemplo, a ampliação do escopo de um projeto interfere também em seu cronograma e em seus custos.




## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Diagrama time - Gráfico de Gantt simples](https://user-images.githubusercontent.com/105467049/222971724-cf0c6476-28b5-4859-b615-ae8391d01c25.jpeg)


## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 
<br/>
Esta sendo usado a ferramenta trello com um checklist.
https://trello.com/b/KC4BhcLl/pmv-ads-2023-1-e3-proj-mov-t4-time-1-pomodoro-timer

![Captura de tela de 2023-03-05 13-03-40](https://user-images.githubusercontent.com/105467049/222971722-de7cabae-748e-4299-9fde-4669c538b252.png)


## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

| Gasto Estimado                 | Valor                                                                                   |
|--------------------------------|----------------------------------------------------------------------------------------------------------|
| Recursos Humanos               |  R$ 20.000,00      |                                                                                 | | UX/UI                          |  R$ 15.000,00      |             
| Desenvolvimento                |  R$ 92.000,00      |
| Gestão de Projeto              |  R$ 5.000,00       | 
| Infraestrutura                 |  R$ 12.000,00      |
| Hardware                       |  R$ 20.000,00      |
| Marketing		                    |  R$5.000,00        |
| Cursos e treinamentos          |  R$ 5.400,00       |
| Licenças de Softwares          |  R$ 10.000,00      |
| Hospedagem	                    |  R$2.000,00        |  
| **Total**                      |  **R$ 186.000,00** |


