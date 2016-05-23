/**
 * Created by Michal on 2016-05-10.
 */
//var React = require('react');
import React, {Component} from "react";
import {render} from "react-dom";

const containerStyle = {
    marginTop: "60px"
};


import Form from "react-jsonschema-form";

const schema = {
    title: "Todo",
    type: "object",
    required: ["title"],
    properties: {
        title: {type: "string", title: "Title", default: "A new task"},
        done: {type: "boolean", title: "Done?", default: false}
    }
};

const formData = {
    title: "First task",
    done: true
};

const log = (type) => {
    console.log.bind(console, type)
};

const onSubmit = ({formData}) => {
    NOTIONALS.push({underlying: 'MSFTT', notional: '0000000'});

};


var TradeStore = React.createClass({

        render()
        {
            return (
                <div class="container" style={containerStyle}><h1>TradeStore</h1>
                    <Form schema={schema}
                          formData={formData}
                          onChange={log("changed")}
                          onSubmit={onSubmit}
                          onError={log("errors")}/>

                    {this.props.test}
                </div>


            );
        }
    }
);

//<StockForm stocks={this.props.stocks}/>
export default TradeStore;