import Router from "./router/router";
import styled from 'styled-components';

const Lay = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function App() {
  return (
    <Lay>
      <Router/>
    </Lay>
  );
}