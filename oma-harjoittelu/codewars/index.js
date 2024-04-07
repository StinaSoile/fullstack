function findOdd(A) {
  //happy coding!
  let obj = {};
  for (const a of A) {
    // console.log(a);
    if (obj[a] === undefined) {
      obj[a] = 1;
    } else obj[a] = ++obj[a];
  }
  //   console.log(obj);
  for (const a in obj) {
    if (obj[a] % 2 !== 0) return parseInt(a);
  }
  return 0;
}
