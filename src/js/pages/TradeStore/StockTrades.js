/**
 * Created by Michal on 2016-05-10.
 */
var React = require('react');
import Button from "react-bootstrap/lib/Button";
import Stocks from "../../store/Stocks";
const buttonStyle = {
    //#b4b4b4
    color: "2a2a2a",
    background: "none",
    margin: "10px",
    border: "3px solid #2a2a2a",
    padding: "12px 22px",
    width: "220px"
};

var StockTrades = React.createClass({
        getInitialState: function () {
            return {amount: 0, underlying: "", current_value: 100000};
        },
        ExecuteHandlerBuy: function () {
            if (this.state.underlying != "")
                Stocks.push({
                    underlying: this.state.underlying,
                    amount: this.state.amount,
                    current_value: this.state.current_value
                })
           
        },
        ExecuteHandlerSell: function () {
            if (this.state.underlying != "")
                Stocks.push({
                    underlying: this.state.underlying,
                    amount: -this.state.amount,
                    current_value: this.state.current_value
                })
        },
        handleChangeAmount: function (e) {
            this.setState({amount: parseInt(e.target.value)});
        },
        handleChangeUnderlying: function (e) {
            this.setState({underlying: e.target.value});
        },

        render()
        {
            return (
                <div class="container text-center">
                    <h1 class="">StockTrades</h1>
                    <div class="col-md-6 col-md-offset-3">

                        <div class="row text-left">
                            <label  >Underlying:</label>
                            <input type="text" name="Underlying" class="form-control"
                                   onChange={this.handleChangeUnderlying}/>
                        </div>
                        <div class="row text-left">
                            <label  >Quantity:</label>
                            <input type="text" name="quantity" class="form-control" onChange={this.handleChangeAmount}/>
                        </div>

                        <div class="btn-group">
                            <Button style={buttonStyle} bSize="large" onClick={this.ExecuteHandlerBuy}>
                                Buy
                            </Button>
                            <Button style={buttonStyle} bSize="large" onClick={this.ExecuteHandlerSell}>
                                Sell
                            </Button>
                        </div>
                    </div>

                </div>


            );
        }
    }
);


export default StockTrades;