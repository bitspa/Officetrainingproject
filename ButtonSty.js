import styled,{css} from 'styled-components';
 export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
&:hover{
  background-color: #00008B;
  color: white;
}
  ${props => props.primary && css`
    background: red;
    color: white;
  `}
  ${props => props.secondary && css`
  background: green;
  color: white;
`}
`;
export const Container = styled.div`
  text-align: center;
`;
