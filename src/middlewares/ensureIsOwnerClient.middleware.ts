import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Client } from "../entities/client.entitie";

// const isValidUUID = (uuid: string): boolean => {
//   const uuidRegex =
//     /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
//   return uuidRegex.test(uuid);
// };

const ensureIsOwnerMiddlewareClient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const clientsRepository = AppDataSource.getRepository(Client);

  const clientId: string = req.params.id;
  const loggedInClientId: string = res.locals.clientId;

  // if (!isValidUUID(clientId)) {
  //   return res.status(400).json({
  //     message: "Invalid client ID",
  //   });
  // }

  const client = await clientsRepository.findOne({
    where: {
      id: clientId
    }
  });

  if (!client) {
    return res.status(404).json({
      message: "Client not found",
    });
  }

  if (client.id !== loggedInClientId) {
    return res.status(403).json({
      message: "You don`t have permissions",
    });
  }

  return next();
};

export { ensureIsOwnerMiddlewareClient };
