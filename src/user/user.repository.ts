import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
    private users = [];

    async setUsers(user: object) {
        this.users.push(user);
        console.log(this.users);
    }

    async getUsers() {
        return this.users;
    }
}