import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

export class CreateUserService {

  async execute({ name, email, admin }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories)

    if (!email) {
      throw new Error("Email incorrect");
    }
    
    const usersAlreadyExists = await usersRepository.findOne({ email })

    if (usersAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = usersRepository.create({
      name,
      email,
      admin
    })

    await usersRepository.save(user)

    return user
  }
}