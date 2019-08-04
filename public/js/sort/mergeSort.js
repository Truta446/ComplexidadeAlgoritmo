/**
 * Merge Sort is an algorithm where the main list is divided down into two half
 * sized lists, which then have merge sort called on these two smaller lists 
 * recursively until there is only a sorted list of one.
 * 
 * On the way up the recursive calls, the lists will be merged together inserting
 * the smaller value first, creating a larger sorted list.
 */

/**
 * Sort and merge two given arrays
 * @param {Array} list1 - sublist to break down
 * @param {Array} list2 - sublist to break down
 * @return {Array} merged list
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
   * Break down the lists into smaller pieces to be merged
   * @param {Array} list - list to be sorted
   * @return {Array} sorted list
   */
  function mergeSorting(list) {
    if (list.length < 2) return list;
  
    var listHalf = Math.floor(list.length/2);
    var subList1 = list.slice(0, listHalf);
    var subList2 = list.slice(listHalf, list.length);
  
    return merge(mergeSorting(subList1), mergeSorting(subList2));
  }

  /**
   * Função principal do MergeSort.
   * @param {Array} array_numeros 
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