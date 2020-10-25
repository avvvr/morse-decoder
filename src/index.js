const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let wordsArr = expr.split('**********');
  for (let i = 0; i < wordsArr.length; i++) {
    let lettersArr = wordsArr[i].match(/.{10}/g);

    for (let j = 0; j < lettersArr.length; j++) {
      let symbArr = lettersArr[j].match(/.{2}/g);
      for (let k = 0; k < symbArr.length; k++) {
        if (symbArr[k] === '00') symbArr[k] = undefined;
        else if (symbArr[k] === '10') symbArr[k] = '.';
        else if (symbArr[k] === '11') symbArr[k] = '-';
      }
      for (let k = 0; k < symbArr.length; k++) {
        if (symbArr[k] === undefined) symbArr.splice(k, 1);
      }
      lettersArr[j] = MORSE_TABLE[symbArr.join('')];
    }

    wordsArr[i] = lettersArr.join('');
  }

  return wordsArr.join(' ');
}

module.exports = {
  decode
}