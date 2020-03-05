import React, { Component, Fragment } from "react";
import { MDBCol, MDBRow, MDBContainer } from "mdbreact";
import SplitPane from "react-split-pane";
import "./index.css";
import CubeContainer from './components/CubeContainer';
import OperationBar from './components/OperationBar';

class App extends Component {
  render() {
    return (
      <SplitPane
        split="vertical"
        minSize={400}
        defaultSize={800}
        maxSize={-500}
      >
        <CubeContainer />
        <OperationBar />
      </SplitPane>
    );
  }
}

export default App;
