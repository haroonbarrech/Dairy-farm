import * as React from "react";
import { View, StyleSheet, Platform, useWindowDimensions, useColorScheme,  } from "react-native";
import { Colors } from "../constants/colors";

export type OrientationType = "portrait" | "landscape";

export type SizeType = "xs" | "sm" | "md" | "lg" | "xl";

export interface SizesProps {
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
}

export interface LayoutProps {
	size: SizeType;
}

export interface GridContextProps {
	size: SizeType;
	sizes: SizesProps;
	padding: number;
}

 const GridContext = React.createContext({
	 size: Platform.OS == "web" ? "lg" : "sm",
	 isDark: false,
	 colors: Colors.Light,
	 setScheme: () => {},

	});

export const useGrid = () => React.useContext(GridContext);


export interface GridProviderProps {
	padding?: number;
	breakpoints?: SizesProps;
	sizes?: SizesProps;
	showBreakpoints?: boolean;
	breakpointsColor?: string;
	children?: React.ReactNode;
}

export const useWindowResize = (breakpoints: SizesProps) => {
	const { width } = useWindowDimensions();

	const getSize = () => {
		if (width < breakpoints["xs"]) {
			return "xs";
		} else if (width >= breakpoints["xs"] && width < breakpoints["sm"]) {
			return "sm" ?? "xs";
		} else if (width >= breakpoints["sm"] && width < breakpoints["md"]) {
			return "md" ?? "sm" ?? "xs";
		} else if (width >= breakpoints["md"] && width < breakpoints["lg"]) {
			return "lg" ?? "md" ?? "sm" ?? "xs";
		} else {
			return "xl" ?? "lg" ?? "md" ?? "sm" ?? "xs";
		}
	};

	const size: SizeType = getSize();

	return size;
};

const defaultProps: GridProviderProps = {
	breakpoints: {
		xs: 500,
		sm: 730,
		md: 960,
		lg: 1450,
	},
	sizes: {
		xs: 12,
		sm: 6,
		md: 4,
		lg: 3,
		xl: 2,
	},
	padding: 16,
	showBreakpoints: false,
	breakpointsColor: "black",
};

export const GridProvider: React.FC<GridProviderProps> = (props) => {
	let { children, breakpoints, sizes, padding, breakpointsColor, showBreakpoints } = props;

	const size = useWindowResize(breakpoints);
		console.log(size);
	const renderBreakpoints = () => {
		if (!showBreakpoints) return null;

		const sizes = Object.keys(breakpoints);

		if (!sizes.length) return null;

		return sizes.map((size: string, index: number) => {
			const distance = breakpoints[size];

			if (!distance) return null;

			return <View
				key={index}
				style={[styles.breakpoint, { left: distance, backgroundColor: breakpointsColor }]}
			/>;
		});
	};


	
	    // Getting the device color theme, this will also work with react-native-web
		const colorScheme = useColorScheme(); // Can be dark | light | no-preference

		/*
		* To enable changing the app theme dynamicly in the app (run-time)
		* we're gonna use useState so we can override the default device theme
		*/
		const [isDark, setIsDark] = React.useState(colorScheme === "dark");
	
		   // Listening to changes of device appearance while in run-time
		React.useEffect(() => {
			setIsDark(colorScheme === "dark");
		}, [colorScheme]);
	
		const defaultTheme = {
			isDark,
			// Chaning color schemes according to theme
			colors: isDark ? Colors.Dark : Colors.Light,
			// Overrides the isDark value will cause re-render inside the context.  
			setScheme: (scheme) => setIsDark(scheme === "dark"),
		};

	return (
		<GridContext.Provider value={{defaultTheme, breakpoints, size, padding, sizes }}>
			{children}
			{renderBreakpoints()}
		</GridContext.Provider>
	);
};

GridProvider.defaultProps = defaultProps;

const styles = StyleSheet.create({
	breakpoint: {
		position: "absolute",
		width: 1,
		top: 0,
		bottom: 0,
	},
});
