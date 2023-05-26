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

  const existingContact = await contactsRepository.findOne({
    where: { email: data.email, client },
  });

  if (existingContact) {
    throw new AppError("Contact with the same email already exists", 400);
  }

  const newDate = new Date();

  const secondData: any = null;

  const contact: Contact = contactsRepository.create({
    ...data,
    client,
    secondEmail: data.secondEmail ? data.secondEmail : secondData,
    secondPhone: data.secondPhone ? data.secondPhone : secondData,
    githubUser: data.githubUser ? data.githubUser : secondData,
    linkedinUser: data.linkedinUser ? data.linkedinUser : secondData,
    portifolioUrl: data.portifolioUrl ? data.portifolioUrl : secondData,
    registrationDate: newDate,
  });

  await contactsRepository.save(contact);

  return contactSchema.parse(contact);
};

export { createContactService };
