import React from 'react';
import sellix from '@sellix/node-sdk';
import * as actions from '../util/actions';
import {connect} from "react-redux";

const s = sellix("Fz0NV5xxwo2eK3Ay9KqcM0bwQOEE9AvsnxSfM2qtMu0xwMJfG8zPtF5Qr75eYonC","sto4e");


const FetchProducts = ({changeProducts}) => {
    fetchProducts().then(d=>{
        console.log(d);
        changeProducts(d);
    }).catch(err => {
        console.log(err);
    })
}


const fetchProducts =  async () => {
    try{
        return await s.products.list();
    }catch (e){
        return [];
    }
}

const mapDispatchToProps = (dispatch) => ({
    changeProducts: (products) => dispatch({type:actions.change_products,payload:products}),
})

export default connect(null,mapDispatchToProps)(FetchProducts);