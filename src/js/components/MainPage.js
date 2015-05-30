/** @jsx React.DOM */
var React = require('react');
var AppActions = require("../actions/app-actions");
var Store = require("../stores/app-store");

var BoidFlock = require('../libs/BoidFlock');


var MainPage = React.createClass({
    proptypes:{},

    handleClick:function(){
        AppActions.testAction(1);
    },
    componentDidMount:function(){
        Store.addChangeListener(this.onChange)
    },
    onChange:function(){

    },
    render:function(){
        return <div class="main-page">
            <MainPageBlurb />
        </div>
    }
})

var MainPageBlurb = React.createClass({
    getInitialState:function(){
        return {topOffset: Store.getScreenSize().height/5 }
    },
    getOffset:function(){
        return "translate(100px,"+this.state.topOffset+"px)"
    },
    configs:[
        {   topOffset:1000,
            leftOffset:100,
            opacity:0,
            animationDelays:[500, 1000, 1500, 2000],
            leftDest:200,
            topDest:0,
            copy:"Hello, I'm Graham"
        },
        {   topOffset:1000,
            leftOffset:100,
            opacity:0,
            animationDelays:[1000, 1500, 2000, 2500],
            leftDest:200,
            topDest:20,
            copy:"I'm a software engineer"
        },
        {   topOffset:1000,
            leftOffset:100,
            opacity:0,
            animationDelays:[1500, 2000, 2500, 3000],
            leftDest:200,
            topDest:40,
            copy:"This is my site."
        },
        {   topOffset:1000,
            leftOffset:100,
            opacity:0,
            animationDelays:[1500, 2000, 2500, 3000],
            leftDest:200,
            topDest:60,
            copy:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    ],
    componentDidMount:function(){
        Store.addChangeListener(this.onChange)
        this.onChange();
        console.log("Main did mount")
    },
    componentWillUnmount:function(){
        Store.removeChangeListener(this.onChange)
    },
    onChange:function(){
        console.log("Store.getScreenSize().height = ", Store.getScreenSize().height)
        this.setState({ 'topOffset': Store.getScreenSize().height/5 })
    },
    getStyle:function(){
        return {
            "MsTransform": this.getOffset(),
            "WebkitTransform": this.getOffset(),
            "transform": this.getOffset(),
            "color": "#cccccc",
            "fontSize":"20px",
            "width":"300px",
            "WebkitTransition": ".5s ease-in-out",
            "MozTransition": ".5s ease-in-out",
            "OTransition": ".5s ease-in-out",
            "transition": ".5s ease-in-out"
        }
    },
    render:function(){
        return <div style={this.getStyle()}>
        {
           this.configs.map(function(d,i){
                return <IntroCell config={d} />
            })
        }
        </div>
    }
})


/*
This is the individula cell
*/


var IntroCell = React.createClass({
    getInitialState:function(){
        return {topOffset:1000,
            leftOffset:100,
            opacity:0,
            animationDelays:[500, 1000, 1500, 2000],
            leftDest:200,
            topDest:400,
            copy:"This is the default copy."
        }
    },
    getDefaultProps:function(){
        return{ config:{}}
    },
    componentWillMount:function(){
        for(var prop in this.props.config){
            this.state[prop] = this.props.config[prop]
        }
    },
    getOffset:function(){
        return "translate("+this.state.leftOffset+"px,"+this.state.topOffset+"px)"
    },
    getOpacity:function(){
        return this.state.opacity;
    },
    setOpacity:function(value){
        if(isNaN(value)){return};
         this.setState({"opacity":value});
    },
    setTopOffset:function(value){
        if(isNaN(value)) return;
        this.setState({'topOffset':value})
    },
    setLeftOffset:function(value){
        if(isNaN(value)) return;
        this.setState({'leftOffset':value})
    },
    getStyle:function(){
        return {
            "MsTransform": this.getOffset(),
            "WebkitTransform": this.getOffset(),
            "transform": this.getOffset(),
            "color": "#cccccc",
            "fontSize":"20px",
            "width":"300px",
            "opacity":this.getOpacity(),
            "WebkitTransition": ".5s ease-in-out",
            "MozTransition": ".5s ease-in-out",
            "OTransition": ".5s ease-in-out",
            "transition": ".5s ease-in-out"
        }
    },
    componentDidMount:function(){
        this.state.ani0 = setTimeout(this.anim0, this.state.animationDelays[0])
        this.state.ani1 = setTimeout(this.anim1, this.state.animationDelays[1])
        this.state.ani2 = setTimeout(this.anim2, this.state.animationDelays[2])
        this.state.ani3 = setTimeout(this.anim3, this.state.animationDelays[3])
    },
    anim0:function(){
        console.log("--Ani0 ")
        this.setOpacity(.7)
    },
    anim1:function(){
        console.log("--Ani1 ")
        this.setLeftOffset(this.state.leftDest);
    },
    anim2:function(){
        console.log("--Ani2")
        this.setTopOffset(this.state.topDest);
    },
    anim3:function(){
        console.log("--Ani3 ")
        this.setOpacity(.41)
    },
    render:function(){
        return  <div style={this.getStyle()}>
                     {this.state.copy}
                </div>
    }

})

module.exports = MainPage;