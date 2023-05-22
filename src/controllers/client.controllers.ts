import { Request, Response } from "express";
import { createClientService } from "../services/client/createClient.service";
import { TClientRequest } from "../interfaces/client.interfaces";
import listClientService from "../services/client/listClient.service";
import updateClientService from "../services/client/updateClient.service";
import deleteClientService from "../services/client/deleteClient.service";

// Controller para listar todos os clientes
async function listClientController(req: Request, res: Response) {
    const client = await listClientService();
    return res.status(200).json(client);
}

// Controller para criar um novo cliente
async function createClientController(req: Request, res: Response) {
    const { email, name, password, phone }: TClientRequest = req.body;

    const newClient = await createClientService({ email, name, password, phone });
  
    return res.status(201).json(newClient);
}

// Controller para atualizar um cliente existente
async function updateClientController(req: Request, res: Response) {
    const clientData = req.body;
    const idClient = req.params.id;
  
    const updatedUser = await updateClientService(clientData, idClient);
  
    return res.json(updatedUser);
}

// Controller para excluir um cliente
async function deleteClientController(req: Request, res: Response) {
    await deleteClientService(req.params.id);

    return res.status(204).send();
}

export { listClientController, createClientController, updateClientController, deleteClientController };
