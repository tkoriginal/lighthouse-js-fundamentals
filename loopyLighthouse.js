// function loopyLighthouse ([start, end], [firstMultiple, secondMultiple], [firstOutput, secondOutput]){
//     for (var i = start; i <= end; i++ ){
//         if (i % firstMultiple === 0 && i % secondMultiple === 0) {
//             console.log(`${firstOutput}${secondOutput}`);
//         } else if (i % firstMultiple === 0) {
//             console.log(firstOutput);
//         } else if (i % secondMultiple === 0) {
//             console.log(secondOutput)
//         } else {
//             console.log(i)
//         }
//     }
// }

// loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

function concat (arr1, arr2) {
  if (arr1.length === 0 && arr2.length ===0) {
      return arr1;
  } else if (arr1.length === 0) {
      return arr2;
  } else if (arr2.length === 0) {
      return arr1;
  } else {
      for (var i = 0; i < arr2.length; i++) {
          arr1.push(arr2[i])
      }
      return arr1
  }
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);