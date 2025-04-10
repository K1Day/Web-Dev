import { Component, OnInit } from '@angular/core';
import { VacancyService } from '../services/vacancy.service';
import { Vacancy } from '../models/vacancy';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[] = [];
  topVacancies: Vacancy[] = [];
  filteredVacancies: Vacancy[] = [];
  salaryFilter: number | null = null;
  loading = false;
  error: string | null = null;

  constructor(private vacancyService: VacancyService) {}

  ngOnInit(): void {
    this.loadAllVacancies();
    this.loadTopVacancies();
  }

  loadAllVacancies(): void {
    this.loading = true;
    this.vacancyService.getVacancies().subscribe({
      next: (data) => {
        this.vacancies = data;
        this.filteredVacancies = [...data];
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load vacancies';
        this.loading = false;
        console.error(err);
      }
    });
  }

  loadTopVacancies(): void {
    this.vacancyService.getTopTenVacancies().subscribe({
      next: (data) => {
        this.topVacancies = data;
      },
      error: (err) => {
        console.error('Failed to load top vacancies:', err);
      }
    });
  }

  
}