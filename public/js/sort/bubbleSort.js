/** 
 * A ideia é percorrer o vector diversas vezes, e a cada passagem
 * fazer flutuar para o topo o maior elemento da sequência.
 * Essa movimentação lembra a forma como as bolhas em um tanque
 * de água procuram seu próprio nível, e disso vem o nome do algoritmo.
 * 
 * No melhor caso, o algoritmo executa n operações relevantes,
 * onde n representa o número de elementos do vector.
 * No pior caso, são feitas n^2 operações.
 * A complexidade desse algoritmo é de ordem quadrática.
 * Por isso, ele não é recomendado para programas que precisem
 * de velocidade e operem com quantidade elevada de dados.
 * 
 * @param {Array} items 
 */
function bubbleSorting(items) {
    let tamanho_lista = items.length;
    for (let i = (tamanho_lista - 1); i > 0; i--) {
        for (let j = (tamanho_lista - i); j > 0; j--) {
            //Compara as posições adjacentes
            if (items[j] < items[j - 1]) {
                //Realiza a troca dos números
                let tmp = items[j];
                items[j] = items[j - 1];
                items[j - 1] = tmp;
            }
        }
    }
}

/**
 * Chamada do BubbleSort
 */
function bubbleSort() {
    ARRAY_DESORDENADO = transformaArray(document.getElementById('hide_array').value);
    let vetor_numeros = ARRAY_DESORDENADO;

    let inicio = performance.now();
    bubbleSorting(vetor_numeros);
    let fim = performance.now();

    ARRAY_ORDENADO = vetor_numeros;

    BUBBLESORT = parseFloat(fim - inicio);
    BUBBLESORT_ARRAY.push(BUBBLESORT);
}