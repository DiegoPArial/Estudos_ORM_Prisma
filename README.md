# Prisma ORM

Ferramenta que pode mapear todo o banco de dados sem complicações, pode integrar a um projeto já existente, onde serão gerados os modelos. 

Prisma ORM é um novo tipo de ORM que atenua muitos problemas de ORMs tradicionais, como instâncias de modelo inchadas, mistura de lógica de negócios com lógica de armazenamento, falta de segurança de tipo ou consultas imprevisíveis causadas, por exemplo, por carregamento lento.

O Prisma Migrate permite gerar migrações SQL a partir do esquema Prisma e executá-las no banco de dados. As consultas CRUD são fornecidas pelo Prisma Client, um cliente de banco de dados leve e totalmente seguro para Node.js e TypeScript.

O Prisma ORM permite filtrar uma lista com base em um critério que se aplica não apenas aos modelos da lista que está sendo recuperada, mas a uma relação desse modelo.

---

Prisma ORM tem 4 produtos integrados a ele:

Client: converte o modelo de maneira que o banco de dados possa entender.

Migrate: histórico de tudo o que foi feito no banco de dados, como criar tabela, alterar ou excluir.

Studio: abrir o banco de dados utilizando somente a aplicação.

Data Plataform: consegue utilizar o prisma sem precisar criar um projeto na máquina, utiliza a nuvem.
