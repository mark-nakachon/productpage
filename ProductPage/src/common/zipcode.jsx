import React, { Component } from "react";

class Zipcode extends Component {
  state = {};
  render() {
    return (
      <>
        <div style={{ display: "inline" }}>
          <div className="row">
            <div className="col-md-1">
            <i className="fa fa-map-marker fa-3x" style={{paddingBottom: '10px'}}></i>
            </div>
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                id="zip"
                placeholder="Enter Pincode"
                required
              />
              <div className="invalid-feedback">Zip code required.</div>
            </div>
            <div className="col-md-6">
                Enter Pincode to know shipping cost
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Zipcode;
