const entries = [
  {
    id: '1',
    name: 'Salário',
    description: 'Salário Panco',
    value: 1500.51,
  },
  {
    id: '2',
    name: 'Site',
    description: 'Site desenvolvido para o Thiago',
    value: 350,
  },
  {
    id: '3',
    name: 'Sistema',
    description: 'Site desenvolvido para o Luiz',
    value: 5500,
  },
];

class EntriesRepository {
  findAll(order = 'asc') {
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

  findById(id) {
    return new Promise((resolve) => {
      const entrie = entries.find((entrieObj) => entrieObj.id === id);

      resolve(entrie);
    });
  }

  create({ name, description, value }) {
    return new Promise((resolve) => {
      const lastEntrieIndex = entries.length;

      const newEntrie = {
        id: String(+lastEntrieIndex + 1),
        name,
        description,
        value: Number(value),
      };

      entries.push(newEntrie);

      resolve(newEntrie);
    });
  }
}

module.exports = new EntriesRepository();
