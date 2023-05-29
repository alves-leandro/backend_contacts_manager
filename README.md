# contacts_manager (TypeScript, TypeORM e Express)

API para a aplicação fullstack "contacts-manager", o banco de dados utilizado foi o PostgreSQL.

Diagrama: https://dbdiagram.io/d/646ba21cdca9fb07c48bcde2

O app consiste em criar um pequeno cadastro de clientes com vínculo de contatos, depois mostrar o cliente e seus contatos vinculados.
O app cria um cadastro de clientes que podem adicionar muitos outros contatos associados. Todos os contatos adicionados somente serão acessados pelo cliente.

* o Projeto também foi dockerizado e cadastra um e-mail e telefone extra para os "contatos"

Documentação feita com Swagger:
https://api-contacts-manager.onrender.com/api-docs/


O cliente (usuário) poderá cadastrar seus contatos e adicionar a eles informações relevantes como Linkedin, portifólio e Github deixando a aplicação mais dinâmica.

CRUD completo tanto para "clientes" quando "Contatos"


Para inicializar a aplicação em sua máquina siga os seguintes passos:

1 - Abra seu terminal e crie uma pasta para clonar o repositório

mkdir NOMEDAPASTA && cd NOMEDAPASTA

2 - Faça o clone do repositório

git clone CAMINHODOREPOSITORIO

3 - Instale as dependências

yarn 

4 - Abra o VScode

code .

5 - Crie arquivo .env sequindo a estrutura do .env.example

5.5 - nao esqueça do DB

6 - rode a aplicação localmente

yarn dev
