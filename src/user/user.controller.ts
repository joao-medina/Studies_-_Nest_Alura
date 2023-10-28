import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";
import { randomUUID }  from 'node:crypto';
import { UserListDTO } from "./dto/UserList.dto";
import { UpdateUserDTO } from "./dto/UpdateUser.dto";

@Controller('/user')
export class UserController {

    constructor(private userRepository: UserRepository) {}

    @Post()
    async createUser(@Body() userData: CreateUserDTO) {
        const userEntity = new UserEntity();
        userEntity.name = userData.name;
        userEntity.email = userData.email;
        userEntity.password = userData.password;
        userEntity.id = randomUUID();
        
        this.userRepository.setUsers(userEntity)
        return {
            id: userEntity.id,
            message: "User created succefully!"
        }
    }

    @Get()
    async listUsers() {
        const savedUsers = await this.userRepository.getUsers();
        const userList = savedUsers.map(
            user => new UserListDTO(
                user.id,
                user.name
            )
        )
        return userList;
    }

    @Put('/:id')
    async updateUser(@Param('id') id: string, @Body() newData: UpdateUserDTO) {
        const updatedUser = await this.userRepository.update(id, newData); 
        return {
            user: updatedUser,
            message: 'Usuário atualizado'
        }      
    }
}""