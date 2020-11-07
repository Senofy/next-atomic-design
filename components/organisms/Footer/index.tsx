import { FC } from 'react';

import { FooterLink, P } from '../../atoms';
import { Wrapper, LinkWrapper } from './styles'


const Footer: FC = () => {
  return (
    <Wrapper>
      <P fontSize={11}>
        © 2019 DASHFORGE V1.0.0. CREATED BY THEMEPIXELS
      </P>
      <LinkWrapper>
        <FooterLink href="#">LICENSES</FooterLink>
        <FooterLink href="#">CHANGE LOG</FooterLink>
        <FooterLink href="#">GET HELP</FooterLink>
      </LinkWrapper>
    </Wrapper>
  )
}

export default Footer;
