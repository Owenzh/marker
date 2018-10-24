import  React,{Component} from 'react';
import $ from "jquery";

const ProdBtns = ({prod})=>(
    <div className="prod_btns">
        <button onClick={ ()=>collect(prod) }>收藏</button>
        <button onClick={ ()=>buy(prod) }>购买</button>
    </div>
);
const ProdItem = ({prod}) => (
    <div className="prod_item xu-grid-5">
        <div className="prod_short_name" onClick={ ()=>detail(prod) }>{prod.prod_short}</div>
        {prod.prod_price}<br/>
        {prod.prod_type}<br/>
        <ProdBtns prod={prod}/>
    </div>
);
const buy = (p) => {
    console.log(p);
    console.log('buy action...');
}
const detail = (p) => {
    console.log(p);
    console.log('detail action...');
}
const collect = (p) => {
    console.log(p);
    console.log('collect action...');
}
export default class Category extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {content:null, prods: null};
 
    }
    checkUpdate(data) {
        let item = this.props.path_name;
        let contentMap = {
            hot: 'This is list of hot product.',
            man: 'This is list of man product.',
            lady: 'This is list of lady product.',
            children: 'This is list of children product.'
        };
        
        this.setState({
            content: contentMap[item],
            prods: data
        }, () => {
            console.log('set content already.');
        });
    }
    componentDidMount() {
        $.ajax({
            url: "/api/product/hot",
            success: ( result ) => {
                console.log(result);
                this.checkUpdate(result);
            }
        });
    }
    render(){
        let prod_items = this.state.prods&&this.state.prods.map((prd)=>
            <React.Fragment key={prd.id}>
                <ProdItem prod={prd} />
            </React.Fragment>
        );
        return (
            <React.Fragment>
                <div className="prod_header">{this.state.content}</div>
                <div className="xu-grid">{prod_items}</div>
            </React.Fragment>
        );
    }
}