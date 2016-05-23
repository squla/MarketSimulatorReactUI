import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory, browserHistory} from "react-router";
import Layout from "./pages/Layout";
import PortfolioLayout from "./pages/Portfolio/PortfolioLayout";
import MarketData from "./pages/MarketData";
import TradeStoreLayout from "./pages/TradeStore/TradeStoreLayout";
import OptionTrades from "./pages/TradeStore/OptionTrades";
import TradeStoreOptions from "./pages/TradeStore/Options";
import CreateOptions from "./pages/TradeStore/CreatingOption";
import StockTrades from "./pages/TradeStore/StockTrades";
import Options from "./pages/Portfolio/PortfolioOptions";
import Stocks from "./pages/Portfolio/PortfolioStocks";
import TotalNationals from "./pages/Portfolio/PortfolioTotalNationals";
const app = document.getElementById('app');
var test = ["bar", "test"]


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={MarketData}></IndexRoute>
            <Route path="marketdata" name="marketdata" component={MarketData}></Route>
            <Route path="tradestoreLayout" name="tradestoreLayout" component={TradeStoreLayout}>
                <Route path="stocktrades" name="stocktrades" component={StockTrades}/>
                <Route path="optiontrades" name="optiontrades" component={OptionTrades}/>
                <Route path="options" name="options" component={TradeStoreOptions}/>
                <Route path="createoptions" name="createoptions" component={CreateOptions}/>
            </Route>
            <Route path="portfolio" name="portfolio" component={PortfolioLayout}>
                <Route path="options" name="options" component={Options}></Route>
                <Route path="stocks" name="stocks" component={Stocks}></Route>
                <Route path="totalnationals" name="totalnationals"
                       component={TotalNationals}></Route>
            </Route>
        </Route>
    </Router>,
    app);

