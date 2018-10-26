import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


const ProdInfo = ({prod})=> (
    <div className="prod_info">
        <p>{prod.prod_name}</p>
        <p>{prod.prod_short}</p>
        <p>{prod.prod_price} {prod.price_unit}</p>
        <p>{prod.prod_type}</p>
    </div>
);
const setNavHighLight = (type)=> {
    //set the type of product sidebar highlight, but if hot category will be going to real type, it should keep hot here I think.
    let t = $(`ul.sidebar a[href$=${type}]`);
    ReactDOM.findDOMNode(t[0]).className = 'nav_selected';
}
export default class Product extends Component {
    constructor(props) {
        super(props);
        console.log('Product....');
        console.log(props);
        console.log('Product....');
        this.state = {prod:null};
    }
    componentDidMount() {
        let prodId = this.props.match.params.prodId;
        $.ajax({
            url: '/api/product/info/' + prodId,
            success: (result)=>{
                this.setState({prod:result},()=>{
                    console.log('get the prod info');
                    console.log(result);
                    setNavHighLight(result.prod_type);
                });
            }
        });
    }
    render() {
        return (
            <React.Fragment>
                {this.state.prod && <ProdInfo prod={this.state.prod}/>}
            </React.Fragment>
        );
    }
}