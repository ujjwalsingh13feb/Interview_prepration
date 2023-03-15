function rotateArrayAntiClockwise(arr, k) {
    // console.log(k)
    const n = arr.length;
    // k %= n; // If k is greater than n, take the remainder to prevent unnecessary iterations
    // console.log(k)
    for (let i = 0; i < k; i++) {
      const firstElement = arr[0];
      
      for (let j = 0; j < n-1; j++) {
        arr[j] = arr[j+1];
      }
      arr[n-1] = firstElement;
    }
    return arr;
  }
  
  // Example usage
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const k = 3;
  const rotatedArr = rotateArrayAntiClockwise(arr, k);
  console.log(rotatedArr);