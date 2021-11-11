import styled from "styled-components";

import * as colors from "@qex/theme/colors";
import  * as typo from "@qex/theme/typography";
import Avatar from "@qex/components/avatar/Avatar";

export const HeaderWrapper = styled.div`
  ${typo.TITLE_BIG};
  background-color: ${colors.darken};
  width: 100%;
  height: 7.5rem;
`;

export const StyledAvatar = styled(Avatar)`
  margin: 0 1.8rem;
`

export const HeaderContent = styled.div`
  color: ${colors.white};
  display: flex;
  align-items: center;
  height: 7.5rem;
  padding: 0 1rem;
`;