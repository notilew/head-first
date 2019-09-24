================================
=== LIVRO DE REFERÊNCIA HTML ===
================================

* HTML & XHTML: The DefinitiveGuide (O'Reilly).

==============================
=== ENTIDADE DE CARACTERES ===
==============================

* https://www.w3schools.com/html/html_entities.asp
* http://www.unicode.org/charts/
* http://www.unicode.org/

Observação: Seu browser só exibirá todos os caracteres se o seu computador ou dispositivo tiver a fonte apropriada instalada. Portanto, mesmo que você ainda conte com o fato de que as entidades básicas do site da w3schools estão disponíveis em qualquer browser, não há garantia de que você possa exibir todas essas entidades.

===============
=== DOMÍNIO ===
===============

Empresa de Hospedagem

  + https://www.000webhost.com

Senha

  + we33828470

Domínio

  + notilew.000webhostapp.com

Site

  + https://notilew.000webhost.com

FTP

  + files.000webhost.com
  + 21
  + notilew
  + we33828470

Nome do Servidor

  + ns01.000webhost.com
  + ns02.000webhost.com

==========================
=== VALIDADOR HTML W3C ===
==========================

Para validar o tipo de documento utilizado no documento HTML e também se o código foi escrito corretamente.

  + http://validator.w3.org/

Endereço para pesquisa de codificação de caracteres.

  + https://www.w3.org/International/tutorials/tutorial-char-enc/
  + https://www.w3.org/International/O-charset.en.html

=======================
=== REFERÊNCIAS CSS ===
=======================

* O livro CSS Pocket Reference.

========================
=== PROPRIEDADES CSS ===
========================

* Altera a família da fonte do texto de um elemento (serif, sans-serif, cursive, monospace, fantasy).

  font-family:

* Torna o texto maior ou menor (px, %, em, keywords(small, medium, large...)).

  font-size:

* Controla o negrito do texto (bold, normal).

  font-weight:

* Define um texto como oblíquo ou com itálico (oblique, italic).

  font-style:

* Define o espaço entre as linhas em um elemento de texto.

  line-height:

* Define o espaço entre as letras.

  letter-spacing:

* Alinha o texto à esquerda, à direita, centralizado ou justificado (left, right, center, justify).

  text-align:

* Altera a cor do texto de um elemento.

  color:

* Altera a cor de fundo de um elemento.

  background-color:

* Controla o estilo visual da borda (solid, doube, groove, outset, inset, dotted, dashed e ridge).

  border-style:

* Controla a espessura da borda, pode ser especificado por px ou palavras-chave (thin, medium e thick).

  border-width:

* Controla a cor de uma borda, pode ser especificado com palavras chave, rgb ou hexadecimal.

  border-color:

* Controla a borda nos 4 lados.

  border-top-color:
  border-top-width:
  border-top-style:

  border-right-color:
  border-right-width:
  border-right-style:

  border-bottom-color:
  border-bottom-width:
  border-bottom-style:

  border-left-color:
  border-left-width:
  border-left-style:

* Controla o arredondamento dos cantos das bordas, pode ser especificado em px ou em (escala).

  border-radius:

* Controla o arredondamento dos 4 cantos das bordas.

  border-top-left-radius:
  border-top-right-radius:
  border-bottom-right-radius:
  border-bottom-left-radius:

* Altera a decoração de um texto do elemento (underline, overline e line-through).

  text-decoration: underline; Adiciona um sublinhado abaixo do texto.

* Altera o espaço entre o limite de um elemento e seu conteúdo (enchimento), pode ser especificado com px ou % da área dentro da borda.

  padding:

* Altera o o espaço entre elementos (margem), pode ser especificado com px ou % da área dentro da borda.

  margin:

* Posiciona um elemento do lado esquerdo.

  left:

* Posiciona um elemento no topo da página.

  top:

* Especifica a largura da área de conteúdo de um elemento. Pode ser especificado em pixels ou em porcentagem.

  width:

* Especifica a altura da área de conteúdo de um elemento. Pode ser especificado em pixels ou em porcentagem.

  height:

* Altera a aparência de itens de lista em uma lista.

  list-style:

* Define a imagem do fundo de um elemento.

  background-image: url(''); 

* Fixa a posição da imagem de fundo, pode ser especificada em pixels, porcentagem ou usando palavras chaves (top, left, bottom, right ou center).

  background-position:

* Controla o ladrilhado (repetição) da imagem de fundo. Pode ser especificado: repeat - faz com que a imagem se repita tanto na horizontal, quanto na vertical. Esse é o comportamento padrão; no-repeat - mostra a imagem uma vez, não repete a imagem; repeat-x - repete a imagem apenas na horizontal; repeat-y - repete a imagem apenas na vertical; inherit - apenas faz o que o elemento pai fizer; 

  background-repeat:

===================================
=== AJUSTANDO TAMANHO DE FONTES ===
===================================

* Maneiras diferentes de especificar a propriedade font-size de um elemento.

  + px - Você pode especificar o tamanho de sua fonte em pixels. Quando você especifica o tamanho da fonte em pixels, está dizendo ao browser qual o tamanho em pixels as letras devem ter.

    - font-size: 14px; 

  + % - Ao contrário dos pixels, que dizem a altura exata das fontes, um tamanho de fonte especificado como uma porcentagem diz à fonte como será o seu tamanho em relação a outra fonte. Portanto, font-size: 150%; informa que o tamanho da fonte do elemento em questão deve ser 150% maior que a fonte de seu elemento pai.

    - font-size: 150%; 

  + em - Você também pode especificar tamanhos de fontes usando 'em', que, como a porcentagem, é outra unidade relativa de medida. Com ele, você não especifica uma porcentagem, mas um fator de escala. Portanto, font-size: 1, 5em; informa que o tamanho da fonte do elemento em questão deve ser 1, 2 vezes maior que a fonte de seu elemento pai.

    - font-size: 1, 5em; 

  + keywords - Há uma outra maneira de especificar tamanhos de fontes: palavras-chave. Você pode especificar um tamanho de fonte como: xx-small, x-small, small, smaller, medium, xx-large, x-large, large ou larger e o browser traduzirá essas palavras-chave para valores em pixels usando os padrões definidos no browser. Cada tamanho é cerca de 20% maior do que o anterior e small normalmente é definido em torno de 12 pixels.

    - font-size: medium; 

==================================
=== ESPECIFICANDO CORES DA WEB ===
==================================

* As cores da web são especificadas em termos de quanto vermelho, verde e azul a cor é composta. Podemos espeficicar as cores de 3 maneiras: nome da cor (paleta de 150 cores), percentual relativo de vermelho, verde e azul da cor (paleta de 16 milhões de cores) ou por códigos hexadecimais (paleta de 16 milhões de cores). Mas lembre-se de que todas essas maneiras em última instância apenas dizem ao browser a quantidade de vermelho, verde e azul que existe nas cores.

* Especificação de cor pelo nome
  + A maneira direta de descrever uma cor nas CSS é simplesmente usar o seu nome.
    - body { background-color: silver; }

* Especificação de cor em valores de vermelho, verde e azul
  + Você também pode especificar uma cor como a quantidade de vermelho, verde e azul.
    - body { background-color: rgb(80%, 40%, 0%); }

  + Você também pode especificar os valores de vermelho, verde e azul como um valor númerico entre 0 e 255.
    - body { background-color: rgb(204, 102, 0); }

* Especificação de cor usando códigos hexadecimais
  + Cada conjunto de dois dígitos de um código hexadecimal representa apenas o componente de vermelhor, verde e azul da cor. Cada conjunto representa um número de 0 a 255 representados pelo sistema hexadecimal (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F).
    - body { background-color: #cc6600; }

  + Para desmontar uma cor hexadecimal, separe cada conjunto e começando pela esquerda, se for uma letra, converta para o valor decimal, multiplique por 16 e some com o valor da direita, repita o processo nos três conjuntos.

===================================
=== TABELA ONLINE DE WEB COLORS ===
===================================

* https://en.wikipedia.org/wiki/Web_colors

=========================
=== VALIDADOR CSS W3C ===
=========================

* Para validar folhas de estilo e verificar se foram escritas corretamente.

  + http://jigsaw.w3.org/css-validator/

=======================================
=== SITE DE HOSPEDAGEM DE WEB FONTS ===
=======================================

* Font Squirrel:
  + https://www.fontsquirrel.com/

* Google Fonts:
  + https://fonts.google.com/

===========================
=== MODELO DE CAIXA CSS ===
===========================

* O Modelo de Caixa é como as CSS vêem os elementos. As CSS tratam cada elemento como se ele representasse uma caixa. Cada caixa é formada por uma área de conteúdo com enchimentos, bordas e margens opcionais.

* A caixa é composta por:

  + A área de conteúdo armazena o conteúdo - um texto ou uma imagem, por exemplo.
  + A área de conteúdo é cercada por um enchimento transparente opcional.
  + Uma borda opcional pode ser colocada em torno do enchimento.
  + E, finalmente uma margem transparente opcional circunda tudo isso.

* Todos os elementos são tratados como caixa, elementos em bloco ou em linha.

=====================
=== MEDIA QUERIES ===
=====================

* Permite especificar regras de estilo CSS para diferentes dispositivos e telas. Podemos utilizar o recurso de media queries de duas formas: 1 - dentro do próprio elemento ou 2 - dentro de uma folha de estilo CSS. Existe uma grande variedade de propriedades que você pode usar em sua queries, como min-device-width: (dispositivo com largura mínima de), max-device-width: (dispositivo com largura máxima), print (quando o tipo de mídia for uma impressora, visualizando a página em uma impressora), orientation: (portrait (retrato), landscape (paisagem)), 

  <link type="text-css" rel="stylesheet" href="style.css" media="screen and (max-device-width: 480px)">
  <link type="text-css" rel="stylesheet" href="style.css" media="screen and (min-device-width: 480px)">
  <link type="text-css" rel="stylesheet" href="style.css" media="print">

  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    h3 {
      color: red; 

    }

  }

  @media screen and (min-device-width: 1024px) and (orientation: landscape) {
    h3 {
      color: yellow; 

    }

  }

  @media print {
    h3 {
      color: green; 

    }

  }

  h3 {
    color: blue; 
  }

  Apenas as regras CSS que são específicas para um tipo de mídia estão incluídas em uma regra @media. Todas as regras comuns a todos os tipos de mídia estão incluídos no arquivo CSS abaixo das regras @media, então dessa forma você não tem nenhum regra repetida desnecessariamente.

  As características de mídia max-device-width e min-device-width dependem do tamanho da tela do dispositivo (não da largura da janela do browser). E ser você se preocupar mais com o tamanho do browser? Bem, você pode usar as propriedades max-width e min-width, que representam a largura máxima e mínima da janela do browser (não o tamanho da tela).

  <link type="text/css" rel="stylesheet" href="style.css" media="screen (min-width: 481px)">
  <link type="text/css" rel="stylesheet" href="style.css" media="screen (max-width: 480px)">

  + Especificações sobre Media Queries:
    - https://www.w3.org/TR/css3-mediaqueries/
    - Livro: Head First Mobile Web

