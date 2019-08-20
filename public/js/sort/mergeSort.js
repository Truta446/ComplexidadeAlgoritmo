/**
 * Os três passos úteis dos algoritmos de divisão e conquista
 *  que se aplicam ao merge sort são:
 * 1º - Dividir: Calcula o ponto médio do sub-arranjo, o que demora um tempo constante O(1);
 * 2º - Conquistar: Recursivamente resolve dois subproblemas, cada um de tamanho n/2,
 * o que contribui com 2T(n/2) para o tempo de execução;
 * 3º - Combinar: Unir os sub-arranjos em um único conjunto ordenado,
 * que leva o tempo O(n).
 */

/**
 * Ordena e junta os dois arrays dados
 * @param {Array} list1 - 1ª sublista após ser quebrada
 * @param {Array} list2 - 2º sublista após ser quebrada
 * @return {Array} Lista ordenada
 */
function merge(list1, list2) {
    var results = [];
  
    while(list1.length && list2.length) {
      if (list1[0] <= list2[0]) {
        results.push(list1.shift());
      } else {
        results.push(list2.shift());
      }
    }
    return results.concat(list1, list2);
  }
  
/**
 * Quebrando a lsita em pequenos pedaços para serem ordenados.
 * @param {Array} list - Lista para ser ordenada.
 * @return {Array} Lista ordenada
 */
function mergeSorting(list) {
  if (list.length < 2) return list;

  var metade_lista = Math.floor(list.length/2);
  var sub_lista1 = list.slice(0, metade_lista);
  var sub_lista2 = list.slice(metade_lista, list.length);

  return merge(mergeSorting(sub_lista1), mergeSorting(sub_lista2));
}

/**
 * Chamada do MergeSort
 */
function mergeSort() {
  ARRAY_DESORDENADO = transformaArray(document.getElementById('hide_array').value);
  let vetor_numeros = ARRAY_DESORDENADO;

  let inicio = performance.now();
  const array_ordenado = mergeSorting(vetor_numeros);
  let fim = performance.now();

  ARRAY_ORDENADO = array_ordenado;

  MERGESORT = parseFloat(fim - inicio);
  MERGESORT_ARRAY.push(MERGESORT);
}