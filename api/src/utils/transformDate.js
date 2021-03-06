function minDate(dateValue) {
  if (!dateValue) {
    const date = new Date();

    const day = String(date.getDate()).padStart(2, 0);
    const month = String(+date.getMonth() + 1).padStart(2, 0);
    const year = String(date.getFullYear());

    return `${String(year)}-${String(month)}-${String(day)}`;
  }

  const [y, m, d] = dateValue.split('-');

  const date = new Date(+y, +m, +d);

  const day = String(date.getDate()).padStart(2, 0);
  const month = String(+date.getMonth()).padStart(2, 0);
  const year = String(date.getFullYear());

  return `${String(year)}-${String(month)}-${String(day)}`;
}

function getNext30Days() {
  const date = new Date();

  date.setDate(date.getDate() + 30);

  return date.toLocaleDateString().split('/').reverse().join('-');
}

module.exports = { minDate, getNext30Days };
