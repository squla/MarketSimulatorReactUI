/**
 * Created by Michal on 2016-05-10.
 */
var React = require('react');
import Stocks from "../../store/Stocks";

var StockRow = React.createClass(
    {
        render(){
            return (
                <tr>
                    <td>{this.props.stock.underlying}</td>
                    <td>{this.props.stock.amount}</td>
                    <td>{this.props.stock.current_value}</td>
                </tr>
            );
        }
    }
);

var StockList = React.createClass(
    {
        render: function () {
            var rows = []
            this.props.stocks.forEach(function (stock) {
                rows.push(<StockRow stock={stock} key={stock.underlying}/>);
            }.bind(this));
            return (
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th class="text-center">Underlying</th>
                        <th class="text-center">Amount</th>
                        <th class="text-center">Current Value</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            )
        }
    }
);

var PortfolioStocks = React.createClass({
        render()
        {
            return (
                <div class="container text-center">
                    <h1>Stocks</h1>
                    <StockList stocks={Stocks}/>
                </div>);
        }
    }
);//this.props.route.stocks


export default PortfolioStocks;