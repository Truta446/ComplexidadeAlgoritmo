/**
 * Insertion Sort, ou ordenação por inserção, é o algoritmo de ordenação que,
 * dado uma estrutura (array, lista) constrói uma matriz final com um elemento
 * de cada vez, uma inserção por vez.
 * 
 * Percorra as posições do array, começando com o índice 1 (um).
 * Cada nova posição é como a nova carta que você recebeu,
 * e você precisa inseri-la no lugar correto no subarray ordenado
 * à esquerda daquela posição.
 * 
 * @param {Array} lista_desordenada 
 */
function insertionSorting(lista_desordenada) {
  var len = lista_desordenada.length;
  for (var i = 1; i < len; i++) {
    var tmp = lista_desordenada[i]; //Copia o elemente
    for (var j = i - 1; j >= 0 && (lista_desordenada[j] > tmp); j--) {
      lista_desordenada[j + 1] = lista_desordenada[j]; //Troca o número
    }
    lista_desordenada[j + 1] = tmp; //Insere o número copiado para a posição correta, na parte ordenada
  }
}

/**
 * Chamada do InsertionSort
 */
function insertionSort() {
  ARRAY_DESORDENADO = transformaArray(document.getElementById('hide_array').value);
  let vetor_numeros = ARRAY_DESORDENADO;

  let inicio = performance.now();
  insertionSorting(vetor_numeros);
  let fim = performance.now();

  ARRAY_ORDENADO = vetor_numeros;
  
  INSERTIONSORT = parseFloat(fim - inicio);
  INSERTIONSORT_ARRAY.push(INSERTIONSORT);
}