import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Transaction } from '../models/transaction';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transaction-form.html',
  styleUrls: ['./transaction-form.css']
})
export class TransactionFormComponent {
  description = '';
  amount = 0;
  type: 'income' | 'expense' = 'income'; // default tyyppi

  @Output() transactionAdded = new EventEmitter<Transaction>();

  constructor(private apiService: ApiService) {}

  addTransaction() {
    // Varmistetaan, että syöte on validi
    if (!this.description || this.amount <= 0) return;

    const newTransaction: Transaction = {
      type: this.type,
      description: this.description,
      amount: this.amount,
      date: new Date().toISOString()
    };

    // Lähetetään backendille
    this.apiService.addTransaction(newTransaction).subscribe(tx => {
      // Ilmoitetaan parent-komponentille uudesta transaktiosta
      this.transactionAdded.emit(tx);
      // Reset
      this.description = '';
      this.amount = 0;
      this.type = 'income';
    });
  }
}
