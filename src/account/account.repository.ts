import { Pagination } from "src/model/pagination.model";
import { EntityRepository, Repository } from "typeorm";
import { Account } from "./account.entity";

@EntityRepository(Account)
export class AccountRepository extends Repository<Account> {
    async findAccounts(page: Pagination) {
        return await this.findAndCount({
            where: { isDeleted: false },
            skip: page.offset,
            take: page.limit,
        })
    }
}