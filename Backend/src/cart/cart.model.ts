import { Table, Column, DataType, Model, Index} from 'sequelize-typescript';

@Table({
  tableName: 'cart',
  timestamps: true,
  indexes: [
    {
      name: 'cart_user_book_unique',
      fields: ['userId', 'bookId'], // composite unique key
    },
  ],
})
export class Cart extends Model{

 @Column({ type: DataType.INTEGER, allowNull: false})
  declare userId: number;

  @Column({ type: DataType.INTEGER, allowNull: false})
  declare bookId: number;

  @Column({ type: DataType.INTEGER, allowNull: false, defaultValue:1})
  declare quantity: number;
}
