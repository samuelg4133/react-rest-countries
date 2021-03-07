import React from "react";
import Header from "./components/Header";
import Main from "./pages/Main";

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (<>
    <Header title='Rest Countries'/>
    <Main/>
    <GlobalStyles/>
  </>
  )
  ;
};

export default App;
