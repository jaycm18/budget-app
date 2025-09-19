import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { ApiService } from './api.service';
import { Transaction } from './models/transaction';
import { CommonModule, DatePipe, CurrencyPipe, NgFor } from '@angular/common';  // <--- lisää

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TransactionFormComponent,
    CommonModule,    // ngFor ja muut yleiset direktiivit
    DatePipe,        // date pipe
    CurrencyPipe,    // currency pipe
    NgFor            // *ngFor direktiivi
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = signal('budget-app');
  transactions: Transaction[] = [];

  constructor(private api: ApiService) {
    this.loadTransactions();
  }

  loadTransactions() {
    this.api.getTransactions().subscribe(txs => this.transactions = txs);
  }

  onTransactionAdded(tx: Transaction) {
    this.transactions.push(tx);
  }
}
