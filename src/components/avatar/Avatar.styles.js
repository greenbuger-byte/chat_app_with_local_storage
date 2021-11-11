import styled from "styled-components";

import * as colors from "@qex/theme/colors";

export const AvatarWrapper = styled.div`
  width: ${ props =>  props.size ? `${ props.size / 10 }rem`:'4.5rem'};
  height: ${ props =>  props.size ? `${ props.size / 10 }rem`:'4.5rem'};
  border-radius: ${colors.radius50};
`;

export const AvatarImage = styled.img`
  object-fit: cover;
  width: ${ props =>  props.size ? `${ props.size / 10 }rem`:'4.5rem'};
  height: ${ props =>  props.size ? `${ props.size / 10 }rem`:'4.5rem'};
`