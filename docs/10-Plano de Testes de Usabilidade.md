# Plano de Testes de Usabilidade

O teste de usabilidade permite avaliar a qualidade da interface com o usuário da aplicação interativa. O Plano de Testes de Software é gerado a partir da especificação do sistema e consiste em casos de testes que deverão ser executados quando a implementação estiver parcial ou totalmente pronta.

Para realizarmos os testes de usabilidade no nosso aplicativo, consideraremos a opnião de 5 usuários e faremos uma média de suas avaliações.
A avaliação será realizada através da escala Likert, de 1 a 5, sendo:

| **Nota** | **Facilidade de Uso** |
|:---:	|:---:	|
| 5 | O usuário não apresentou erros nem demora. |
| 4 | O usuário não apresentou erros, mas demorou para a finalização do teste. |
| 3 | O usuário encontrou um erro não-crítico nos fluxos ou precisou de ajuda simples. |
| 2 | O usuário encontrou erros não-críticos nos fluxos ou precisou de ajuda. |
| 1 | O usuário encontrou erros críticos ou obteve valores incorretos em um caso de teste. |

Ou seja, quanto maior a nota, maior será a facilidade de uso para o usuário. Os casos de teste que serão usados para avaliação estão abaixo:

| **Caso de teste 1** | **Cadastro de usuário** |
|:---:	|:---:	|
| Objetivo do teste | Verificar se o usuário consegue identificar e preencher os campos necessários para fazer o cadastro. |
| Ações esperadas | 1) Acessar a aplicação. <br> 2) Clicar em Cadastrar. <br> 3) Inserir as informações solicitadas e clicar em cadastrar. |
| Critérios de êxito | O usuário consegue criar a conta. |

| **Caso de teste 2** | **Login de usuário** |
|:---:	|:---:	|
| Objetivo do teste | Verificar se o usuário consegue fazer o login. |
| Ações esperadas | 1) Acessar a aplicação. <br> 2) Clicar em Fazer login. <br> 3) Inserir as informações solicitadas e clicar em Entrar. |
| Critérios de êxito | O usuário consegue logar na sua conta. |


| **Caso de teste 3** | **Timer** |
|:---:	|:---:	|
| Objetivo do teste | Verificar se o timer está funcionando. |
| Ações esperadas | 1) Acessar a aplicação. <br> 2) Clicar em iniciar timer. <br> 3) Visualizar se o tempo está regredindo. |
| Critérios de êxito | O timer iniciou e regrediu até o 00:00. |

| **Caso de teste 4** | **Atividades** |
|:---:	|:---:	|
| Objetivo do teste | Verificar se o usuário consegue adicionar e excluir atividades. |
| Ações esperadas | 1) Acessar a aplicação. <br> 2) Clicar em Atividades. <br> 3) Clicar em adicionar atividade. <br> 4) Dar um nome a atividade <br> 5) Excluir a atividade. <br> 6) Adicionar outra atividade. <br> 7) Marcar como concluída.  |
| Critérios de êxito | A atividade foi adicionada com sucesso. |
| Critérios de êxito | A atividade foi excluida com sucesso. |
| Critérios de êxito | A atividade foi marcada como concluída com sucesso. |

