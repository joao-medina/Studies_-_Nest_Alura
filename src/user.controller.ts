import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserRepository } from "./user.repository";

@Controller('/user')
export class UserController {

    private userRepository = new UserRepository;

    @Post()
    async createUser(@Body() userData: object) {
        this.userRepository.setUsers(userData)
        return userData;
    }

    @Get()
    async listUsers() {
        return this.userRepository.getUsers();
    }
}