import { getCustomRepository } from "typeorm";
import { classToPlain } from "class-transformer";
import { UsersRepositories } from "../repositories/UsersRepositories";

export class ListUsersService {
  async execute() {
    const usersRepositores = getCustomRepository(UsersRepositories);

    const users = await usersRepositores.find()

    return classToPlain(users)
  }
}