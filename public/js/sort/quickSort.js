/**
 * O algoritmo quicksort é um método de ordenação muito rápido e eficiente,
 * inventado por C.A.R. Hoare em 1960, quando visitou a Universidade de Moscovo
 * como estudante. Naquela época, Hoare trabalhou em um projeto de tradução de
 * máquina para o National Physical Laboratory. Ele criou o quicksort ao tentar
 * traduzir um dicionário de inglês para russo, ordenando as palavras, tendo como
 * objetivo reduzir o problema original em subproblemas que possam ser resolvidos
 * mais fácil e rápido. Foi publicado em 1962 após uma série de refinamentos.
 * 
 * @param {Array} arr 
 * @param {Int} esquerda 
 * @param {Int} direita 
 */
function quickSorting(arr, esquerda = 0, direita = arr.length - 1) {
    let len = arr.length,
        index;
  
    if(len > 1) {
        index = partition(arr, esquerda, direita);
    
        if(esquerda < index - 1) {
            quickSorting(arr, esquerda, index - 1);
        } 
    
        if(index < direita) {
            quickSorting(arr, index, direita);
        }
    }
  
    return arr;
}

/**
 * Encontrar o pivot para comparar com
 * todos os demais elementos do array.
 * 
 * @param {Array} arr 
 * @param {int} esquerda 
 * @param {int} direita 
 */
function partition(arr, esquerda, direita) {
    let meio = Math.floor((direita + esquerda) / 2),
        pivot = arr[meio],
        i = esquerda,
        j = direita;
  
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

/**
 * Chamada do QuickSort
 */
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
