/** @jsx React.DOM */
var React = require('react');
var AppActions = require("../../actions/app-actions");
var Store = require("../../stores/Flikr-store");


var FlickrCell = React.createClass({
    render:function(){
        return (<div>
            HEllo I ama a cell
            </div>
        )
    }

})

var FlikrComponent = React.createClass({
    proptypes:{
        flikrPublicPhotos:React.PropTypes.array
    },
    // The props are set not to change
    getDefaultProps:function(){
        return { }
    },
    // The state is mutable and takes
    getInitialState:function(){
        return { flikrPublicPhotos:Store.getFlikrPublicPhotos(),
            id:0
        }
    },
    componentWillMount:function(){
        Store.addChangeListener(this._onChange)
    },
    _onChange:function(){
        this.setState({flikrPublicPhotos: Store.getFlikrPublicPhotos()})
        console.log("ON CHANGE : ", this.state.flikrPublicPhotos);
    },
    flikrSearch:function(){
        Store.loadPublicPhotos();
    },
    render:function(){
        var results = this.state.flikrPublicPhotos;

        return (<div class = "flikr">
            <h3>Flikr component</h3>
            <button type="button" onClick={this.flikrSearch}>Search</button>
            <ul>
                {results.map(function(result) {
                    return <li key={result.id}>
                <img src={result.url_c} />
            </li>;
                })
            }
            </ul>
        </div>)
    }
})

module.exports = FlikrComponent;