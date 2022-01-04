import { IsEmail, IsString, IsUUID } from "class-validator";

export class AccountIdDto {
    @IsUUID(4, { message: 'id不正确' })
    accountId: string;
}

export class CreateAccountDto {
    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsEmail({}, { message: '请输入正确的邮箱' })
    email: string;
}

export class UpdateAccountDto {
    @IsString()
    password: string;
}