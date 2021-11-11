import * as colors from "@qex/theme/colors";
import { family } from "@qex/theme/fonts";

const reset = `*,
*::before,
*::after {
    box-sizing: border-box;
    font-family: inherit;
    letter-spacing: 0;
    margin: 0;
    padding: 0;
    resize: none;
}

html {
    text-rendering: optimizeLegibility;
    font-kerning: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 62.5%;
    /* Text may be inflated in this exact proportion - mobile devices */
    text-size-adjust: 100%;
}

body {
    overflow-x: hidden;
    color: ${colors.white};
    background: ${colors.dark};
    font-family: ${family.inter};
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    line-height: 1.4;
}

html,
    body {
    height: 100%;
    margin: 0;
    padding: 0;
}

body,
    #root {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
}

#root {
    min-height: 100%;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
}

ul,
    li {
    list-style: none;
}

input[type='search']::-ms-clear,
input[type='search']::-ms-reveal {
    display: none;
    height: 0;
    width: 0;
}
input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
    display: none;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
    margin: 0;
    -webkit-appearance: none;
}

select::-ms-expand {
    display: none;
}

/**
 * remove firefox red box shadow on invalid fields
 */
:not(output):-moz-ui-invalid {
    box-shadow: none;
}

:not(output):-moz-ui-invalid:-moz-focusing {
    box-shadow: none;
}
`;

export default reset;
