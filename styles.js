import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    padding: 10,
  },
  card: {
    marginTop: 5,
    backgroundColor: "#fff",
    padding: 14,
    flex: 1,
    flexDirection: "row",
  },
  articleContainer: {
    flex: 1,
    padding: 14,
    margin: 14,
  },
  photoCont: {
    alignSelf: "center",
    aspectRatio: 1,
    height: "100%",
    marginRight: 10,
  },
  photo: {
    justifyContent: "center",
    alignItems: "stretch",
    height: "100%",
    width: "100%",
  },
  title: { fontSize: 16, fontWeight: "bold" },
  author: { fontSize: 12 },
  time: { alignItems: "flex-end", fontSize: 9 },
});

export default styles;
