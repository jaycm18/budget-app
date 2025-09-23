# Budget App

A modern personal finance management application built with Angular 20 that helps you track your income and expenses with intuitive charts and transaction management.

## 🌟 Features

- **Transaction Management**: Add, view, and categorize income and expenses
- **Visual Analytics**: Interactive charts powered by Chart.js to visualize your financial data
- **Responsive Design**: Modern, clean interface that works on desktop and mobile
- **Real-time Updates**: Instant feedback when adding or modifying transactions
- **Finnish Locale Support**: Built-in support for Finnish currency and date formatting
- **RESTful API Integration**: Ready for backend integration with structured API endpoints

## 🚀 Technologies Used

- **Angular 20** - Latest Angular framework with standalone components
- **TypeScript** - Type-safe JavaScript development
- **Chart.js** - Beautiful and responsive charts
- **ng2-charts** - Angular wrapper for Chart.js
- **RxJS** - Reactive programming for data management
- **Angular Forms** - Reactive forms for user input

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Angular CLI](https://angular.io/cli) (optional but recommended)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jaycm18/budget-app.git
   cd budget-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   Or using Angular CLI:
   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## 📖 Usage

### Adding Transactions

1. Use the transaction form to add new income or expenses
2. Fill in the required fields:
   - **Type**: Select "income" or "expense"
   - **Description**: Brief description of the transaction
   - **Amount**: Transaction amount in euros
   - **Date**: Transaction date (optional, defaults to today)

### Viewing Analytics

- The summary chart displays your financial overview
- Visual representation of income vs expenses
- Real-time updates as you add new transactions

## 🏗️ Project Structure

```
src/
├── app/
│   ├── models/
│   │   └── transaction.ts          # Transaction data model
│   ├── transaction-form/
│   │   ├── transaction-form.component.ts    # Transaction input form
│   │   ├── transaction-form.component.html
│   │   └── transaction-form.component.css
│   ├── api.service.ts              # API service for data management
│   ├── summary-chart.component.ts  # Chart visualization component
│   ├── app.component.ts            # Main application component
│   ├── app.component.html
│   ├── app.component.css
│   ├── app.config.ts              # Application configuration
│   └── app.routes.ts              # Routing configuration
├── index.html
├── main.ts
└── styles.css
```

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build in watch mode
- `npm test` - Run unit tests

## 🌐 API Integration

The app is designed to work with a RESTful backend API. The `ApiService` handles:

- `GET /transactions` - Retrieve all transactions
- `POST /transactions` - Create new transaction
- `PUT /transactions/:id` - Update existing transaction
- `DELETE /transactions/:id` - Remove transaction

### Transaction Model

```typescript
interface Transaction {
  id?: number;          // Optional, assigned by backend
  type: string;         // "income" or "expense"
  description: string;  // Transaction description
  amount: number;       // Amount in euros
  date?: string;        // ISO date string, optional
}
```

## 🎨 Features in Detail

### Transaction Form Component
- Reactive form validation
- Type selection (income/expense)
- Amount input with currency formatting
- Date picker with default to current date
- Form submission handling

### Summary Chart Component
- Interactive Chart.js integration
- Real-time data visualization
- Responsive design
- Custom styling and colors

### API Service
- HTTP client integration
- Error handling
- Observable-based data flow
- Ready for backend integration

## 🔮 Future Enhancements

- [ ] User authentication and authorization
- [ ] Multiple budget categories
- [ ] Recurring transactions
- [ ] Export to CSV/PDF
- [ ] Advanced filtering and search
- [ ] Dark mode support
- [ ] Mobile app version
- [ ] Multi-currency support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**jaycm18**

- GitHub: [@jaycm18](https://github.com/jaycm18)

## 🙏 Acknowledgments

- Angular team for the amazing framework
- Chart.js for beautiful charting capabilities
- The open-source community for inspiration and tools

---

**Made with ❤️ and Angular**
