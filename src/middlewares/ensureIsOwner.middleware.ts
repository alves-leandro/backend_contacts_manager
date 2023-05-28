import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entitie";

const UUID_REGEX = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
const ensureIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactsRepositoy = AppDataSource.getRepository(Contact);

  const contactId: string = req.params.id;
  const clientId: string = res.locals.clientId;
    
  if (!UUID_REGEX.test(contactId)) {
    return res.status(404).json({
      message: "It is not a valid UUID",
    });
  }

  const contact = await contactsRepositoy.findOne({
    where: {
      id: contactId,
    },
    relations: {
      client: true,
    },
  });

  if (!contact) {
    return res.status(404).json({
      message: "Contact not found",
    });
  }

  if (contact.client.id !== clientId) {
    return res.status(403).json({
      message: "You don`t have permissions",
    });
  }

  return next();
};

export { ensureIsOwnerMiddleware };
