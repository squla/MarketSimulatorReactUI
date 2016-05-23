import React from "react";
import {IndexLink, Link} from "react-router";

export default class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            collapsed: true,
        };
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    render() {
        const {location} = this.props;
        const {collapsed} = this.state;
        const featuredClass = location.pathname === "/" ? "active" : "";
        const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
        const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
        const marketClass = location.pathname.match(/^\/marketdata/) ? "active" : "";
        const tradeClass = location.pathname.match(/^\/tradestoreLayout/) ? "active" : "";
        const navClass = collapsed ? "collapse" : "";

        return (
            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li class={marketClass}>
                                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Market Data</IndexLink>
                            </li>
                            <li class={tradeClass}>
                                <Link to="tradestoreLayout" onClick={this.toggleCollapse.bind(this)}>Trade Store</Link>
                            </li>
                            <li class={settingsClass}>
                                <Link to="portfolio" onClick={this.toggleCollapse.bind(this)}>Portfolio</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
