/** @jsx React.DOM */
var React = require('react');
var AppActions = require("../../actions/app-actions");
var FlikrActions = require("../../actions/FlikrActions");
var Store = require("../../stores/Flikr-store");
var Router = require('react-router-component')
var Locations = Router.Locations
var Location = Router.Location
var CaptureClicks = require('react-router-component/lib/CaptureClicks')
var Link = require('react-router-component').Link

var AppDispatcher = require("../../dispatchers/app-dispatcher");
var AppConstatnts = require("../../constants/app-constatnts");



///---- The Main Flikr App ----
var FlikrComponent = React.createClass({
    proptypes:{
        flikrPublicPhotos:React.PropTypes.array
    },
    // The props are set not to change
    getDefaultProps:function(){
        return {gallery : '', image:""}
    },
    // The state is mutable and takes
    getInitialState:function(){
        return {
            flikrPublicPhotos:Store.getFlikrPublicPhotos(),
            gallery:"",
            galleryImage:"",
            id:0
        }
    },
    componentWillMount:function(){
        Store.addChangeListener(this._onStoreChange)
    },
    componentWillUnmount:function(){
        Store.removeChangeListener(this._onStoreChange)
    },
    componentDidMount:function(){
        Store.loadPublicGalleries();
        Store.loadPublicGalleriesGetImages(this.props.gallery);
        if(this.props.galleryImage){
            _handleMainImageChange (this.props.galleryImage);
        }
    },
    _onStoreChange:function(){
        this.setState({"gallery": this.props.gallery,
            flikrPublicPhotos: Store.getFlikrPublicPhotos() //
        });
    },
    componentWillReceiveProps:function(newProps){
        console.log("componentWillReceiveProps ");
        if(newProps !== this.props){
            Store.loadPublicGalleriesGetImages(newProps.gallery);
            if(newProps.galleryImage)Store.loadMainImage(newProps.galleryImage);
            FlikrActions.changeGallery(newProps.gallery);
            FlikrActions.changeMainImage(newProps.galleryImage);
        }
    },

    _onNavigate:function(){
        //console.log("NAVIGATE ",this.props.gallery);
    },
    loadPublicPhotos:function(){
        Store.loadPublicPhotos();
    },
    loadPublicGalleriesCollections:function(){
        Store.loadPublicGalleriesCollections();
    },
    loadPublicGalleries:function(){
        Store.loadPublicGalleries();
    },
    render:function(){
        var results = Store.getFlikrPublicPhotos() // this.state.flikrPublicPhotos;
        return (<div className = "flikr">
            <FlikrMainImage id={this.props.galleryImage}/>
            <FlikrGalleries />;
            <h3>Flikr component --- </h3>
            <h3>Gallery props.gallery =  {this.props.gallery} </h3>
            <h3>Gallery props.image =  {this.props.galleryImage} </h3>
            <CaptureClicks>
                <button type="button" onClick={this.loadPublicPhotos}>Search</button>
                <button type="button" onClick={this.loadPublicGalleriesCollections}>Galleries Sets</button>
                <button type="button" onClick={this.loadPublicGalleries}>Galleries</button>
            </CaptureClicks>
            <ul>
                {results.map(function(result, ind) {
                    return <FlickrCell flikrdata={result} key={ind} />
                })
                    }
            </ul>
        </div>)
    }
});

//--------------------------------------------------------------------

var FlickrCell = React.createClass({

    getInitialState:function(){
        return {
            flikrdata:{
                accuracy: "16"
                ,context: 0
                ,datetaken: "2014-05-18 12:51:52"
                ,datetakengranularity: "0"
                ,datetakenunknown: 0
                ,dateupload: "1400535506"
                ,farm: 6
                ,geo_is_contact: 0
                ,geo_is_family: 0
                ,geo_is_friend: 0
                ,geo_is_public: 1
                ,height_c: 800
                ,height_l: "1024"
                ,height_m: "500"
                ,height_n: 320
                ,height_q: "150"
                ,height_s: "240"
                ,height_sq: 75
                ,height_t: "100"
                ,height_z: "640"
                ,iconfarm: 6
                ,iconserver: "5482"
                ,id: "14245864573"
                ,isfamily: 0
                ,isfriend: 0
                ,ispublic: 1
                ,lastupdate: "1400686969"
                ,latitude: "55.002016"
                ,longitude: "-1.417270"
                ,machine_tags: ""
                ,media: "photo"
                ,media_status: "ready"
                ,owner: "123487996@N08"
                ,ownername: "mr.grahamclapham"
                ,pathalias: null
                ,place_id: "uMcxvgZVUbyr7A"
                ,secret: "2eb0d826ef"
                ,server: "5314"
                ,tags: ""
                ,title: ""
                ,url_c: "https://farm6.staticflickr.com/5314/14245864573_2eb0d826ef_c.jpg"
                ,url_l: "https://farm6.staticflickr.com/5314/14245864573_2eb0d826ef_b.jpg"
                ,url_m: "https://farm6.staticflickr.com/5314/14245864573_2eb0d826ef.jpg"
                ,url_n: "https://farm6.staticflickr.com/5314/14245864573_2eb0d826ef_n.jpg"
                ,url_q: "https://farm6.staticflickr.com/5314/14245864573_2eb0d826ef_q.jpg"
                ,url_s: "https://farm6.staticflickr.com/5314/14245864573_2eb0d826ef_m.jpg"
                ,url_sq: "https://farm6.staticflickr.com/5314/14245864573_2eb0d826ef_s.jpg"
                ,url_t: "https://farm6.staticflickr.com/5314/14245864573_2eb0d826ef_t.jpg"
                ,url_z: "https://farm6.staticflickr.com/5314/14245864573_2eb0d826ef_z.jpg"
                ,views: "9"
                ,width_c: "800"
                ,width_l: "1024"
                ,width_m: "500"
                ,width_n: "320"
                ,width_q: "150"
                ,width_s: "240"
                ,width_sq: 75
                ,width_t: "100"
                ,width_z: "640"
                ,woeid: "43684"
            }
        }
    },
    componentWillMount:function(){
        //--
    },
    componentDidMount:function(){
        this.setState({
            flikrdata: this.props.flikrdata
        });
        Store.addChangeListener(function(){
            Store.getGalletyLoading() ? console.log("LOADING ______") : console.log("Done ______");
        })
    },
    componentWillUnmount:function(){

    },
    componentWillReceiveProps:function(newVal){
        if(newVal.flikrdata.id != this.state.flikrdata.id){
            this.setState({flikrdata: newVal.flikrdata});
        }
    },
    render:function(){
        return (
            <li className={Store.getGalletyLoading() ? 'flikr-cell loading-gallery' : 'flikr-cell loaded-gallery'}>
                <p>{this.state.flikrdata.latitude}</p>
                //<p>{this.state.flikrdata.url_sq}</p>
                <Link href={ Store.getGalleryId()+"/"+this.state.flikrdata.id } > Go to Image</Link>

                <img src={this.state.flikrdata.url_sq} />
            </li>
        )
    }
});
///--- common functionality

