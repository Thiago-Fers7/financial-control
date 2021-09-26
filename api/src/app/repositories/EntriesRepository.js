const entries = [
  {
    id: 1,
    name: 'Salário',
    description: 'Salário Panco',
    value: 1500.51,
  },
  {
    id: 1,
    name: 'Site',
    description: 'Site desenvolvido para o Thiago',
    value: 1500.51,
  },
  {
    id: 1,
    name: 'Sistema',
    description: 'Site desenvolvido para o Luiz',
    value: 1500.51,
  },
];

class EntriesRepository {
  index(order = 'asc') {
    return new Promise((resolve) => {
      const sortedEntries = entries.sort((a, b) => {
        if (order.toLocaleLowerCase() === 'desc') {
          return a.name < b.name ? 1 : -1;
        }

        return a.name > b.name ? 1 : -1;
      });

      resolve(sortedEntries);
    });
  }
}

module.exports = new EntriesRepository();
