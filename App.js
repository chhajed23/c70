import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SearchScreen from "./screens/searchScreen";
import TransactionScreen from "./screens/transactionScreen";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const tabNavigator = createBottomTabNavigator(
  {
    Transaction: { screen: TransactionScreen },
    Search: { screen: SearchScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({}) => {
        const routeName = navigation.state.routeName;
        if (routeName === "Transaction") {
          return(
            <Image
            style={{
              height:40,
              width:40,
            }}
            source={require("./assets/book.png")}/>
          )
        } 
        else if (routeName === "Search") {
          return(
            <Image
            style={{
              height:40,
              width:40,
            }}
            source={require("./assets/searchingbook.png")}/>
          )
        }
      },
    }),
  }
);

const AppContainer = createAppContainer(tabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
