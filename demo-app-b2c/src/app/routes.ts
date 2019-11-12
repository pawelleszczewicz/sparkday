import { Routes } from '@angular/router';
import { AccountsListComponent } from './accounts/accounts-list.component';
import { AccountDetailsComponent } from './accounts/account-details/account-details.component';

export const appRoutes: Routes = [
    { path: 'accounts', component: AccountsListComponent },
    { path: 'accounts/:accountId', component: AccountDetailsComponent},
    { path: '', redirectTo: '/accounts', pathMatch: 'full'}
];
