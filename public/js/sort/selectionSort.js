/*The selection sort algorithm sorts an array by repeatedly finding the minimum element
 *(considering ascending order) from unsorted part and putting it at the beginning. The
 *algorithm maintains two subarrays in a given array.
 *1) The subarray which is already sorted.
 *2) Remaining subarray which is unsorted.
 *
 *In every iteration of selection sort, the minimum element (considering ascending order)
 *from the unsorted subarray is picked and moved to the sorted subarray.
 */
function selectionSorting(items) {
    var length = items.length;
    for (var i = 0; i < length - 1; i++) {
      var min = i;
      for (var j = i + 1; j < length; j++) {
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