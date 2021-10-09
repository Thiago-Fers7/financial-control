function simpleDate(date = new Date()) {
  return new Date(date).toLocaleDateString();
}

function simpleDateDefaultFormat(date = new Date()) {
  return simpleDate(date).split('/').reverse().join('-');
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

function getCurrentDateForUsageInQueryParamsAPI() {
  const date = new Date().toLocaleDateString();

  const [day, month, year] = date.split('/');

  return `${year}-${month}-${String(day).padStart(3, 0)}`;
}

export {
  simpleDate,
  getNext30Days,
  corvertDate,
  get30DaysAgo,
  getBigDate,
  getCurrentDateForUsageInQueryParamsAPI,
  simpleDateDefaultFormat,
};
