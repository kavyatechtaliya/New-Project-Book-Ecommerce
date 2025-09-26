import { Table, Column, DataType, BeforeCreate, Model } from 'sequelize-typescript';
import * as bcrypt from 'bcryptjs';

@Table({ tableName: 'user', timestamps: true })
export class User extends Model<User> {

  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  declare email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare password: string;

  @Column({ type: DataType.STRING, allowNull: false, defaultValue: 'user' })
  declare role: string;

  async validatePassword(password: string) {
    return bcrypt.compare(password, this.password);
  }

  @BeforeCreate
  static async hashPassword(instance: User) {
    if (!instance.password) {
      throw new Error('Password must be provided');
    }
    instance.password = await bcrypt.hash(instance.password, 10);
  }
}
