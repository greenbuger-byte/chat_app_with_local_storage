import styled from "styled-components";
import * as colors from "@qex/theme/colors";
import * as typo from "@qex/theme/typography";

export const MessageListWrapper = styled.div`
  flex: 1;
  min-height: calc(100vh - 14.4rem);
  overflow-y: auto;
  padding: 1rem 0;
  position: relative;
`;

export const LoadingCover = styled.div`
  ${typo.TITLE_MID_LIGHT}
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.darken};
  width: 100%;
  height: calc(100vh - 14.4rem);
  color: ${colors.white};
`;