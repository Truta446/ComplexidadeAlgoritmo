function inicializaOrdenacao() {
    if (document.getElementById('numeros').value === "") {
        for(let i = 0; i < 1000; i++) {
            ARRAY_NUMEROS += `${Math.floor(Math.random() * 1000)},`;
        }
    } else {
        ARRAY_NUMEROS = document.getElementById('numeros').value;
    }

    let array_numeros = new Array();
    array_numeros = ARRAY_NUMEROS.split(",");
    array_numeros = array_numeros.map(function(e){return parseInt(e, 10)});
    ARRAY_NUMEROS = array_numeros;

    bubbleSort(ARRAY_NUMEROS);
    insertionSort(ARRAY_NUMEROS);
    heapSort(ARRAY_NUMEROS);
    quickSort(ARRAY_NUMEROS);
    selectionSort(ARRAY_NUMEROS);
    mergeSort(ARRAY_NUMEROS);
    geraGrafico();
}