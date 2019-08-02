/*Bubble Sort is a algorithm to sort an array. It
* compares adjacent element and swaps thier position
* The big O on bubble sort in worst and best case is O(N^2). 
 * Not efficient.
*/
function bubbleSorting(items) {
    let length = items.length;
    for (let i = (length - 1); i > 0; i--) {
        //Number of passes
        for (let j = (length - i); j > 0; j--) {
            //Compare the adjacent positions
            if (items[j] < items[j - 1]) {
                //Swap the numbers
                let tmp = items[j];
                items[j] = items[j - 1];
                items[j - 1] = tmp;
            }
        }
    }
}

/**
 * Implementation of bubbleSort
 */
function bubbleSort(array_numeros) {
    INICIO = performance.now();
    bubbleSorting(array_numeros);
    FIM = performance.now();

    BUBBLESORT = FIM - INICIO;
}