import { AppDataSource } from "../../data-source";
import { hash } from "bcryptjs";
import { Client } from "../../entities/client.entitie";
import { clientSchemaResponse } from "../../schemas/client.schema";
import AppError from "../../errors/AppErrors";
import {
  TClientRequest,
  TClientResponse,
} from "../../interfaces/client.interfaces";

const createClientService = async (
  data: TClientRequest
): Promise<TClientResponse> => {
  const { email, name, password, phone } = data;
  const clientRepository = AppDataSource.getRepository(Client);
  const findClient = await clientRepository.findOne({
    where: {
      email,
    },
  });

  if (findClient) {
    throw new AppError("Client already exists", 409);
  }

  const hashedPassword = await hash(password, 10);

  const newDate = new Date();

  const client = clientRepository.create({
    name,
    email,
    password: hashedPassword,
    phone,
    registrationDate: newDate,
  });

  await clientRepository.save(client);

  return clientSchemaResponse.parse(client);
};

export { createClientService };
