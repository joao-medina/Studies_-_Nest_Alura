import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UserRepository } from "../user.repository";
import { Injectable } from "@nestjs/common";


@Injectable()
@ValidatorConstraint()
export class UniqueEmailValidator implements ValidatorConstraintInterface{
    
    constructor(private userRepository: UserRepository) {}
    
    async validate(email: string, validationArguments?: ValidationArguments): Promise<boolean> {
        const userEmailExists = await this.userRepository.emailExists(email)
        return !userEmailExists
    }
}

export const UniqueEmail = (validationOptions: ValidationOptions) => {
    return (object: Object, property: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: property,
            options: validationOptions,
            constraints: [],
            validator: UniqueEmailValidator
        })
    }
}