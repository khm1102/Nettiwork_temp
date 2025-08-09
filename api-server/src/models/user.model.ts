import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column({ length: 32, unique: true })
  email: string = "";

  @Column({ length: 32 })
  name: string = "";
}
