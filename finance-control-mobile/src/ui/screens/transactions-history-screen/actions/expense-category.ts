import ExpenseCategory from "src/domain/expense-category/expense-category";

export function getCategoryName(categoryId: string, categories: ExpenseCategory[]) {
  const category = categories.find((category) => category.id === categoryId);
  const categoryName = category ? category.name : "";

  return categoryName;
}