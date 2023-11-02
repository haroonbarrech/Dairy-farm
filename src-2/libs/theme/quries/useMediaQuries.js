import { useWindowDimensions } from 'react-native';


const MIN_WIDTH = 'minWidth';
const MAX_WIDTH = 'maxWidth';
const MIN_HEIGHT = 'minHeight';
const MAX_HEIGHT = 'maxHeight';

const ORIENTATION = 'orientation';
const LANDSCAPE = 'landscape';
const PORTRAIT = 'portrait';
 const useMediaQuery = (query) => {
    const { width, height } = useWindowDimensions();
    return parseQuery(query, width, height);
};

const parseQuery = (query, width, height) =>
    Object.keys(query)
        .map(key => matchQuery(key, query[key], width, height))
.reduce((sum, next) => sum && next, true);

const matchQuery = (
    key,
    value,
    width,
    height,
) => {
    switch (key) {
        case MIN_WIDTH:
            return value <= width;
        case MAX_WIDTH:
            return value >= width;
        case MIN_HEIGHT:
            return value <= height;
        case MAX_HEIGHT:
            return value >= height;
        case ORIENTATION:
            return determineOrientation(value, width, height);
        default:
            console.warn(
                `Incorrect media query type. Use query types: ${MIN_WIDTH}, ${MAX_WIDTH}, ${MIN_HEIGHT}, ${MIN_HEIGHT}, or ${ORIENTATION}.`,
            );
            return false;
    }
};

const determineOrientation = (
    value,
    width,
    height,
) => {
    if (width > height) {
        return value === LANDSCAPE;
    }
    return value === PORTRAIT;
};
export const applyMedia = (media, style) => {
    if(media) {
        return style;
    }
}


const useDefaultQuery = () => {
    const xsp = useMediaQuery({
        minWidth: 360,
        maxWidth: 480,
        orientation: 'portrait',
    });
    const smp = useMediaQuery({
        minWidth: 480,
        maxWidth: 767,
        orientation: 'portrait',
    });
    const mdp = useMediaQuery({
        minWidth: 768,
        maxWidth: 992,
        orientation: 'portrait',
    });
    const xlp = useMediaQuery({
        minWidth: 993,
        maxWidth: 1192,
        orientation: 'portrait',
    });
    const xxlp = useMediaQuery({
        minWidth: 1193,
        maxWidth: 1396,
        orientation: 'portrait',
    });


    // landscape queries start

    const xsl = useMediaQuery({
        minWidth: 360,
        maxWidth: 480,
        orientation: 'landscape',
    });
    const sml = useMediaQuery({
        minWidth: 480,
        maxWidth: 767,
        orientation: 'landscape',
    });
    const mdl = useMediaQuery({
        minWidth: 768,
        maxWidth: 992,
        orientation: 'landscape',
    });
    const xll = useMediaQuery({
        minWidth: 993,
        maxWidth: 1192,
        orientation: 'landscape',
    });
    const xxll = useMediaQuery({
        minWidth: 1193,
        maxWidth: 1366,
        orientation: 'landscape',
    });


    return { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll }
}
export{ useDefaultQuery, useMediaQuery, parseQuery };