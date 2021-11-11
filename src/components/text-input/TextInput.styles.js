import styled from "styled-components";
import * as colors from "@qex/theme/colors";
import * as typo from "@qex/theme/typography";

export const TextInputWrapper = styled.div`
  background-color: ${colors.gray3};
  width: 100%;
  height: 6.9rem;
  display: flex;
  align-items: center;
  padding: 0 2.5rem;
`;

export const StyledTextArea = styled.textarea`
  ${typo.TITLE_MID_LIGHT};
  border: none;
  outline: none;
  background: none;
  color: ${colors.white};
  width: 100%;
  height: 7rem;
  overflow: hidden;
  margin: .4rem 0;
  padding: 2rem .5rem;
  display: flex;
  align-items: center;
`;

export const SendButton = styled.button`
  border: none;
  outline: none;
  width: 3rem;
  background: none;
  height: 3rem;
  cursor: pointer;
  transition: .3s;
  svg {
    path {
      fill: ${colors.grass};
    } 
  }
  :disabled {
    svg{
      path{
        fill: ${colors.gray}
      }
    }
  }
`;