var _handleMainImageChange = function(galleryInageId){
    AppDispatcher.handleViewAction(AppConstatnts.FLIKR_MAINIMAGE_CHANGED, galleryInageId);
}


// --- the galleries

var FlikrGalleries = React.createClass({

    getInitialState:function(){
        return {galleries:Store.getPublicGalleries() };
    },
    componentWillMount:function(){
        //--
    },
    componentDidMount:function(){
        this.setState({
            flikrdata: this.props.flikrdata
        });
        Store.addChangeListener(this.onGalleriesChange);
        try{
            FlikrActions.gridUpGallery();
        }catch(e){
            //----
        }
    },
    componentWillUnmount:function(){
        Store.removeChangeListener(this.onGalleriesChange)
    },
    componentWillReceiveProps:function(oldProps){
        //console.log("FlikrGalleries componentWillReceiveProps oldProps - ",oldProps);
    },
    ////:
    onGalleriesChange:function(){
        this.setState({galleries:Store.getPublicGalleries()});
        FlikrActions.gridUpGallery();
    },

    render:function(){

    var _galleries = Store.getPublicGalleries();
        return (
            <div className="flikr-gallery-holder">
                <h3>Here are the galleries----  </h3>
                <ul className="flikr-gallery-list">
                    {_galleries.map(function(d,i) {
                            return <FlikrGalleryCell data = {d} key = {d.id} />;
                    })}
                </ul>
            </div>
            )
    }
});
/*
    A single cell in the main overview gallery...

 */
FlikrGalleryCell = React.createClass({
    getInitialState:function(){
        return {
            width:75,
            data:{
                title:{_content:"loading"},
            primary_photo_extras:{height_sq: 75, width_sq:75, url_sq:'../img/loadinfo.net.gif'}}
        }
    },
    getOffset:function(){
        return "translate("+this.state.width*this.state.data.x+"px,"+this.state.width*this.state.data.y+"px)";
    },
    getStyle:function(){
        return {
            "borderRadius":"50%",
            "width":"75px",
            "overflow":"hidden",
            "position":"absolute",
            "WebkitTransition": ".5s ease-in",
            "MozTransition": ".5s ease-in",
            "OTransition": ".5s ease-in",
            "transition": ".5s ease-in",
            "MsTransform": this.getOffset(),
            "WebkitTransform": this.getOffset(),
            "transform": this.getOffset()
        }
    },
    componentDidMount:function(){
        this.setState({
            data: this.props.data
        });
    },
    getLinkUrl:function(){
        return this.state.data.id;
    },

    render:function(){

        return (<li style={this.getStyle()}>

        <Link href={ this.getLinkUrl() } >
            <div>
            <img src={this.state.data.primary_photo_extras.url_sq} />
            </div>
        </Link>
    </li>)
    }
});

//------------------------------
FlikrMainImage = React.createClass({
    getInitialState:function(){
        return {
            flikrdata:{id:"No id yet", title:{_content:"loading"}}
        }
    },
    getDefaultProps:function(){
        return {
            flikrdata:{title:{_content:"loading"}}
        }
    },
    componentDidMount:function(){
        this.setState({
            data: this.props.data
        });
        Store.addChangeListener(this._onMainImageChanged)
    },
    componentWillUnmount:function(){
        Store.removeChangeListener(this._onMainImageChanged)
    },
    _onMainImageChanged:function(e){
       if( Store.getMainImage() ) this.setState({'flikrdata': Store.getMainImage() })
    },
    render:function(){
        return(
            <div>
            <h3>THIS IS THE BIG IMAGE {this.state.flikrdata.id}</h3>
            <img src={this.state.flikrdata.url_l} />
                </div>
            )
    }
});

module.exports = FlikrComponent;
