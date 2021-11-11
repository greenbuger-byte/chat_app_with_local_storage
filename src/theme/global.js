import { createGlobalStyle } from "styled-components";

import reset from "@qex/theme/reset";
import normalize from "@qex/theme/normalize";
import scrollbars from "@qex/theme/scrollbars";

export const Global = createGlobalStyle`
    ${reset};
    ${normalize};
    ${scrollbars};
`;