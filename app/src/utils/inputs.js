function formatSimpleTextInput(text, maxlength) {
  const MAXLENGTH = maxlength;

  let newText = text;

  // Max length control --- remove final characters
  while (newText.length > MAXLENGTH) {
    newText = newText.substr(0, newText.length - 1);
  }

  // no double spaces
  newText = newText.replace(/( )+/g, ' ');

  return newText;
}

function formatToBRLCurrency(value, format = '##.###.###,##') {
  const newValue = value.replace(/[^\d]+/gi, '').split('').reverse().join('');
  let result = '';
  const mask = format.split('').reverse().join('');
  for (let x = 0, y = 0; x < mask.length && y < newValue.length;) {
    if (mask.charAt(x) !== '#') {
      result += mask.charAt(x);
      x += 1;
    } else {
      result += newValue.charAt(y);
      y += 1;
      x += 1;
    }
  }
  return result.split('').reverse().join('');
}

export { formatSimpleTextInput, formatToBRLCurrency };
