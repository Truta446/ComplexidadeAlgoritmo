function inicializaOrdenacao() {
    for(let i = 0; i < 5; i++) {
        geraArray();
        bubbleSort();
        insertionSort();
        heapSort();
        quickSort();
        selectionSort();
        mergeSort();
    }
    
    geraTabela();
    geraGraficoOrdenacao();
}

function geraTabela() {
    document.getElementById('ordenar').disabled = true;

    INSERTIONSORT_MEDIA = ((INSERTIONSORT_ARRAY[0]+INSERTIONSORT_ARRAY[1]+INSERTIONSORT_ARRAY[2]+INSERTIONSORT_ARRAY[3]+INSERTIONSORT_ARRAY[4])/5);
    BUBBLESORT_MEDIA = ((BUBBLESORT_ARRAY[0]+BUBBLESORT_ARRAY[1]+BUBBLESORT_ARRAY[2]+BUBBLESORT_ARRAY[3]+BUBBLESORT_ARRAY[4])/5);
    QUICKSORT_MEDIA = ((QUICKSORT_ARRAY[0]+QUICKSORT_ARRAY[1]+QUICKSORT_ARRAY[2]+QUICKSORT_ARRAY[3]+QUICKSORT_ARRAY[4])/5);
    MERGESORT_MEDIA = ((MERGESORT_ARRAY[0]+MERGESORT_ARRAY[1]+MERGESORT_ARRAY[2]+MERGESORT_ARRAY[3]+MERGESORT_ARRAY[4])/5);
    SELECTIONSORT_MEDIA = ((SELECTIONSORT_ARRAY[0]+SELECTIONSORT_ARRAY[1]+SELECTIONSORT_ARRAY[2]+SELECTIONSORT_ARRAY[3]+SELECTIONSORT_ARRAY[4])/5);
    HEAPSORT_MEDIA = ((HEAPSORT_ARRAY[0]+HEAPSORT_ARRAY[1]+HEAPSORT_ARRAY[2]+HEAPSORT_ARRAY[3]+HEAPSORT_ARRAY[4])/5);

    document.getElementById('tabelaGrafico').innerHTML = `
        <table class="highlight centered responsive-table">
            <thead>
                <tr>
                    <th>Tipo de Ordenação</th>
                    <th>Pior Caso</th>
                    <th>Caso Médio</th>
                    <th>Melhor Caso</th>
                    <th>1º Tempo</th>
                    <th>2º Tempo</th>
                    <th>3º Tempo</th>
                    <th>4º Tempo</th>
                    <th>5º Tempo</th>
                    <th>Média</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>QUICKSORT</td>
                    <td>O(N²)</td>
                    <td>O(n lg n)</td>
                    <td>O(n lg n)</td>
                    <td>${QUICKSORT_ARRAY[0]}</td>
                    <td>${QUICKSORT_ARRAY[1]}</td>
                    <td>${QUICKSORT_ARRAY[2]}</td>
                    <td>${QUICKSORT_ARRAY[3]}</td>
                    <td>${QUICKSORT_ARRAY[4]}</td>
                    <td>${QUICKSORT_MEDIA}</td>
                </tr>
                <tr>
                    <td>MERGESORT</td>
                    <td>O(n lg n)</td>
                    <td>O(n lg n)</td>
                    <td>O(n lg n)</td>
                    <td>${MERGESORT_ARRAY[0]}</td>
                    <td>${MERGESORT_ARRAY[1]}</td>
                    <td>${MERGESORT_ARRAY[2]}</td>
                    <td>${MERGESORT_ARRAY[3]}</td>
                    <td>${MERGESORT_ARRAY[4]}</td>
                    <td>${MERGESORT_MEDIA}</td>
                </tr>
                <tr>
                    <td>INSERTIONSORT</td>
                    <td>O(n²)</td>
                    <td>O(n²)</td>
                    <td>O(n)</td>
                    <td>${INSERTIONSORT_ARRAY[0]}</td>
                    <td>${INSERTIONSORT_ARRAY[1]}</td>
                    <td>${INSERTIONSORT_ARRAY[2]}</td>
                    <td>${INSERTIONSORT_ARRAY[3]}</td>
                    <td>${INSERTIONSORT_ARRAY[4]}</td>
                    <td>${INSERTIONSORT_MEDIA}</td>
                </tr>
                <tr>
                    <td>SELECTIONSORT</td>
                    <td>O(n²)</td>
                    <td>O(n²)</td>
                    <td>O(n²)</td>
                    <td>${SELECTIONSORT_ARRAY[0]}</td>
                    <td>${SELECTIONSORT_ARRAY[1]}</td>
                    <td>${SELECTIONSORT_ARRAY[2]}</td>
                    <td>${SELECTIONSORT_ARRAY[3]}</td>
                    <td>${SELECTIONSORT_ARRAY[4]}</td>
                    <td>${SELECTIONSORT_MEDIA}</td>
                </tr>
                <tr>
                    <td>HEAPSORT</td>
                    <td>O(n lg n)</td>
                    <td>O(n lg n)</td>
                    <td>O(n lg n)</td>
                    <td>${HEAPSORT_ARRAY[0]}</td>
                    <td>${HEAPSORT_ARRAY[1]}</td>
                    <td>${HEAPSORT_ARRAY[2]}</td>
                    <td>${HEAPSORT_ARRAY[3]}</td>
                    <td>${HEAPSORT_ARRAY[4]}</td>
                    <td>${HEAPSORT_MEDIA}</td>
                </tr>
                <tr>
                    <td>BUBBLESORT</td>
                    <td>O(n²)</td>
                    <td>O(n²)</td>
                    <td>O(n)</td>
                    <td>${BUBBLESORT_ARRAY[0]}</td>
                    <td>${BUBBLESORT_ARRAY[1]}</td>
                    <td>${BUBBLESORT_ARRAY[2]}</td>
                    <td>${BUBBLESORT_ARRAY[3]}</td>
                    <td>${BUBBLESORT_ARRAY[4]}</td>
                    <td>${BUBBLESORT_MEDIA}</td>
                </tr>
            </tbody>
        </table>
    `;
}

