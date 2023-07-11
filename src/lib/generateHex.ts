function generateHex(number: number): string {
  const hexChars = "0123456789ABCDEF";
  let hex = "";

  while (number > 0) {
    const randomValue = Math.floor(Math.random() * hexChars.length);
    hex += hexChars[randomValue];
    number--;
  }

  return hex;
}

export default generateHex;
