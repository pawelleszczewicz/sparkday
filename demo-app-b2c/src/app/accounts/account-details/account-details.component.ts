import { Component, OnInit } from '@angular/core';
// import { AccountService } from '../shared/account.service';
import { AccountApiService } from '../shared/account-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: `
    <h2 class="uxg-h2">{{account.nickname}}</h2>
    <hr>
    <h4 class="uxg-h4">Transaction list:</h4>
    <mat-list>
            <mat-list-item *ngFor="let transaction of transactions">
                <div mat-line class="uxg-subtitle-1">{{ transaction.transactionDate }}</div>
                <div mat-line class="uxg-body-2">{{ transaction.description }}</div>
                {{ transaction.transactionAmount | currency}}
            </mat-list-item>
    </mat-list>
    `,
    styles: [
        `
        .mat-list-item:nth-child(even){
            background-color:#EFCCE7;
        }
        `,
        `
        .mat-list-item:nth-child(odd){
            background-color:white;
        }
        `
    ]
})
export class AccountDetailsComponent implements OnInit {
    account: any;
    transactions: any;
    constructor(private accountService: AccountApiService, private route: ActivatedRoute) {
    }
    ngOnInit() {
        this.accountService.getAccount(this.route.snapshot.params['accountId'])
            .subscribe(account => this.account = account);
        this.accountService.getTransactionsForAccount(this.route.snapshot.params['accountId'])
            .subscribe(transactions => this.transactions = transactions);
    }

}
