import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({ tableName: 'books', timestamps: true })
export class Books extends Model{

  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  declare title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare description: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare author: string;

  @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: '0' })
  declare stock: number;

  @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: '0' })
  declare price: number;

  @Column({ type: DataType.STRING, allowNull: false})
  declare coverImage : string;
}
