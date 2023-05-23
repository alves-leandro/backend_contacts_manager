import "reflect-metadata"; // Essa linha de código importa o pacote "reflect-metadata". Esse pacote é usado pelo TypeORM e por outros frameworks ou bibliotecas para adicionar metadados a classes e propriedades em tempo de execução. Ele é necessário para que o TypeORM funcione corretamente, pois ele usa metadados para mapear as entidades e realizar outras operações relacionadas ao ORM.
import "express-async-errors"; // Essa linha de código importa o pacote "express-async-errors". Esse pacote é usado em conjunto com o framework Express e é responsável por tratar automaticamente erros assíncronos dentro do Express. Ele substitui a necessidade de usar um bloco try-catch em cada rota ou middleware assíncrono, simplificando o tratamento de erros em operações assíncronas no Express. Ao importar esse pacote, você pode usar funções assíncronas diretamente nas suas rotas e middlewares, sem se preocupar com o tratamento manual de erros.
import express, { Application } from "express";
import cors from "cors";
import { clientRoutes } from "./routes/client.routes";
import { contactRoutes } from "./routes/contact.routes";
import { loginRoutes } from "./routes/login.routes";
import { handleErrorMiddleware } from "./middlewares";



const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/client", clientRoutes);
app.use("/login", loginRoutes);
app.use("/contact", contactRoutes);

app.use(handleErrorMiddleware);

export default app;
