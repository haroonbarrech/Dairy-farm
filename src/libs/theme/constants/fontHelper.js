import * as React from "react";
import { PixelRatio } from "react-native";
import { normalize } from "../normalize/normalized";

export const fs = (fs)=>{
    return normalize(fs)/PixelRatio.getFontScale()
}