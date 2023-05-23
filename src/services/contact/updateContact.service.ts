import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppErrors";
import { TContactResponse, TContactUpdateRequest } from "../../interfaces/contact.interfaces";
import { Contact } from "../../entities/contact.entitie";
import { contactSchema } from "../../schemas/contact.schema";


const updateContactService = async (data: TContactUpdateRequest, contactId: string): Promise<TContactResponse> => {
    const contactsRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const oldContact: Contact | null = await contactsRepository.findOneBy({ id: contactId })

    if (!oldContact) {
        throw new AppError("Contact not found", 404)
    }

    const secondData: any = null

    const newContactData = contactsRepository.create({
        ...oldContact,
        ...data,
        secondEmail: data.secondEmail ? data.secondEmail : oldContact.secondEmail,
        secondPhone: data.secondPhone ? data.secondPhone : oldContact.secondPhone,
    })

    await contactsRepository.save(newContactData)


    return contactSchema.parse(newContactData)

}

export { updateContactService }