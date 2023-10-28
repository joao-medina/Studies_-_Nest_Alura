import { IsEmail, MinLength, IsNotEmpty, IsOptional } from "class-validator";
import { UniqueEmail } from "../validator/UniqueEmail.validator";

export class UpdateUserDTO {

    @IsNotEmpty({message: "Name could not be empty"})
    @IsOptional()
    name: string;

    @IsEmail(undefined, {message: "Send a valid e-mail"})
    @UniqueEmail({message: "A user with that email already exists"})
    @IsOptional()
    email: string;

    @MinLength(6, {message: "The password must cointain at least 6 characters"})
    @IsOptional()
    password: string;
}