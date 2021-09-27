let exits = [
  {
    id: '1',
    name: 'Água',
    description: 'Pagamento de água',
    value: 150.62,
  },
  {
    id: '2',
    name: 'Luz',
    description: 'Pagamento de luz',
    value: 350,
  },
  {
    id: '3',
    name: 'Internet',
    description: 'Pagamento de internet',
    value: 99.99,
  },
];

class ExitsRepository {
  findAll(order = 'asc') {
    return new Promise((resolve) => {
      const sortedExits = exits.sort((a, b) => {
        if (order.toLocaleLowerCase() === 'desc') {
          return a.name < b.name ? 1 : -1;
        }

        return a.name > b.name ? 1 : -1;
      });

      resolve(sortedExits);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      const exit = exits.find((exitObj) => exitObj.id === id);

      resolve(exit);
    });
  }

  create({ name, description, value }) {
    return new Promise((resolve) => {
      const lastExitIndex = exits.length;

      const newExit = {
        id: String(+lastExitIndex + 1),
        name,
        description,
        value: Number(value),
      };

      exits.push(newExit);

      resolve(newExit);
    });
  }

  update(id, { name, description, value }) {
    return new Promise((resolve) => {
      let exitUpdated = {};

      exits = exits.map((exit) => {
        if (exit.id === String(id)) {
          const newValues = {
            ...exit,
            name,
            description,
            value,
          };

          exitUpdated = newValues;

          return newValues;
        }

        return exit;
      });

      resolve(exitUpdated);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      exits = exits.filter((exit) => exit.id !== id);

      resolve();
    });
  }
}

module.exports = new ExitsRepository();
