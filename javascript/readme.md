=== ARMAZENANDO DADOS ===
=========================

O JavaScript agrupa os dados de script em tipos de dados. O JavaScript usa três tipos básicos de dados: texto, número e booleano.

  Texto - Os dados de texto são apenas uma sequência de caracteres. Texto geralmente contém frases, mas não precisa ter. Também conhecido como strings, o texto em JavaScript também aparece dentro de ("") - aspas ou ('') - apóstrofos.

  Número - Os números são usados para armazenar dados númericos como pesos e quantidade de coisas. Os números em JavaScript também podem ser inteiros (2 quilos) ou decimais (2,5 quilos).

  Booleano - Os dados booleanos estão sempre em um ou dois estados possíveis: verdadeiro ou falso. Portanto, você pode usar um booleano para representar algo que possua duas definições possíveis.

Os tipos de dados afetam diretamente a forma como você trabalha com dados no código JavaScript. Por exemplo, as caixas de alerta exibem texto, não números. Então, os números são convertidos despercebidamente em texto antes de serem exibidos.

Armazenar dados em JavaScript não significa apenas tipo, significa também finalidade. Os dados que irá armazenar se modificarão ao longo do processo do script? A resposta determina se você codifica  os tipos de dados como uma variável ou uma constante.

  Variável - É um local na memória com um nome específico. Se modifica ao longo do processo de um script.
  
Crie uma variável usando a palavra chave var e o nome da nova variável. As variáveis podem ser criadas sem inicializa-las com um valor.

  var população;
  
Mas, na verdade, é sempre uma boa idéia dar um valor à variável assim que você a cria. Isso se chama inicializar a variável. Pode-se utilizar o método de inicialização de variável atribuindo '' para variáveis de texto, 0 para variáveis de número e false para variáveis booleanas.

  var populacao = 300;
  
Constante - É um local na memória com um nome específico, mas seu valor nunca muda. Elas são criadas como variáveis inicializadas e o seu valor se tornará permanente. Constantes são úteis para armazenar informações que você poderia codificar diretamente em um script, como a alíquota de imposto sobre venda.

Crie uma constante usando a palavra chave const e o nome da nova constante.

  const aliquota = 0.925;
  
Os nomes dados as variáveis e constantes utilizadas no script são conhecidos como identificadores e devem seguir regras de nomenclatura:

  Um identificador deve ter pelo menos 1 caractere.
  O primeiro caractere de um identificador precisa ser uma letra, um sublinhado _ ou um cifrão $.
  Cada caractere, após o primeiro caractere, pode ser uma letra, um sublinhado _ um cifrão $ ou um número.
  Espaços e caracteres especiais diferentes de _ e $ não são permitidos em nenhuma parte do identificador.
  
Identificadores devem ser descritivos, fazendo com que os dados sejam facilmente identificavéis e dando significado para o fragmento de informação.