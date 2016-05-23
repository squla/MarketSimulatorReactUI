var React = require('react');
import Button from "react-bootstrap/lib/Button";
const containerStyle = {
    marginTop: "60px"

};

var Stock = React.createClass(
    {

        render(){
            if (this.props.stock.Price >= this.props.stock.OldPrice)
                return (
                    <Button bsSize="xsmall" bsStyle="success">
                        {this.props.stock.Name}
                        <br/> {this.props.stock.Price}
                    </Button>);
            if (this.props.stock.Price < this.props.stock.OldPrice) {
                return (
                    <Button bsSize="xsmall" bsStyle="danger">
                        {this.props.stock.Name}
                        <br/> {this.props.stock.Price}
                    </Button>);
            }
            if (this.props.stock.Price == this.props.stock.OldPrice)
                return (
                    <Button bsSize="xsmall" bsStyle="info">
                        {this.props.stock.Name}
                        <br/> {this.props.stock.Price}
                    </Button>);
        }
    }
);


var ActualStockPrices = React.createClass(
    {
        render: function () {
            var rows = [];
            this.props.stocks.forEach(function (stock) {
                rows.push(<Stock stock={stock} key={stock.Name} handler={this.props.handler}/>)
            }.bind(this));
            return (
                <div class="btn-group">
                    {rows}
                </div>
            )
        }
    }
);


var HistoricalStockPrices = React.createClass(
    {
        render(){
            var t = [];
            for (var k in  this.props.list) {
                t.push(k);
            }

            return (

                <div>Not Implemented {t}</div>
            )

        }
    }
);

var MarketData = React.createClass(
    {

        getInitialState: function () {
            return {allStocks: {}, selectedStocks: {}, currentStocks: []};
        },
        componentWillMount: function () {
            var ws = new WebSocket('ws://karnicki.pl/api/WSChat');

            ws.onmessage = function (evt) {
                var option = JSON.parse(evt.data);
                var notfound = true;
                var tmp = this.state.currentStocks;
                tmp.forEach(function (stock) {
                    if (stock.Name == option.Name) {
                        stock.Price = option.Price;
                        stock.OldPrice = option.OldPrice;
                        notfound = false;
                    }
                }.bind(this));

                if (notfound)
                    tmp.push({
                        Name: option.Name,
                        Price: option.Price,
                        OldPrice: option.OldPrice
                    });

                this.setState({currentStocks: tmp});
                if (this.state.allStocks[option.Name] == undefined)
                    this.state.allStocks[option.Name] = [];
                if (this.state.allStocks[option.Name].length == 49)
                    this.state.allStocks[option.Name].pop();

                this.state.allStocks[option.Name].push({Price: option.Price, TimestampUtc: option.TimestampUtc})

            }.bind(this);

        },
        render(){
            return (
                <div class="container">
                    <div class=" span7 text-center" style={containerStyle}>
                        <h1>Market Data</h1>
                    </div>
                    <div class="well span7 text-center">
                        <h2>Actual Stock Prices</h2>
                        <ActualStockPrices stocks={this.state.currentStocks} handler={this.handleActiveStock}/>
                    </div>
                    <div class="well span7 text-center">
                        <h2>Historical Stock Prices </h2>

                        <HistoricalStockPrices list={this.state.allStocks}/>
                    </div>
                </div>
            );
        }
    });

export default MarketData;
