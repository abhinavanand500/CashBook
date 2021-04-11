import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomePage from "./src/pages/HomePage";
const navigator = createStackNavigator(
    {
        Home: HomePage,
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            title: "CashBook",
        },
    },
);
export default createAppContainer(navigator);
