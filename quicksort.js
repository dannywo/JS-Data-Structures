const quicksort = (arr) => {
  qs(arr, 0, arr.length - 1)
  return arr;
}

const qs = (arr, left, right) => {
  if (left >= right) return

  p = partition(arr, left, right);

  qs(arr, left, p - 1)
  qs(arr, p + 1, right)
}

const partition = (arr, left, right) => {
  pivot = arr[right];

  let i = left - 1;
  for (let index = left; index < right; index++) {
    if (arr[index] < pivot) {
      i++;

      //swap
      let ph = arr[i];
      arr[i] = arr[index];
      arr[index] = ph;
    }
  }

  //swap
  let ph = arr[i + 1];
  arr[i + 1] = arr[right];
  arr[right] = ph;
  return i + 1;
}



a1 = [3, 2, 1]
a2 = [1, 2, 3]
a3 = []
a4 = [3, 1, -1, 0, 2, 5]
a5 = [2, 2, 1, 1, 0, 0, 4, 4, 2, 2, 2]
a6 = [0]
a7 = [3, -2, -1, 0, 2, 4, 1, 3, -2, -1, 0, 2, 4, 1, 3, -2, -1, 0, 2, 4, 1, 3, -2, -1, 0, 2, 4, 1]
a8 = [1, 2, 3, 4, 5, 6, 7]
a9 = [2, 2, 2, 2, 2, 2, 2]

console.log(quicksort(a1))
console.log(quicksort(a2))
console.log(quicksort(a3))
console.log(quicksort(a4))
console.log(quicksort(a5))
console.log(quicksort(a6))
console.log(quicksort(a7))
console.log(quicksort(a8))
console.log(quicksort(a9))