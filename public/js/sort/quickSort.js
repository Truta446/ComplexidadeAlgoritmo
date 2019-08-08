/**
 * Encontrar o pivot no array para comparar com
 * todos os demais elementos do array.
 * 
 * @param {Array} arr 
 * @param {Int} left 
 * @param {Int} right 
 */
function quickSorting(arr, left = 0, right = arr.length - 1) {
    let len = arr.length,
        index;
  
    if(len > 1) {
        index = partition(arr, left, right);
    
        if(left < index - 1) {
            quickSorting(arr, left, index - 1);
        } 
    
        if(index < right) {
            quickSorting(arr, index, right);
        }
    }
  
    return arr;
  }

function partition(arr, left, right) {
    let middle = Math.floor((right + left) / 2),
        pivot = arr[middle],
        i = left,
        j = right;
  
    while(i <= j) {
        while(arr[i] < pivot) {
            i++;
        }
    
        while(arr[j] > pivot) {
            j--;
        }
    
        if(i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
  
    return i;
}

function quickSort() {
    ARRAY_DESORDENADO = transformaArray(document.getElementById('hide_array').value);
    let vetor = ARRAY_DESORDENADO
    let vetor_numeros = vetor;

    let inicio = performance.now();
    const array_ordenado = quickSorting(vetor_numeros);
    let fim = performance.now();

    ARRAY_ORDENADO = array_ordenado;

    QUICKSORT = parseFloat(fim - inicio);
    QUICKSORT_ARRAY.push(QUICKSORT);
}
