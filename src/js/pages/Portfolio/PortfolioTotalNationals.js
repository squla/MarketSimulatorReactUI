/**
 * Created by Michal on 2016-05-10.
 */
var React = require('react');
import Notionals from '../../store/Notionals';
const containerStyle = {
    marginTop: "60px"
};


var NotionalsRow = React.createClass(
    {
        render(){
            return (
                <tr>
                    <td>{this.props.stock.underlying}</td>
                    <td>{this.props.stock.notional}</td>
                </tr>
            );
        }
    }
);

var NotionalsList = React.createClass(
    {
        render: function () {
            var rows = []
            this.props.stocks.forEach(function (stock) {
                rows.push(<NotionalsRow stock={stock} key={stock.underlying}/>);
            }.bind(this));
            return (
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th class="text-center">Underlying</th>
                        <th class="text-center">Notional</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            )
        }
    }
);

var PortfolioTotalNationals = React.createClass({
        render()
        {
           // this.props.route.foo.push("kiwi");
            return (
                <div class="container text-center " >
                    <h1>Portfolio Total Nationals</h1>
                    <div>
                        <NotionalsList stocks={Notionals}/>
                    </div>

                </div>);
        }
    }
);

//this.props.route.notionals


export default PortfolioTotalNationals;