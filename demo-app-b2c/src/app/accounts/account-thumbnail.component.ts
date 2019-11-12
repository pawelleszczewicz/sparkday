import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-account-thumbnail',
    template: `
        <mat-card [routerLink]="['/accounts', account.accountId]">
            <mat-card-title>{{account.nickname}}</mat-card-title>
            <mat-card-subtitle>Account number: {{account.accountNumber}}</mat-card-subtitle>
            <mat-card-subtitle>Balance: {{account.balances[1].amount}}</mat-card-subtitle>
        </mat-card>
    `,
    styles: [
        `
        mat-card {
            width: 300px;
            height: 100px;
            margin-bottom: 10px;
        }`,
        `
        mat-card:hover {
            box-shadow: -1px 10px 29px 0px rgba(0,0,0,0.8);
        }
        `
    ]
})
export class AccountThumbnailComponent {
    @Input() account: any;
}
