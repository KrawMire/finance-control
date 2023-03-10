import { Button, Input, Layout, Text } from "@ui-kitten/components";
import { useState } from "react";
import { showMessage } from "react-native-flash-message";
import { useDispatch, useSelector } from "react-redux";

import AppState from "src/domain/app-state/app-state";
import { setInitialBalance } from "state/total-balance/actions";
import { sharedTextStyle } from "styles/shared/text.style";

export function TotalBalanceSettings() {
  const dispatch = useDispatch();
  const totalBalance = useSelector((state: AppState) => state.totalBalance.initialBalance);

  const [totalBalanceValue, setTotalBalanceValue] = useState(totalBalance?.toString());

  const onSetTotalBalance = () => {
    const newTotalBalance = Number(totalBalanceValue);

    if (!newTotalBalance) {
      showMessage({
        type: "danger",
        message: "New total balance value is invalid!"
      });

      return;
    }

    dispatch(setInitialBalance(newTotalBalance));
  }

  return (
    <Layout>
      <Input
        placeholder="Enter new initial total balance..."
        onChangeText={setTotalBalanceValue}
        keyboardType="numeric"
        value={totalBalanceValue?.toString()}
      />
      <Button onPress={onSetTotalBalance}>
        Set total balance
      </Button>
    </Layout>
  )
}