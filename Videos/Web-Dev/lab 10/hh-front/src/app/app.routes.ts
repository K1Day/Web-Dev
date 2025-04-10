import { Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';

export const routes: Routes = [
  { path: 'companies', component: CompanyListComponent },
  { path: 'vacancies', component: VacancyListComponent },
  { path: '', redirectTo: '/companies', pathMatch: 'full' },
  { path: '**', redirectTo: '/companies' }
];