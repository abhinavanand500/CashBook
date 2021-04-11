import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomePage from "./src/pages/HomePage";
import ProfilePage from "./src/pages/ProfilePage";
const navigator = createStackNavigator(
    {
        Home: HomePage,
        Profile: ProfilePage,
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            title: "CashBook",
        },
    },
);
export default createAppContainer(navigator);
