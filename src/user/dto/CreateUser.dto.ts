import { IsEmail, MinLength, IsNotEmpty } from "class-validator";

export class CreateUserDTO {

    @IsNotEmpty({message: "Name could not be empty"})
    name: string;

    @IsEmail(undefined, {message: "Send a valid e-mail"})
    email: string;

    @MinLength(6, {message: "The password must cointain at least 6 characters"})
    password: string;
}