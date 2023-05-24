import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Client } from "./client.entitie";

@Entity("contact")
class Contact {
    
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  secondEmail: string;

  @Column()
  phone: string;

  @Column({ nullable: true })
  secondPhone: string;

  @Column()
  registrationDate: Date;

  @ManyToOne(() => Client, client => client.contacts, { onDelete:"CASCADE" })
  client: Client;
}

export {Contact}