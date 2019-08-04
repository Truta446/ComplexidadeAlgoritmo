var INSERTIONSORT = 0;
var BUBBLESORT = 0;
var QUICKSORT = 0;
var MERGESORT = 0;
var SELECTIONSORT = 0;
var HEAPSORT = 0;
const ARRAY_DESORDENADO = geraArray();
var ARRAY_ORDENADO = new Array();

function inicializaOrdenacao() {
    Object.freeze(ARRAY_DESORDENADO);
    bubbleSort();
    insertionSort();
    heapSort();
    //quickSort();
    selectionSort();
    mergeSort();
    geraGrafico();
}

function geraArray() {
    let array_numeros = new Array();

    if (document.getElementById('numeros').value === "") {
        for(let i = 0; i < 50; i++) {
            array_numeros.push(parseInt(Math.floor(Math.random() * 1000)));
        }
    } else {
        let vetor_numeros = document.getElementById('numeros').value;
        array_numeros = vetor_numeros.split(",");
        array_numeros = array_numeros.map(function(e){return parseInt(e)});
    }

    return array_numeros;
}

function mostraArray(tipo_ordenacao) {
    document.getElementById('array').innerHTML = `
        <blockquote>${tipo_ordenacao}<br />Array de números naturais, incluindo o 0, gerado aleatóriamente.</blockquote>
        <div class="row">
            <div class="input-field col s12">
                <textarea readonly id="array_desordenado" type="text">${ARRAY_DESORDENADO}</textarea>
                <label for="array_desordenado">Array Desordenado</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <textarea readonly id="array_desordenado" type="text">${ARRAY_ORDENADO}</textarea>
                <label for="array_desordenado">Array Ordenado</label>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const floating = document.querySelectorAll('.fixed-action-btn');
    const tooltip = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltip);
    M.FloatingActionButton.init(floating);
});