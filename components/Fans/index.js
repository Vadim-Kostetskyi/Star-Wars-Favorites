import { Text, View } from "react-native";
import { styles } from "./styles";

const Fans = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.tittle}>Fans</Text>
      <View style={styles.listWrapper}>
        <View style={styles.itemWrapper}>
          <Text style={styles.number}>0</Text>
        </View>
        <View style={styles.itemWrapper}>
          <Text style={styles.number}>1</Text>
        </View>
        <View style={styles.itemWrapper}>
          <Text style={styles.number}>2</Text>
        </View>
      </View>
    </View>
  );
};

export default Fans;
