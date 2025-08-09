/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import NavigationController from "@navigations/NavigationController";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { IntlProvider } from "react-intl";


function App(): React.JSX.Element {
  return <IntlProvider messages={{
    "please-try-again": "Please try again.",
  }} locale={"en"} defaultLocale="en">
    <SafeAreaProvider>
      <NavigationController/>
    </SafeAreaProvider>
  </IntlProvider>;
}


export default App;
