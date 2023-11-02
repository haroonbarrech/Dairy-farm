import * as React from "react";
import { View, StyleSheet, ViewProps } from "react-native";
import { useMediaQuery } from '../quries/useGridQuries';
import { useGrid } from "./Provider";

export interface RowProps extends ViewProps {
    minWidth : number,
    maxWidth: number,
    minHeight: number,
    maxHeight: number,

    orientation: string
}

export const RowQueries : React.FC<RowProps> = ({maxHeight, minHeight, orientation, maxWidth, minWidth, style, children, ...props }) => {
    const { padding } = useGrid();
    const obj = {};
    if (minWidth) {
        obj['minWidth'] = minWidth;
    }
    if (maxWidth) {
        obj['maxWidth'] = maxWidth;
    }
    if (minHeight) {
        obj['minHeight'] = minHeight;
    }
    if (maxHeight) {
        obj['maxHeight'] = maxHeight;
    }
    if (orientation) {
        obj['orientation'] = orientation;
    }
    const query = useMediaQuery(obj);
    return (
        <View {...props} style={[styles.row, { marginRight: -padding }, style, query? {display: 'flex'} : {display: 'none'} ]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
});
