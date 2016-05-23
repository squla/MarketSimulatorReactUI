/**
 * Created by Michal on 2016-05-10.
 */
var React = require('react');
import Button from 'react-bootstrap/lib/Button';
const buttonStyle = {
    //#b4b4b4
    color: "2a2a2a",
    background: "none",
    margin: "10px",
    border: "3px solid #2a2a2a",
    padding: "12px 22px",
    width: "220px"
};
var OptionTrades = React.createClass({
        render()
        {
            return (
                <div class="container text-center ">
                    <h1>OptionTrades</h1>
                    <div class="col-md-6 col-md-offset-3">
                        <div class="row text-left">
                            <label >Option Guid:</label>
                            <input type="text" name="option" class="form-control"/>
                        </div>
                        <div class="row text-left">
                            <label  >Quantity:</label>
                            <input type="text" name="quantity" class="form-control"/>
                        </div>

                        <div class="btn-group">
                            <Button style={buttonStyle} bSize="large">
                                Buy
                            </Button>
                            <Button style={buttonStyle} bSize="large">
                                Sell
                            </Button>
                        </div>
                    </div>
                </div>);
        }
    }
);


export default OptionTrades;