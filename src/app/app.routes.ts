import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form-component/form.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

export const rootRouterConfig: Routes = [
  { path: '', component: FormComponent },
  { path: 'accountDetails', component: AccountDetailsComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(rootRouterConfig);
