import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterName from "../screens/RegisterName";
import RegisterDocuments from "../screens/RegisterDocuments";
import Result from "../screens/Result";
import Initial from "../screens/Initial";

function AppRoutes() {
  const { Screen, Navigator } = createNativeStackNavigator();

  return (
    <Navigator initialRouteName="initial" screenOptions={{ headerShown: false }}>
      <Screen name="initial" component={Initial} />
      <Screen name="registerName" component={RegisterName} />
      <Screen name="registerDocuments" component={RegisterDocuments} />
      <Screen name="result" component={Result} />
    </Navigator>
  );
}

export default AppRoutes;
