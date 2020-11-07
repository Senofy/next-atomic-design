import styled, { css } from 'styled-components';
import {
  color, fontFamily, fontSize, fontWeight, lineHeight
} from 'styled-system'


export interface HeadingProps {
  fontWeight?: number;
  fontSize?: number;
}

export interface ParagraphProps {
  fontSize?: number;
  lineHeight: number;
}

const headingStyles = css`
  ${color};
  ${fontFamily};
  ${fontSize};
  ${fontWeight};
  ${lineHeight};
  line-height: 1.25;
  margin: 0;
`;

// Heading
const H6 = styled.h6<HeadingProps>`${headingStyles};`;
const H5 = styled.h5<HeadingProps>`${headingStyles};`;
const H4 = styled.h4<HeadingProps>`${headingStyles};`;
const H3 = styled.h3<HeadingProps>`${headingStyles};`;
const H2 = styled.h2<HeadingProps>`${headingStyles};`;
const H1 = styled.h1<HeadingProps>`${headingStyles};`;

export const Heading = {
  H1, H2, H3, H4, H5, H6
}

// Paragraph
export const P = styled.p<ParagraphProps>`
  ${color};
  ${fontFamily};
  ${fontSize};
  ${fontWeight};
  ${lineHeight};
`;

P.defaultProps = {
  fontSize: 12
}