import { Repository } from "typeorm";
import AppError from "../../errors/AppErrors";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entitie";
import { TContactsResponse } from "../../interfaces/contact.interfaces";
import { Contact } from "../../entities/contact.entitie";
import { contactsSchemaResponse } from "../../schemas/contact.schema";


const listContactsService = async (clientId: string): Promise<TContactsResponse> => {

    const contactsRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const clientsRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const client: Client | null = await clientsRepository.findOneBy({
        id: clientId
    })

    if (!client) {
        throw new AppError("Client not found", 404)
    }


    const contacts: Contact[] = await contactsRepository.find({
        where: {
          client: client
        }
    })

    return contactsSchemaResponse.parse(contacts)

}

export { listContactsService }