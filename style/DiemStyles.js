/** @format */

import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
    alignItems: "center",
    paddingTop: 50,
  },
  table: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingTop: 20,
  },
  row: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  row_item_masv: {
    padding: 5,
    borderWidth: 1,
    borderRightWidth: 0,
    width: "35%",
  },
  row_item_ten: {
    padding: 5,
    borderWidth: 1,
    borderRightWidth: 0,
    width: "45%",
  },
  row_item_diem: {
    padding: 5,
    borderWidth: 1,
    width: "20%",
  },
  item_text: { textAlign: "center" },
  title: {
    flexDirection: "row",
    backgroundColor: "#3399FF",
  },
  title_item_masv: {
    padding: 5,
    borderWidth: 1,
    borderRightWidth: 0,
    width: "35%",
  },
  title_item_ten: {
    width: "45%",
    padding: 5,
    borderWidth: 1,
    borderRightWidth: 0,
  },
  title_item_diem: {
    padding: 5,
    width: "20%",
    borderWidth: 1,
  },
  title_text: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
  tenmon: {
    width: "60%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    borderRadius: 100,
    borderWidth: 1,
    padding: 10,
  },
});
