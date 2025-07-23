# Os primeiros passos utilizando git e githubOs primeiros passos utilizando git e github

## 📢 Introdução

Aqueles que leram meu último artigo devem achar que me tornei um grande adepto do git e github. Mas o fato é que os meus primeiros passos no uso do Git foram comparáveis aos de uma pessoa muito embriagada. Devo ter sido o único aluno que no segundo dia de uso do github foi obrigado a descobrir como apagar o repositório, devido a imensa quantidade de "asneiras" que já havia feito. Também devo ter batido o recorde de receber mensagens de erro que ninguém sabia o que significava, e que portanto, ficava mais fácil apagar e começar tudo de novo desde o início. O ponto é que muitas coisas que são “óbvias” e “triviais” para uma profissional experiente, não são para os iniciantes. Devido a isso, resolvi escrever um passo-a-passo do uso do git e github, apresentando com mais detalhes alguns pontos em que tive dúvida.

## 😘 O que é o Git?

O Git é um sistema de controle de versão distribuído, usado para registrar o histórico de alterações em arquivos e coordenar o trabalho de várias pessoas em um projeto. 

Ok! Não entendi nada. Vamos ser mais claros. Por exemplo, você escreveu um rascunho de texto ("Minhas adoráveis e chatas memórias de infância") num editor de texto qualquer. O que você escreveu é a versão inicial ou primeira versão do texto. Algum tempo depois, você resolve mudar algumas partes do texto (tornar minha infância mais heróica como a saga do Eragon) e grava novamente o texto. Se você fizer isso no editor de texto, sobrescrevendo o texto antigo, irá perder a versão inicial e ficará apenas com a última versão. Mas se você usar o Git poderá salvar cada versão, criando pontos de verificação no tempo, inclusive podendo resgatar versões mais antigas do texto. 

Esse mesmo processo de guardar versões usando o Git pode ser usado para qualquer tipo de documento/arquivo, seja o texto de um livro (como no exemplo acima), um projeto CAD ou um projeto de um sistema computacional com milhares de linhas de código. Além disso, o versionamento permite que uma equipe possa trabalhar harmonicamente sobre o mesmo projeto, sem ficar tropeçando uns nos outros.

## 🏁 Como instalar o Git localmente em seu computador?

Existem várias formas de fazer a instalação do Git em um computador local. Em primeiro lugar, é preciso verificar qual o sistema operacional que está sendo utilizado. De forma geral, você pode baixar o download do instalador do git via o link:
https://git-scm.com/downloads e executá-lo para fazer a instalação. Também é possível utilizar os gerenciadores de pacote, tais como o APT e RPM (no caso do Linux) para fazer a instalação via linha de comando, mas não vamos trabalhar dessa forma neste artigo. 

Uma vez que o instalador declare o final do processo, você pode verificar se a instalação foi feita corretamente, acessando o terminal do sistema operacional (Windows, Linux ou MacOs) e digitando o seguinte comando:
```
git --version
``` 
_Receberemos como resposta a versão do Git atualmente instalada no computador_.

##  📙 Referências

