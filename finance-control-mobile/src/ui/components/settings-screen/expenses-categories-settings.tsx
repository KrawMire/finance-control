import { Layout, ListItem, Text, Modal, Input, Toggle, Button, Card } from "@ui-kitten/components";
import { useState } from "react";
import { showMessage } from "react-native-flash-message";
import { useDispatch, useSelector } from "react-redux";
import AppState from "src/domain/app-state/app-state";
import ExpenseCategory from "src/domain/expense-category/expense-category";
import { addExpenseCategory } from "state/app-settings/actions";
import { settingsScreenStyles } from "styles/screens/settings.style";
import { sharedTextStyle } from "styles/shared/text.style";
import { getNewId } from "utils/identifier";
import { isNullOrZero } from "utils/null-check";

export function ExpensesCategoriesSettings() {
  const dispatch = useDispatch();
  const categories = useSelector((state: AppState) => state.settings.settings.expenseCategoriesSettings.categories);

  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryAmount, setNewCategoryAmount] = useState("");
  const [trackNewCategory, setTrackNewCategory] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);

  const toggleModal = () => {
    setShowAddModal(!showAddModal);
  }

  const addNewCategory = () => {
    const parsedAmount = Number(newCategoryAmount);

    if (!newCategoryName || newCategoryName === "") {
      showMessage({
        message: "Invalid category name!",
        type: "danger"
      });
      return;
    }

    if (isNullOrZero(parsedAmount)) {
      showMessage({
        message: "Invalid new category amount!",
        type: "danger"
      });
      return;
    }

    const newCategory: ExpenseCategory = {
      id: getNewId(),
      name: newCategoryName,
      plannedAmount: parsedAmount,
      trackExpenses: trackNewCategory
    };

    dispatch(addExpenseCategory(newCategory));
    toggleModal();
  }

  const isCategoriesExists = categories && categories.length > 0;
  return (
    <Layout>
      {isCategoriesExists ? categories.map((category) => (
        <Card key={category.id}>
          <Text>{category.name}</Text>
          <Text>Planned amount: {category.plannedAmount}</Text>
          <Text>Track: {category.trackExpenses ? "Yes" : "No"}</Text>
        </Card>
      )) : (
        <Text>No expenses categories</Text>
      )}
      <Button
        onPress={toggleModal}
      >
        Add new category
      </Button>

      <Modal
        visible={showAddModal}
        backdropStyle={settingsScreenStyles.addCategoryModalBackdrop}
        onBackdropPress={toggleModal}
      >
        <Card>
          <Input
            label="Category name..."
            placeholder="Enter new category name..."
            value={newCategoryName}
            onChangeText={setNewCategoryName}
          />
          <Input
            label="Category amount"
            placeholder="Enter new category amount..."
            keyboardType="numeric"
            value={newCategoryAmount}
            onChangeText={setNewCategoryAmount}
          />
          <Text>Track expenses:</Text>
          <Toggle
            checked={trackNewCategory}
            onChange={setTrackNewCategory}
          />
          <Button onPress={addNewCategory}>
            Add category
          </Button>
        </Card>
      </Modal>
    </Layout>
  )
}