import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { AccountIdDto, CreateAccountDto, UpdateAccountDto } from "./dto/account.dto";
import { AccountService } from "./account.service";
import { PaginationDto } from "./dto/pagination.dto";

@Controller('/accounts')
export class AccountController {

    constructor(
        private readonly accountService: AccountService,
    ) {

    }

    @Get()
    async getAccounts(@Query() query: PaginationDto) {
        return this.accountService.getAccounts(query);
    }

    @Get('/:accountId')
    async getAccount(
        @Param() { accountId }: AccountIdDto,
    ) {
        return this.accountService.getAccount(accountId);
    }

    @Post()
    async createAccount(@Body() body: CreateAccountDto) {
        this.accountService.createAccount(body);
    }

    @Post('/admin')
    async createAccountByAdmin(@Body() body: CreateAccountDto) {
        this.accountService.createAccountByAdmin(body);
    }

    @Put('/:accountId')
    async updateAccount(@Param() { accountId }: AccountIdDto, @Body() body: UpdateAccountDto) {
        this.accountService.updateAccount(accountId, body);
    }

    @Delete('/:accountId')
    async deleteAccount(@Param() { accountId }: AccountIdDto) {
        this.accountService.deleteAccount(accountId);
    }
}