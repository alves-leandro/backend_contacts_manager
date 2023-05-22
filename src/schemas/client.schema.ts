import { z } from "zod"

const clientSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    phone: z.string()
})

const clientSchemaRequest = clientSchema.omit({
    id: true
})

const clientSchemaUpdate = clientSchema.omit({
    id: true
}).partial()

const clientSchemaResponse = clientSchema.omit({
    password: true
})

const clientsManySchema = z.array(clientSchema)

export { clientSchema, clientSchemaRequest, clientSchemaUpdate, clientSchemaResponse, clientsManySchema }