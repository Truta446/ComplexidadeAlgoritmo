Array.prototype.heapify = function (index, tamanho_pilha) {
  let maior = index;
  let index_esquerdo = 2 * index + 1;
  let index_direito = 2 * index + 2;

  if (index_esquerdo < tamanho_pilha && this[index_esquerdo] > this[maior]) {
    maior = index_esquerdo;
  }

  if (index_direito < tamanho_pilha && this[index_direito] > this[maior]) {
    maior = index_direito;
  }

  if (maior !== index) {
    let temp = this[maior];
    this[maior] = this[index];
    this[index] = temp;

    this.heapify(maior, tamanho_pilha);
  }
};
  
/**
 * O heapsort utiliza uma estrutura de dados chamada heap,
 * para ordenar os elementos à medida que os insere na estrutura.
 * Assim, ao final das inserções, os elementos podem ser sucessivamente
 * removidos da raiz da heap, na ordem desejada,
 * lembrando-se sempre de manter a propriedade de max-heap.
 * 
 * A heap pode ser representada como uma árvore (uma árvore binária
 * com propriedades especiais) ou como um vetor.
 * Para uma ordenação decrescente, deve ser construída uma heap mínima
 * (o menor elemento fica na raiz). Para uma ordenação crescente,
 * deve ser construído uma heap máxima (o maior elemento fica na raiz).
 * 
 * @param {Array} items 
 */
function heapSorting(items) {
  let length = items.length;
  
  for (let i = Math.floor(length / 2) - 1; i > -1; i--) {
    items.heapify(i, length);
  }

  for (let j = length -1; j > 0; j--) {
    let tmp = items[0];
    items[0] = items[j];
    items[j] = tmp;
    items.heapify(0, j);
  }

  return items;
}

/**
 * Chamada do HeapSort
 */
function heapSort() {
  ARRAY_DESORDENADO = transformaArray(document.getElementById('hide_array').value);
  let vetor_numeros = ARRAY_DESORDENADO;

  let inicio = performance.now();
  heapSorting(vetor_numeros);
  let fim = performance.now();

  ARRAY_ORDENADO = vetor_numeros;

  HEAPSORT = parseFloat(fim - inicio);
  HEAPSORT_ARRAY.push(HEAPSORT);
}