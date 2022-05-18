import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import  RootNavigator  from "./components/RootNavigator";
import TempratureContextProvider from "./context/TempartureContext";

export default function App() {
  return (
    <TempratureContextProvider>
        <RootNavigator />
    </TempratureContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
