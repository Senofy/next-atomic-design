import styled from 'styled-components'
import { font, palette } from 'styled-theme'

export const Wrapper = styled.div`
    background-color: white;

    height: 60px;
    width: 100%;
    border-bottom: 1px solid rgba(72, 94, 144, 0.16);
    padding: 0 20px;
    display: grid;
    align-items: center;

    @media screen and (min-width: 992px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
    }
`

export const LinkWrapper = styled.div`
    justify-self: center;

    display: flex;
    & > :not(:first-child) {
        margin-left: 30px;
    }
`

export const ExtraWrapper = styled.div`
    justify-self: end;
`