import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    width: 350,
    backgroundColor: "blue",
    marginLeft: "auto",
    marginRight: "auto",
  },
  itemWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 25,
    marginBottom: 15,
  },
  text: { textAlign: "center", marginRight: 15 },
  heart: {
    width: 25,
    height: 25,
    backgroundColor: "red",
  },
});
