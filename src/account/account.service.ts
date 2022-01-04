import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateAccountDto } from "./dto/account.dto";
import { AccountRepository } from "./account.repository";
import { Pagination } from "../model/pagination.model";
import { PaginationDto } from "./dto/pagination.dto";

@Injectable()
export class AccountService {

    constructor(
        private readonly accountRepo: AccountRepository,
    ) {
        
    }

    async getAccounts(params: PaginationDto) {
        const pagination = new Pagination(params.page, params.size);
        return this.accountRepo.findAccounts(pagination);
    }

    async getAccount(id: string) {
        return this.accountRepo.find({ id });
    }

    async createAccount(account: CreateAccountDto) {
        this.accountRepo.save(account);
    }

    async createAccountByAdmin(account) {
        this.accountRepo.save(account);
    }

    async updateAccount(id: string, account) {
        this.accountRepo.update({ id }, account);
    }

    async deleteAccount(id: string) {
        const account = await this.accountRepo.findOne({ id });
        if (!account || account.isDeleted) {
            throw new BadRequestException('')
        }
        const username = `deleted__${id}__${account.username}`;
        try {
            this.accountRepo.update({ id }, { username, isDeleted: true, deletedAt: new Date() });
        } catch (e) {
            throw new BadRequestException('')
        }
    }
}