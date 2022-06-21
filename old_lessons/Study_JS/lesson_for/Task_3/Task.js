let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++){
    if(i % j == 0) continue nextPrime;
  }

  console.log(i);
}

// i=2, skip 2
// i=3, 2<3, 3%2 = 1 3
// i=4, 2<4,