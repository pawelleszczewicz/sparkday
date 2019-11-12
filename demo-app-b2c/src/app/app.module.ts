import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppAccountsComponent } from './app-accounts.component';
import { AccountsListComponent } from './accounts/accounts-list.component';
import { AccountThumbnailComponent } from './accounts/account-thumbnail.component';
import { AccountApiService } from './accounts/shared/account-api.service';
import { AccountDetailsComponent } from './accounts/account-details/account-details.component';
import { appRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppAccountsComponent,
    AccountsListComponent,
    AccountThumbnailComponent,
    AccountDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatCardModule,
    MatListModule
  ],
  providers: [AccountApiService],
  bootstrap: [AppAccountsComponent]
})
export class AppModule { }
