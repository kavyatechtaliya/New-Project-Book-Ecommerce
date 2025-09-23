module.exports = {
  up: async (queryInterface, Sequelize) => {
    const table = await queryInterface.describeTable('books');

    if (!table.price) {
      await queryInterface.addColumn('books', 'price', {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      });
    }

    if (!table.stock) {
      await queryInterface.addColumn('books', 'stock', {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('books', 'price');
    await queryInterface.removeColumn('books', 'stock');
  },
};

