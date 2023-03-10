import { Button, Layout, Text } from "@ui-kitten/components";
import { useDispatch, useSelector } from "react-redux";
import AppState from "src/domain/app-state/app-state";
import { setAppReady } from "state/global/actions";
import { finishStepStyles } from "styles/components/set-up-screen/finish.style";

export interface FinishStepProps {
  onMoveBack: () => void;
}

export function FinishStep(props: FinishStepProps) {
  const dispatch = useDispatch();

  const initialBalance = useSelector((state: AppState) => state.totalBalance.initialBalance);
  const startDate = useSelector((state: AppState) => state.settings.settings.billingPeriodSettings.dateFrom);
  const endDate = useSelector((state: AppState) => state.settings.settings.billingPeriodSettings.dateTo);

  const onFinish = () => {
    dispatch(setAppReady(true));
  }

  return (
    <Layout>
      <Text>Finish. Check your initial data</Text>
      <Text>Initial balace: {initialBalance ?? 0}</Text>
      <Text>Billing period days: {startDate ?? 0} - {endDate ?? 0}</Text>
      <Layout style={finishStepStyles.moveButtonsContainer}>
        <Button onPress={props.onMoveBack}>
          Back
        </Button>
        <Button onPress={onFinish}>
          Finish
        </Button>
      </Layout>
    </Layout>
  )
}