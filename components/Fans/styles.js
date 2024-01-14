import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const halfScreenWidth = screenWidth / 3;
const numberWidth = halfScreenWidth - 10;

export const styles = StyleSheet.create({
  tittle: {
    marginBottom: 15,
  },
  wrapper: {
    padding: 10,
    marginBottom: 20,
  },
  listWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  itemWrapper: {
    width: numberWidth,
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "red",
    marginRight: 5,
  },
  number: {
    textAlign: "center",
  },
});
