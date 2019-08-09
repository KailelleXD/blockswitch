import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { StyleSheet, Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import NavigationContainer from "./src/navigation/NavigationContainer";
import reducers from "./src/reducers";

// define REM depending on screen width
const { width } = Dimensions.get("window");
const rem = width > 340 ? 18 : 17;

// calc styles
EStyleSheet.build({
    $rem: rem
});

export default class App extends Component {
    render() {
        const store = createStore(reducers, {});

        return (
            <Provider store={store}>
                <NavigationContainer />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#D2B48C'
//   }
// });
