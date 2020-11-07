import { FC } from 'react'
import { Img, NavLink } from '../../atoms'
import { ImageWrapper, Wrapper, LinkWrapper, ExtraWrapper } from './styles'

const NavBar: FC = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Img
          src={'/img/logo.png'}
          width={100}
          height={50}
          layout="fixed"
        />
      </ImageWrapper>
      <LinkWrapper>
        <NavLink href="#">Dashboard</NavLink>
        <NavLink href="#">Apps</NavLink>
      </LinkWrapper>
      <ExtraWrapper></ExtraWrapper>
    </Wrapper>
  )
}

export default NavBar
