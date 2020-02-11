import React, { Component } from "react";

export default class App extends Component {
  state = {
    code: "",
    name: "",
    date: "",
    validname: true,
    validcode:true,
    validdate:true
  };

  handelCode = event => {
    this.setState({ code: event.target.value });
    let value = event.target.value.replace(/[^0-9]/g,"");

   
   
    this.setState({
      code: value
        .padEnd(16, "*")
        .split("")
        .map((el, i) => ((i + 1) % 4 === 0 ? el + " " : el))
        .filter((element,i) => (i<16)? element : null )
  });
}

  handelName = event => {
    this.setState({ name: event.target.value.toUpperCase() });
    return event.target.value.length < 20
      ? this.setState({ validname: true })
      : this.setState({ validname: false });
  };
  handelValidthru = event => {
    this.setState({ date: event.target.value });
    let value = event.target.value;
  
    let MM = value.split('').filter((el,i) => (i<2)? el:null).join('');
    let YY = value.split('').filter((el,i) => (1<i && i<4)? el:null).join('');
    // console.log('this is yy ',YY)
    // console.log('this is mm ',MM)
    this.setState({ date: MM.padStart(2, "*").replace(/[^0-9]/g,"") + "/" + YY.padStart(2, "*").replace(/[^0-9]/g,"") });

    // let d = new Date()
    // let month = d.getMonth()
    // let year = d.getFullYear().toString().slice(2,4)
    // // console.log(year)

    this.setState({validdate:true})
    if (( (MM > 12) ) || (YY < 19) ) {  this.setState({validdate:false})}
  };
  
  render() {
    return (
      <div className="d-flex">
        <div
          className="container border text-white mt-5 mx-5 bg-info  p-3 "
          style={{ minHeight: "250px", width: "450px" }}
        >
          <div className="card-header text-right">
            <h5>Header</h5>
          </div>

          <div className="card-body">
            <div>
              <img
                src="https://img.icons8.com/office/30/000000/sim-card-chip.png"
                alt="30*30"
              />
            </div>
            <h6 className="card-title my-2">{this.state.code}</h6>
            <div className="text-right">
              <span className="m-3">
                <strong>{this.state.date}</strong>
              </span>
              <span>
                <img
                  width="70px"
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                  alt="30*30"
                />
              </span>
            </div>
            <div>
              <strong>{this.state.name}</strong>
            </div>
          </div>
        </div>

        <div
          className=" container m-2 text-left mt-5 "
          style={{ height: "250px", width: "600px" }}
        >
          <div className="input-group flex-nowrap my-4">
            <div className="input-group-prepend">
              <span
                className="input-group-text "
                style={{ width: "200px" }}
                id="addon-wrapping"
              >
                card CODE
              </span>
            </div>
            <input ///////////////////////////////  CODE
              type="text"
              className="form-control"
              placeholder="type here"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={event => this.handelCode(event)}
            />
          </div>

          <div className="input-group flex-nowrap my-4">
            <div className="input-group-prepend">
              <span
                className="input-group-text "
                style={{ width: "200px" }}
                id="addon-wrapping"
              >
                max 20 car , Upper Case
              </span>
            </div>
            <input ///////////////////////////////  USER NAME
              type="text"
              className="form-control"
              placeholder="type here"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={event => this.handelName(event)}
              style={
                this.state.validname === false
                  ? { background: "#f1bd1f" }
                  : null
              }
              value={
                this.state.validname === false
                  ? this.state.name.concat("   YOUR NAME IS TOO LONG  ")
                  : null
              }
            />
          </div>

          <div className="input-group flex-nowrap my-4">
            <div className="input-group-prepend">
              <span
                className="input-group-text"
                style={{ width: "200px" }}
                id="addon-wrapping"
              >
                MM/YY
              </span>
            </div>
            <input ///////////////////////////////  DATE
              type="text"
              className="form-control"
              placeholder="type here"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={event => this.handelValidthru(event)}
              value={this.state.date.replace(/[^0-9]/g,"")}
              style={(  this.state.validdate===false )? { background: "#f1bd1f" } : null}
            />
          </div>
        </div>
      </div>
    );
  }
}
