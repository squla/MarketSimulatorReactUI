/**
 * Created by Michal on 2016-05-10.
 */
var React = require('react');


var Editor = React.createClass({
    displayName: 'Editor',
    propTypes: {
        name: React.PropTypes.string.isRequired
    },
    getInitialState: function() {
        return {
            value: this.props.name
        };
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    render: function() {
        return (
            <form id="noter-save-form" method="POST">
                <textarea id="noter-text-area" name="textarea" value={this.state.value} onChange={this.handleChange}></textarea>
                <input type="submit" value="Save" />
            </form>
        );
    }
});


var Options = React.createClass({
        render()
        {
            // this.props.route.foo.push("kiwi");
            return (
                <div class="container text-center " >
                    <h1>Options</h1>
                    <Editor name="Test" />
                </div>);
        }
    }
);




export default Options;