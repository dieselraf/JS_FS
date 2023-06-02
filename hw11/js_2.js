async function calculateFactorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
    // добавляем задержку, чтобы не блокировать поток
    await new Promise(resolve => setTimeout(resolve, 0));
  }
  return result;
}


async function main() {
  const result = await calculateFactorial(10000);
  console.log(result);
}
 
main();