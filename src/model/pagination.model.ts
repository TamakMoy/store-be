export class Pagination {

    readonly page: number = 1;
    readonly size: number = 10;
    readonly offset: number = 0;
    readonly limit: number = 10;

    constructor(page: number = 1, size: number = 10) {
        this.page = page;
        this.size = size;
        this.limit = size
        this.offset = (this.page - 1) * this.size;
    }
}