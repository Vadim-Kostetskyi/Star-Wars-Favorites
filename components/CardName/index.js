import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";

const CardName = () => {
  const list = [
    {
      name: "rere",
    },
    {
      name: "rere",
    },
    {
      name: "rere",
    },
    {
      name: "rere",
    },
    {
      name: "rere",
    },
    {
      name: "rere",
    },
  ];
  return (
    <>
      {list.map((el) => (
        <View style={styles.itemWrapper}>
          <Text style={styles.text}>{el.name}</Text>
          <TouchableOpacity style={styles.heart}>
            <AntDesign name="hearto" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
};

export default CardName;
