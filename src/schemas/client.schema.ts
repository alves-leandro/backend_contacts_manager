import { z } from "zod"

const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

const clientSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    phone: z.string().regex(phoneRegex)
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