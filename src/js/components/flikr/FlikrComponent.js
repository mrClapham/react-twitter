/** @jsx React.DOM */
var React = require('react');
var AppActions = require("../../actions/app-actions");
var Store = require("../../stores/Flikr-store");
var Router = require('react-router-component')
var Locations = Router.Locations
var Location = Router.Location
var CaptureClicks = require('react-router-component/lib/CaptureClicks')
var Link = require('react-router-component').Link



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
    componentWillReceiveProps:function(newVal){
        console.log("Receiving props in the image -- newval", newVal)
        if(newVal.flikrdata.id != this.state.flikrdata.id){
            this.setState({flikrdata: newVal.flikrdata});
        }
    },
    render:function(){
        return (
            <li className={Store.getGalletyLoading() ? 'flikr-cell loading-gallery' : 'flikr-cell loaded-gallery'}>
                <p>{this.state.flikrdata.latitude}</p>
                <p>{this.state.flikrdata.url_sq}</p>
                <img src={this.state.flikrdata.url_sq} />
            </li>
        )
    }
})
///---- The individual cell
var FlikrComponent = React.createClass({
    proptypes:{
        flikrPublicPhotos:React.PropTypes.array
    },
    // The props are set not to change
    getDefaultProps:function(){
        return {gallery : '' }
    },
    // The state is mutable and takes
    getInitialState:function(){
        return {
            flikrPublicPhotos:Store.getFlikrPublicPhotos(),
            galleryId:"",
            id:0
        }
    },
    componentWillMount:function(){
        Store.addChangeListener(this._onStoreChange)
    },
    componentDidMount:function(){
        Store.loadPublicGalleries();
    },
    _onStoreChange:function(){
            console.log('XXXXAAAAA The on change event is firing..... ')
        //this.setState({})
        //if(this.state.galleryId != this.props.gallery){
            this.setState({"galleryId": this.props.gallery,
                flikrPublicPhotos: Store.getFlikrPublicPhotos()
            });
           //  Store.loadPublicGalleriesGetImages(this.state.galleryId);
        //}
    },
    componentWillReceiveProps(newProps){
        console.log("THE PROPS WERE====>>> ", this.props)
        console.log("PROPS CHANGED  ===> ", newProps );
        if(newProps !== this.props){
            Store.loadPublicGalleriesGetImages(newProps.gallery);
        }
    },
    _onNavigate:function(){
        console.log("NAVIGATE ",this.props.gallery);
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
        return (<div class = "flikr">
            {FlikrGalleries({})};
            <h3>Flikr component --- </h3>
            <h3>Gallery props.gallery =  {this.state.galleryId} </h3>
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
})
// --- the galleries

var FlikrGalleries = React.createClass({

    getInitialState:function(){
        return { galleries:Store.getPublicGalleries() };
    },
    componentWillMount:function(){
        //--
    },
    componentDidMount:function(){
        this.setState({
            flikrdata: this.props.flikrdata
        });
        Store.addChangeListener(this.onGalleriesChange)
    },

    ////:
    onGalleriesChange:function(){
       // galleries:Store.getPublicGalleries()
        this.setState({galleries:Store.getPublicGalleries()})
    },

    render:function(){

    var _galleries = Store.getPublicGalleries();
    //console.log(" _galleries ---------- ",_galleries)
        return (
            <div>
                <h3>Here are the galleries----</h3>
                <li>
                {_galleries.map(function(d,i) {
                        return FlikrGalleryCell({data:d, key: d.id});
                })}
                </li>
            </div>
            )
    }
});

FlikrGalleryCell = React.createClass({
    getInitialState:function(){
        return {
            data:{title:{_content:"loading"}}
        }
    },
    componentDidMount:function(){
        this.setState({
            data: this.props.data
        });
    },
    getLinkUrl:function(){
        return this.state.data.id
    },

    render:function(){
//    console.log("STATE DATA ", this.state.data);
    return (<li>
        {this.state.data.title._content }This is a gallery
        // <Link href={ this.getLinkUrl() } > Go to to gallery</Link>
    </li>)
    }
})

module.exports = FlikrComponent;
