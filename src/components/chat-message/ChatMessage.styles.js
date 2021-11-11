import styled from "styled-components";

import * as colors from "@qex/theme/colors";
import * as typo from "@qex/theme/typography";
import Avatar from "@qex/components/avatar/Avatar";

export const ChatMessageWrapper = styled.div`
  display: flex;
  padding: .45rem 2.8rem;
  width: 100%;
  justify-content: ${props => props.type === 'incoming' ? 'start' : 'end'};
  align-items: flex-end;
`;
export const MessageAvatar = styled(Avatar)`
  margin: 0 1rem;
`;
export const ChatMessageContent = styled.div`
  background-color: ${props => props.type === 'incoming' ? colors.gray2 : colors.grass};
  color: ${colors.white};
  padding: 1.1rem;
  width: 100%;
  max-width: 46.9rem;
  border-radius: ${colors.radius9};
  position: relative;
`;
export const ChatMessageUsername = styled.div`
  ${typo.TITLE_SML};
  margin-bottom: .5rem;
`;
export const ChatMessageText = styled.div`
  ${typo.TEXT};
  width: 100%;
  word-wrap: break-word;
`;

export const ChatMessageTime = styled.div`
  color: ${props => props.type === 'incoming' ? colors.grass : colors.gray4};
  float: right;
  width: 8rem;
`;