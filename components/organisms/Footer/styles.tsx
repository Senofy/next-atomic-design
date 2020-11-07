import styled from 'styled-components'


export const Wrapper = styled.div`
  background-color: #fafbfc;
  border-top: 1px solid rgba(72, 94, 144, 0.16);
  padding: 15px 25px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export const LinkWrapper = styled.div`
  justify-self: center;
  display: flex;
  & > :not(:first-child) {
    margin-left: 30px;
  }
`;