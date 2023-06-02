function* fibonacci() {

  let a = 0, b = 1;

  while (true) {

    yield a;

    [a, b] = [b, a + b];

  }

}
 

 

const gen = fibonacci();

console.log(gen.next().value); // 0

console.log(gen.next().value); // 1

console.log(gen.next().value); // 1

console.log(gen.next().value); // 2

console.log(gen.next().value); // 3

console.log(gen.next().value); // 5