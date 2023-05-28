import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entitie";

const isValidUUID = (uuid: string): boolean => {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

const ensureIsOwnerMiddlewareContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactsRepositoy = AppDataSource.getRepository(Contact);

  const contactId: string = req.params.id;
  const clientId: string = res.locals.clientId;

  if (!isValidUUID(contactId)) {
    return res.status(400).json({
      message: "Invalid contact ID",
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

export { ensureIsOwnerMiddlewareContact };
