import { IsEmail, IsString, IsUUID } from "class-validator";

export class AccountIdDto {
    @IsUUID(4, { message: 'ID invalid' })
    accountId: string;
}

export class CreateAccountDto {
    @IsString({ message: 'Invalid username' })
    username: string;

    @IsString({ message: 'Invalid password' })
    password: string;

    @IsEmail({}, { message: 'Invalid email' })
    email: string;
}

export class UpdateAccountDto {
    @IsString()
    password: string;
}