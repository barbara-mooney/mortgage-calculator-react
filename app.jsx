import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
    constructor() {
      super();
      this.state = {
        balance: ' ',
        rate: ' ',
        term: '15',
        output: ' ',
      }  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.calculatePayment = this.calculatePayment.bind(this);
    }
  
    handleInputChange(event) {
      event.preventDefault()
      this.setState({
        [event.target.name]: event.target.value 
        });
      }

    calculatePayment (event) {
      event.preventDefault();
      const p = Number(this.state.balance);
      const r = Number(this.state.rate) / 1200;
      const n = Number(this.state.term) * 12;
      const monthlyPymt = (p * r*(Math.pow((1+r), n)) / (Math.pow((1+r), n) -1)).toFixed(2);
      this.setState({
        output: "$" + monthlyPymt + " is your payment",
      })
    }
  
    render() {
      let { balance , rate , term } = this.state;
      return (
        <div className='container'>
          
            <h3>Mortgage Calculator</h3>
            <div className="form-group">
              <label className="col-sm-2 control-label">Loan Balance</label>
              <div className="col-sm-10">
                <input 
                  onChange={this.handleInputChange}
                  name="balance"
                  type="number" 
                  className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Interest Rate (%)</label>
              <div className="col-sm-10">
                <input 
                  onChange={this.handleInputChange}
                  name="rate"
                  type="number" 
                  step="0.01"
                  className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Loan Terms (years)</label>
                <select 
                  onChange={this.handleInputChange}
                  name="term" 
                  className="form-control" >
                  <option>15</option>
                  <option>30</option>
                </select>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button 
                  name="button"
                  type="button" 
                  className="btn btn-default"
                  onClick={this.calculatePayment}
                    >Calculate</button>
              </div>
              <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10"
                name="output"
                id="output"
                type="number" 
                >{this.state.output}
              </div>
            </div>
            </div>
        </div>
      );
    }
  }