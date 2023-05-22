import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Contact } from "./contact.entitie"

@Entity("client")
class Client {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({unique: true})
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  registrationDate: Date;

  @OneToMany(() => Contact, contact => contact.client)
    contact: Contact[]
}

export {Client}