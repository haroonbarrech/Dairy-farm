import { Dimensions, Platform } from "react-native";

const isWeb = Platform.OS === "web";

export const ElementsText = {
  AUTOPLAY: "AutoPlay",
};

export const window = isWeb
  ? {
    ...Dimensions.get("window"),
    width: 375,
  }
  : Dimensions.get("window");