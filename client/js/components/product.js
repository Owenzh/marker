import React, {Component} from 'react';
import $ from 'jquery';
import { registerLocationChangeListener, setNavHighLight } from "../shared/ActionForNav";


const ProdInfo = ({prod})=> (
    <div className="prod_info">
        <p>{prod.prod_name}</p>
        <p>{prod.prod_short}</p>
        <p>{prod.prod_price} {prod.price_unit}</p>
        <p>{prod.prod_type}</p>
    </div>
);

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {prod:null};
        registerLocationChangeListener();
    }
    componentDidMount() {
        let prodId = this.props.match.params.prodId;
        let isHot = this.props.location.search == "?hot";
        $.ajax({
            url: '/api/product/info/' + prodId,
            success: (result)=>{
                this.setState({prod:result},()=>{
                    let type = isHot ? 'hot' : result.prod_type;
                    setNavHighLight(type);
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