function geraArray() {
    let array_numeros = new Array();

    if (document.getElementById("switch_array").checked == true) {
        let tamanho_array = document.getElementById("select_tamanho_array").value;

        for(let i = 0; i < tamanho_array; i++) {
            array_numeros.push(parseInt(Math.floor(Math.random() * (tamanho_array * 10))));
        }
    } else {
        array_numeros = document.getElementById('numeros').value;
        array_numeros = transformaArray(array_numeros);
    }

    document.getElementById('hide_array').value = array_numeros;
}

function transformaArray(array_numeros) {
    array_numeros = array_numeros.split(",");
    array_numeros = array_numeros.map(function(e){return parseInt(e)});

    return array_numeros;
}

function mostraArray(tipo_ordenacao) {
    document.getElementById('array').innerHTML = `
        <h5>${tipo_ordenacao}<br />Array de números naturais, incluindo o 0, gerado aleatóriamente.</h5>
        <div class="row">
            <h6>Array Desordenado</h6>
            <div class="input-field col s12">
                <textarea disabled id="array_desordenado" type="text">${ARRAY_DESORDENADO}</textarea>
            </div>
        </div>
        <div class="row">
            <h6>Array Ordenado</h6>
            <div class="input-field col s12">
                <textarea disabled id="array_desordenado" type="text">${ARRAY_ORDENADO}</textarea>
            </div>
        </div>
    `;
}

function switchFunction() {
    if (document.getElementById("switch_array").checked == true) {
        document.getElementById("select_array").innerHTML = `
            <div class="input-field col s12">
                <select id="select_tamanho_array">
                    <option value="" disabled selected>Escolha uma opção</option>
                    <option value="10">10</option>
                    <option value="100">100</option>
                    <option value="1000">1000</option>
                    <option value="10000">10000</option>
                    <option value="100000">100000</option>
                </select>
                <label>Números para serem ordenados</label>
            </div>
        `;

        const elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    } else {
        document.getElementById("select_array").innerHTML = `
            <div class="input-field col s12">
                <i class="material-icons prefix">mode_edit</i>
                <textarea id="numeros" class="materialize-textarea"></textarea>
                <label for="numeros">Insira a cadeia de números a serem ordenados.</label>
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const floating = document.querySelectorAll('.fixed-action-btn');
    const tooltip = document.querySelectorAll('.tooltipped');
    const elems = document.querySelectorAll('select');
    M.Tooltip.init(tooltip);
    M.FloatingActionButton.init(floating);
    M.FormSelect.init(elems);
    $(".dropdown-trigger").dropdown();
});