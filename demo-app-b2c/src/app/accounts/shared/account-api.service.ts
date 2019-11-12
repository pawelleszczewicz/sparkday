import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountApiService {
    constructor(private httpClient: HttpClient) {}

    getAccounts() {
        return this.httpClient.get(`/proxy/retail-us/me/account/v1/accounts/extended`);
    }

    getAccount(accountId: string) {
        return this.httpClient.get(`/proxy/retail-us/me/account/v1/accounts/${accountId}`);
    }

    getTransactionsForAccount(accountId: string) {
        return this.httpClient.get(`/proxy/retail-us/me/account/v1/accounts/${accountId}/transactions?offset=0&limit=100`);
    }
}
