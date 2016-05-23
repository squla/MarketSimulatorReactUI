/**
 * Created by Michal on 2016-05-10.
 */
//var React = require('react');
import React, { Component } from "react";
import Options from '../../store/Options';



var OptionRow = React.createClass(
    {
        render(){

            return (
                <tr>
                    <td>{this.props.option.underlying.toString()}</td>
                    <td>{this.props.option.id.toString()}</td>
                    <td>{this.props.option.notional.toString()}</td>
                    <td>{this.props.option.maturity.toString()}</td>
                    <td>{this.props.option.direction.toString()}</td>
                    <td>{this.props.option.strikes.toString()}</td>
                    <td>{this.props.option.current_price.toString()}</td>
                    
                </tr>
            );
        }
    }
);

var OptionList = React.createClass(
    {
        render: function () {
            var rows = [];

            this.props.options.forEach(function (option) {
                rows.push(<OptionRow option={option} key={option.id}/>);
            }.bind(this));
            return (
                <table class="table table-hover">
                    <thead >
                    <tr >
                        <th class="text-center">Underlying</th>
                        <th class="text-center">ID</th>
                        <th class="text-center">Notional</th>
                        <th class="text-center">Maturity</th>
                        <th class="text-center">Direction</th>
                        <th class="text-center">Strike</th>
                        <th class="text-center">Current Price</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            )
        }
    }
);

var PortfolioOptions = React.createClass({
        render()
        {
            return (
                <div class="container text-center">
                    <h1>Portfolio Options</h1>

                    <OptionList options={Options}/>

                </div>);
        }
    }
);//this.props.route.options


export default PortfolioOptions;