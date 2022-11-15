import styled from 'styled-components';
import photo1 from '../picture/rain.jpg';
 export const Paragraph = styled.p`
 text-align: center;
 color: #6082B6;
 color: #0818A8;
 display: flex;
 justify-content: end;
`;
export const Content = styled.div`
  background-image: url(${photo1});
  background-repeat: no-repeat;
  background-size:cover;
  object-fit: contain;
  width:100%;
  height:85vh;
`;
