/**
 * Created by Michal on 2016-05-10.
 */
import React, {Component} from "react";
import Button from 'react-bootstrap/lib/Button';
import OptionsList from '../../store/Options';
var DateTimeField = require('react-bootstrap-datetimepicker');
const buttonStyle = {
    color: "2a2a2a",
    background: "none",
    margin: "10px",
    border: "2px solid #c6c6c6",
    padding: "12px 0px",
    width: "115px"
};
const buttonStyle2 = {
    color: "2a2a2a",
    background: "none",
    margin: "10px",
    border: "3px solid #2a2a2a",
    padding: "12px 0px",
    width: "220px"
};




var CreatingOption = React.createClass({

        getInitialState: function () {
            return {
                underlying: '',
                notional: 0,
                direction: 'CALL',
                maturity: (new Date()).toDateString(),
                strike: 0,
                date: "20.05.2016 12:20:19",
                format: "DD.MM.YYYY HH:mm:ss",
                inputFormat: "DD.MM.YYYY HH:mm:ss",
                mode: "date"
            };
        },
        handleUnderlyingChange: function (e) {
            this.setState({underlying: e.target.value})
        },
        handleNotionalChange: function (e) {
            this.setState({notional: parseInt(e.target.value)})
        },
        handleDirectionChangeToPUT: function () {
            this.setState({direction: 'PUT'})
        },
        handleDirectionChangeToCALL: function () {
            console.log("click call");
            this.setState({direction: 'CALL'})
        },
        handleMaturityChange: function (e) {
            this.setState({maturity: e.target.value})
        },
        handleStrikeChange: function (e) {
            this.setState({strike: parseInt(e.target.value)})
        },
        handleDataChange: function (e) {
            console.log("newDate", e);
            this.setState({maturity: e});
            return this.setState({date: e});
        },
        handleSubmit: function () {
            OptionsList.push({
                underlying: this.state.underlying,
                id: this.randomid(28),
                notional: this.state.notional,
                maturity: this.state.maturity,
                direction: this.state.direction,
                strikes: this.state.strike,
                current_price: 0
            })
        },
        randomid: function (length) {
            var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP1234567890";
            var pass = "";
            for (var x = 0; x < length; x++) {
                var i = Math.floor(Math.random() * chars.length);
                pass += chars.charAt(i);
            }
            return pass;
        },

        render()
        {

            return (
                <div class="container text-center ">
                    <h1>Creating Options</h1>
                    <div class="col-md-6 col-md-offset-3">
                        <div class="row">
                            <div class="col-md-6 ">
                                <div class="row text-left">
                                    <label  >Maturity:</label>
                                    <DateTimeField
                                        dateTime={this.state.date}
                                        format={this.state.format}
                                        inputFormat={this.state.inputFormat}
                                        onChange={this.handleDataChange}
                                        viewMode={this.state.mode}
                                    />
                                </div>
                                <div class="row text-center">
                                    <div class="btn-group">
                                        <Button style={buttonStyle} bSize="small" onClick={this.handleDirectionChangeToPUT}>
                                            PUT
                                        </Button>
                                        <Button style={buttonStyle} bSize="small"
                                                onClick={this.handleDirectionChangeToCALL}>
                                            CALL
                                        </Button>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-5 col-md-offset-1">
                                <div class="row">
                                    <div class="row text-left">
                                        <label  >Underlying:</label>
                                        <input type="text" name="Underlying" class="form-control"
                                               onChange={this.handleUnderlyingChange}/>
                                        <label  >National:</label>
                                        <input type="text" name="National" class="form-control"
                                               onChange={this.handleNotionalChange}/>
                                        <label  >Strike:</label>
                                        <input type="text" name="Strike" class="form-control"
                                               onChange={this.handleStrikeChange}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row text-center">
                            <Button style={buttonStyle2} bSize="small" onClick={this.handleSubmit}>
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>);
        }
    }
    )
    ;

//
// <input type="text" name="Maturity" class="form-control"
// onChange={this.handleMaturityChange}/>
export default CreatingOption;