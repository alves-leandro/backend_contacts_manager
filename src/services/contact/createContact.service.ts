import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppErrors";
import { Client } from "../../entities/client.entitie";
import {
  TContactRequest,
  TContactResponse,
} from "../../interfaces/contact.interfaces";
import { Contact } from "../../entities/contact.entitie";
import { contactSchema } from "../../schemas/contact.schema";

const createContactService = async (
  data: TContactRequest,
  clientId: string
): Promise<TContactResponse> => {
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const clientsRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const client: Client | null = await clientsRepository.findOneBy({
    id: clientId,
  });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  const newDate = new Date();

  const contact: Contact = contactsRepository.create({
    ...data,
    client,
    registrationDate: newDate,
  });

  await contactsRepository.save(contact);

  return contactSchema.parse(contact);
};

export { createContactService };
