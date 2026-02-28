// 공통 속성을 정의하는 파일

import { css } from "styled-components";

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`

export const flexRow = css`
  display: flex;
  flex-direction: row;
`

export const flexCenterColumn = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const flexCenterRow = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

// 공통 속성 정의
export const h1Bold = css`
  font-size: ${({theme}) => theme.FONT_SIZE["h1"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["bold"]};
  line-height: ${({theme}) => theme.FONT_LINE["h1"]};
`
export const h1Regular = css``
export const h1Thin = css``

//  ...

export const h3Regular = css`
  font-size: ${({theme}) => theme.FONT_SIZE["h3"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["regular"]};
  line-height: ${({theme}) => theme.FONT_LINE["h3"]};
`