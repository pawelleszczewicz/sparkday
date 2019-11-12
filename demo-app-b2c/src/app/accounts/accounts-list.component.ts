import { Component, OnInit } from '@angular/core';
// import { AccountService } from './shared/account.service';
import { AccountApiService } from './shared/account-api.service';

@Component({
    selector: 'app-accounts-list',
    template: `
        <div>
            <h1 class="uxg-h1">Accounts List</h1>
            <hr>
            <app-account-thumbnail *ngFor="let account of accounts" [account]="account"></app-account-thumbnail>
        </div>
    `
})

export class AccountsListComponent implements OnInit {
    accounts: any;
    constructor(private accountService: AccountApiService) {
    }

    ngOnInit() {
        this.accountService.getAccounts().subscribe(accounts => this.accounts = accounts);
    }
}
