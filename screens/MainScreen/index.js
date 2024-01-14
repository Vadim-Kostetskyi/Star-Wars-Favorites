import { Button, Text, TouchableOpacity, View } from "react-native";
import Fans from "../../components/Fans";
import CardName from "../../components/CardName/index.js";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles.js";

const MainScreen = () => {
  return (
    <>
      <Fans />
      <View style={styles.wrapper}>
        <StatusBar hidden={true} />
        <CardName />
      </View>
    </>
  );
};

export default MainScreen;
