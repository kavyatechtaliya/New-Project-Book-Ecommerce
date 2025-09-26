'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Remove old unique constraint
    await queryInterface.removeConstraint('cart', 'cart_userId_key');

    // Add new composite unique constraint
    await queryInterface.addConstraint('cart', {
      fields: ['userId', 'bookId'],
      type: 'unique',
      name: 'cart_user_book_unique'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('cart', 'cart_user_book_unique');
    await queryInterface.addConstraint('cart', {
      fields: ['userId'],
      type: 'unique',
      name: 'cart_userId_key'
    });
  }
};
