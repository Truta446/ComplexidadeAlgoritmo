/**
 * O Selection Sort é composto por dois laços, um laço externo e outro interno. O laço externo
 * serve para controlar o índice inicial e o interno percorre todo o vetor.
 * Na primeira iteração do laço externo o índice começa de 0 e cada iteração ele
 * soma uma unidade até o final do vetor e o laço mais interno percorre o vetor
 * começando desse índice externo + 1 até o final do vetor. Isso ficará mais
 * explícito no exemplo.
 * 
 * @param {Array} items 
 */
function selectionSorting(items) {
  var tamanho = items.length;
  for (var i = 0; i < tamanho - 1; i++) {
    var min = i;
    for (var j = i + 1; j < tamanho; j++) {
      if (items[j] < items[min]) {
        min = j;
      }
    }
    if (min != i) {
      var tmp = items[i];
      items[i] = items[min];
      items[min] = tmp;
    }
  }
}

/**
 * Chamada do SelectionSort
 */
function selectionSort() {
  ARRAY_DESORDENADO = transformaArray(document.getElementById('hide_array').value);
  let vetor_numeros = ARRAY_DESORDENADO;

  let inicio = performance.now();
  selectionSorting(vetor_numeros);
  let fim = performance.now();

  ARRAY_ORDENADO = vetor_numeros;

  SELECTIONSORT = parseFloat(fim - inicio);
  SELECTIONSORT_ARRAY.push(SELECTIONSORT);
}