import * as React from "react";
import { View, StyleSheet, ViewProps } from "react-native";
import { StyleHelper } from "../constants/styleHelper";
import { useGrid } from "./Provider";

export interface RowProps extends ViewProps {}

export const Row: React.FC<RowProps> = ({ style, children, ...props }) => {
	const global = StyleHelper(props);

	const { padding } = useGrid();

	return (
		<View {...props} style={[styles.row, { marginRight: -padding }, style, global.margin, global.padding]}>
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
