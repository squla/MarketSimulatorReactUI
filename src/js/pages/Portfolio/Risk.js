/**
 * Created by Michal on 2016-05-10.
 */
var React = require('react');

var CashValue = React.createClass(
    {
        render(){
            return (
                <div>
                    <label>Current Cash Value: {this.props.value}</label>
                </div>
            )
        }
    }
);

var PV = React.createClass(
    {
        render(){
            return (
                <di>
                    <label>PV: {this.props.value}</label>
                </di>
            )
        }
    }
);

var Delta = React.createClass(
    {
        render(){
            return (
                <div>
                    <label>Delta: {this.props.value}</label>
                </div>
            )
        }
    }
);

var Risk = React.createClass(
    {
        render(){
            return (
                <div>
                    <Delta value="0"/>
                    
                    <PV value="0"/>

                    <CashValue value="0"/>
                </div>
            )
        }
    }
);

export default Risk;

