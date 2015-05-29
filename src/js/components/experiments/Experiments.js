/** @jsx React.DOM */
var React = require('react');
var AppActions = require("../../actions/app-actions");
var Store = require("../../stores/app-store");



var Experiments = React.createClass({
    proptypes:{},
    getInitialState:function(){
    return {leftOffset: 200, topOffset: 300}
    },
    getDefaultProps:function(){
        return {experiment_list:[
            {"title":"Spirograph", link:"/#/experiments/spirograph/"},
            {"title":"Spirograph", link:"/#/experiments/spirograph/"},
            {"title":"Flock of neon worms", link:"/#/experiments/flock/"}
        ]}
    },
    handleClick:function(){
        AppActions.testAction(1);
    },
    render:function(){
        return <div>
            <h1> I AM THE EXPERIMENTS PAGE</h1>
        {this.props.experiment_list.map(function(d,i){
            return  <ExperimentsHex data={d} key={i} index={i} siblingLength ={3} />
        })}
        </div>
    }
})


var ExperimentsHex = React.createClass({

    getDefaultProps:function(){
        return {key:0, index:0, width: 150, height: 150, padding:20, siblingLength:3, data:{'title':"untitled", "link":"/"}};
    },
    getInitialState:function(){
        return {topOffset: Store.getScreenSize().height/5, opacity:0, leftOffset:Store.getScreenSize().width/5  }
    },
    getOffset:function(){
        return "translate("+this.state.leftOffset+"px,"+this.state.topOffset+"px)"
    },
    getOpacity:function(){
        return this.state.opacity;
    },
    getStyle : function(){

    return {
                "color": '#ff00CC',
                "backgroundColor":"#454545",
                "width":this.props.height+"px",
                "height":this.props.height+"px",
                "borderRadius": "50%",
                "overflow":"hidden",
                "position":"absolute",
                "WebkitTransition": ".5s ease-in-out",
                "MozTransition": ".5s ease-in-out",
                "OTransition": ".5s ease-in-out",
                "transition": ".5s ease-in-out",
                "msTransform": this.getOffset(),
                "webkitTransform": this.getOffset(),
                "transform": this.getOffset(),
                "opacity": this.getOpacity()
        }
    },
    getTypeStyle:function(){
        return {
            "position":"absolute",
            "textAlign":"center",
            "top":0,
            "left":0,
            "width":this.props.height+"px",
            "height":this.props.height+"px"
        }
    },
    onMouseOver:function(){
        console.log("MOUSE OVER ");
    },
    onMouseOut:function(){
        console.log("MOUSE OUT");
    },
    componentDidMount:function(){

        this.animateToRestState();
        this.initAnimation();
        Store.addChangeListener(this.onChange)
    },
    componentWillUnmount:function(){
        Store.removeChangeListener(this.onChange)
    },
    onChange:function(){
        this.animateToRestState();
    },
    initAnimation:function(){
        console.log("Int Animation ...")
        this.anim1();
        this.props.timer1 = setTimeout(this.anim1, 500)
        this.props.timer2 = setTimeout(this.anim2, 1300)
    },
    getRestPostition:function(){
        var _horizontal = true;
        var _cellsTotalWidth = this.props.width * this.props.siblingLength
        var _paddingTotalWith = this.props.padding*(this.props.siblingLength-1);
        var _screenWidth = Store.getScreenSize().width
        var _remainder = (_screenWidth - _cellsTotalWidth - _paddingTotalWith) / 2;
        var _Xpos = _remainder + (this.props.width * this.props.index) + (this.props.padding * (this.props.index-1))
        var _Ypos = ( Store.getScreenSize().height/2 )-this.props.height;
        return {x:_Xpos, y:_Ypos};
    },
    anim0:function(){

        this.setState({'opacity':0});
        this.setState({'leftOffset': Store.getScreenSize().width/2});
    },
    anim1:function(){

        this.setState({'opacity':0});
        this.animateToRestState();
        this.setState({'leftOffset': Store.getScreenSize().width/2});
    },
    anim2:function(){
        this.setState({'opacity':1})
        this.animateToRestState();
        console.log("Anim 2 key ",this.getRestPostition() )
    },

    animateToRestState:function(){
        this.setState({'leftOffset': this.getRestPostition().x, "topOffset": this.getRestPostition().y});
    },
    render:function(){

      return <div className="hexCell" style={this.getStyle()}
                  onMouseOver={this.onMouseOver}
                  onMouseOut={this.onMouseOut}
                  >
                  <a href={this.props.data.link}>
                      <p style={this.getTypeStyle()}>{this.props.data.title}</p>
                      <p style={this.getTypeStyle()}>{this.props.data.link}</p>
                      <img src = {"../img/pylon.jpg"} />
                  </a>
              </div>
    }
})

module.exports = Experiments;
