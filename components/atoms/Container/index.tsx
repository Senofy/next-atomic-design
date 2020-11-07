import styled from 'styled-components';
import { color, padding } from 'styled-system';


export interface ContainerProps {
  padding: number;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  ${color};
  ${padding};
  background-clip: border-box;
  border: 1px solid rgba(72, 94, 144, 0.16);
  border-radius: 0.25rem;
`;