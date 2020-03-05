import React, { Component } from "react";
import { MDBAlert, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import AlgoMenu from "./AlgoMenu";

class OperationBar extends Component {
  render() {
    return (
      <div class="container my-4">
        <div class="row">
          <div class="col-6 col-md-4">
            <div class="text-center">
              <button
                type="button"
                class="btn btn-outline-primary waves-effect"
              >
                Primary
              </button>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="text-center">
              <button
                type="button"
                class="btn btn-outline-primary waves-effect"
              >
                Primary
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6 col-md-4">
            <div class="text-center">
              <button
                type="button"
                class="btn btn-outline-primary waves-effect"
              >
                Primary
              </button>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="text-center">
              <button
                type="button"
                class="btn btn-outline-primary waves-effect"
              >
                Primary
              </button>
            </div>
          </div>
        </div>
        <div class="row">
            <div class="text-center">
              <AlgoMenu />
            </div>
        </div>
      </div>
    );
  }
}

export default OperationBar;
