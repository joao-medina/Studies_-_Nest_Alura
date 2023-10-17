import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/createUser.dto";

@Controller('/user')
export class UserController {

    constructor(private userRepository: UserRepository) {}

    @Post()
    async createUser(@Body() userData: CreateUserDTO) {
        this.userRepository.setUsers(userData)
        return "User created successfully!";
    }

    @Get()
    async listUsers() {
        return this.userRepository.getUsers();
    }
}