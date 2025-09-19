import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { SummaryChartComponent } from './summary-chart.component';
import { ApiService } from './api.service';
import { Transaction } from './models/transaction';
import { CommonModule, DatePipe, CurrencyPipe, NgFor } from '@angular/common';
import localeFi from '@angular/common/locales/fi';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeFi); // Rekisteröi suomen kielen paikallisasetukset

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TransactionFormComponent,
    SummaryChartComponent,
    CommonModule,
    DatePipe,
    CurrencyPipe,
    NgFor
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = signal('budget-app');
  transactions: Transaction[] = [];
  income = 0;
  expense = 0;
  balance = 0;
  incomeHeight = 0;
  expenseHeight = 0;

  constructor(private api: ApiService) {
    this.loadTransactions();
  }

  loadTransactions() {
    this.api.getTransactions().subscribe(txs => {
      this.transactions = txs;
      this.calculateSummary();
    });
  }

  onTransactionAdded(tx: Transaction) {
    this.transactions.push(tx);
    this.calculateSummary();
  }

  deleteTransaction(id: number) {
    this.api.deleteTransaction(id).subscribe(() => {
      this.transactions = this.transactions.filter(t => t.id !== id);
      this.calculateSummary();
    });
  }

  calculateSummary() {
    this.income = this.transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);

    this.expense = this.transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);

    this.balance = this.income - this.expense;

    const maxValue = Math.max(this.income, this.expense, 1);
    this.incomeHeight = (this.income / maxValue) * 100;
    this.expenseHeight = (this.expense / maxValue) * 100;
  }
}
