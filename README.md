# NLW Valoriza

## Dia 2 - Criando estrutura de usuário

### Banco de dados

#### Quais as formas de utilizar no projeto?

- Utilizar o próprio driver do banco de dados, pegando aquilo que é nativo.
  - O principal problema é que se precisar de um banco para o outro dará muito trabalho.

![image-1](./github/image1.png)

- Query Builders
  - Permite escrever as queries de uma forma mais padronizada, e global, mesmo mudando de um banco de dados para outro.
- ORMs: Object Relational Mapping
  - Frameworks e bibliotecas que transforma o código para uma forma que o banco de dados entende.
  - Exemplos: Sequelize, TypeORM, Prisma

#### Como escolher a melhor forma?

A melhor forma é aquela que **atende melhor o seu projeto**.
