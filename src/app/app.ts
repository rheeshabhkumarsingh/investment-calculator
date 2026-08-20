import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';

@Component({
  selector: 'app-root',
  imports: [Header, UserInput],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  calculateInvestmentResult(data: {
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number
  }) {
    const {initialInvestment, annualInvestment, expectedReturn, duration} = data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for(let i = 0; i<duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment*year,
      })
    }

    return annualData;
  }
}
