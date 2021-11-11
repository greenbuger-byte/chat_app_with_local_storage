
const baseStyle = (fontSize, fontWeight, lineHeight) => ({
    fontSize,
    fontWeight,
    lineHeight,
});

export const TITLE_BIG = {
    ...baseStyle('2.6rem', 600, '3.147rem'),
}

export const TITLE_MID_LIGHT = {
    ...baseStyle('2.6rem', 300, '3.147rem')
}

export const TITLE_SML = {
    ...baseStyle('2rem', 700, '2.42rem'),
}

export const TEXT = {
    ...baseStyle('1.943rem', 400, '2.358rem')
};