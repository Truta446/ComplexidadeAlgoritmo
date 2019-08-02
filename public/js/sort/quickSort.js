/*
* Quick sort is a comparison sorting algorithm that uses a divide and conquer strategy.
* For more information see here: https://en.wikipedia.org/wiki/Quicksort
*/
function quickSorting(items) {

    var length = items.length;
  
    if (length <= 1) {
      return items;
    }
    var PIVOT = items[0];
    var GREATER = [];
    var LESSER = [];
  
    for (var i = 1; i < length; i++) {
      if (items[i] > PIVOT) {
        GREATER.push(items[i]);
      } else {
        LESSER.push(items[i]);
      }
    }
  
    var sorted = quickSorting(LESSER);
    sorted.push(PIVOT);
    sorted = sorted.concat(quickSorting(GREATER));
    
    return sorted;
  }

function quickSort(array_numeros) {
    INICIO = performance.now();
    const array_ordenado = quickSorting(array_numeros);
    FIM = performance.now();

    QUICKSORT = FIM - INICIO;
}

/* var items = [5,3,7,6,2,9];
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}
​
function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1); */