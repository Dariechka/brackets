module.exports = function check(str, bracketsConfig) {
  const obj = {};
  for (let bracket of bracketsConfig){
    obj[bracket[0]] = bracket[1];
  }

  const arr = [];
  for (let char of str) {
    const isOpening = Object.keys(obj).includes(char);
    const isClosing = Object.values(obj).includes(char);
    if (isOpening && isClosing) {
        const opening = arr.at(-1);
        if (opening == char) {
            arr.pop();
        } else {
            arr.push(char);
        }
    } else if (isOpening) {
        arr.push(char);
    } else if (isClosing) {
        const opening = arr.pop();
        if (obj[opening] !== char) return false;
    } else {
        return false;
    }
  }
  return arr.length == 0;
}