import React from "react";
import {Link} from "react-router";
import Button from 'react-bootstrap/lib/Button';
import Footer from "../../components/layout/Footer";
import Nav from "../../components/layout/Nav";

var ReactRouterBootstrap = require('react-router-bootstrap')
    , NavItemLink = ReactRouterBootstrap.NavItemLink
    , ButtonLink = ReactRouterBootstrap.ButtonLink
    , LinkContainer = ReactRouterBootstrap.LinkContainer
    , ListGroupItemLink = ReactRouterBootstrap.ListGroupItemLink;




const buttonStyle = {
    //#b4b4b4
    color: "2a2a2a",
    background: "none",
    margin: "10px",
    border: "3px solid #2a2a2a",
    padding: "12px 22px",
    width: "220px"
};


export default class PortfolioLayout extends React.Component {
    render() {
        const {location} = this.props;
        const containerStyle = {
            marginTop: "60px"
        };
        console.log("layout");
        return (

            <div style={containerStyle}>
                <div>
                    <div class="span7 text-center">
                        <div class="btn-group ">
                            <LinkContainer to="/portfolio/options">
                                <Button style={buttonStyle} bSize="large">
                                    Options
                                </Button>
                            </LinkContainer>
                            <LinkContainer to="/portfolio/stocks">
                                <Button  style={buttonStyle} bSize="large">
                                    Stocks
                                </Button>
                            </LinkContainer>
                            <LinkContainer to="/portfolio/totalnationals">
                                <Button  style={buttonStyle} bSize="large">
                                    Total Nationals
                                </Button>
                            </LinkContainer>

                        </div>
                    </div>

                    {this.props.children}
                </div>
            </div>

        );
    }
}
// <button type="button" class="btn  btn-lg" style={buttonStyle}>Stocks</button>
// <button type="button" class="btn  btn-lg" style={buttonStyle}>Total Nationals</button>