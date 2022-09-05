import './Products.css';
import Card from "../../components/Card/Card";
import Sellix from '../../util/sellix';
import {useEffect, useState} from "react";
import {connect} from "react-redux";

const Products = ({products_data}) => {

    const [products,setProducts] = useState(products_data
    );
    useEffect(() => {
        setProducts(products_data);
    },[products_data])

    return (
        <div className="products__main section">
            <div className="container">
                <h1>Products</h1>
                {console.log(products)}
                <div className="products__cards">
                    {
                        products?.map(product => (
                            <Card
                                key={product.id}
                                title={product.title}
                                price={product.price+" "+product.currency}
                                description={product.description}
                                image={product.image_attachment.cloudflare_image_id}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    products_data: state.products,
});

export default connect(mapStateToProps,null)(Products);