import ExpenseType from "./components/expense-type";

/**
 * Represents planned expenses i.e. amount of money that is planned to spend
 */
type Expense = {
  /**
   * Type of the expense. Could be main, secondary of postponed
   */
  expenseType: ExpenseType;

  /**
   * Identifier of the billing period
   */
  billingPeriod: string | null;

  /**
   * The name of the expense
   */
  name: string;

  /**
   * The current spent money amount
   */
  actualAmount: number;

  /**
   * The planned money amount to spend
   */
  plannedAmount: number;
}

export default Expense;