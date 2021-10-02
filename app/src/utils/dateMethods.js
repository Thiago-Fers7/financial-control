function simpleDate(date) {
  return new Date(date).toLocaleDateString();
}

function corvertDate(date) {
  return String(date).split('/').reverse().join('-');
}

function getNext30Days() {
  const date = new Date();

  date.setDate(date.getDate() + 30);

  const dateFormated = corvertDate(date.toLocaleDateString());

  return dateFormated;
}

function get30DaysAgo() {
  const date = new Date();

  date.setDate(date.getDate() - 30);

  const dateFormated = corvertDate(date.toLocaleDateString());

  return dateFormated;
}

function getBigDate(data1) {
  if (new Date(data1) > new Date()) return true;
  return false;
}

export {
  simpleDate, getNext30Days, corvertDate, get30DaysAgo, getBigDate,
};
