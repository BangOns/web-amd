export function ShuffleIdUser(): string {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  let result: string = "";
  for (let i = 0; i < 6; i++) {
    const isLetter = i % 2 === 0;
    const charSet = isLetter ? letters : numbers;
    result += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return result;
}
