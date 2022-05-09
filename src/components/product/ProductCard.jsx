import React from "react";
import './ProductCard.css'
import soldout from '../../images/sold-out.png'

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../redux/shopping/shoppingActions";


function ProductCard({product, addToCart, loadCurrentItem}) {


    return(
        <>
            <div className="productCard__container">
                <div className="productCard__card">
                    <div className="productCard__image">
                        <img src={product.image} width={400} height={300} alt={product.title} className='img2' />
                        {product?.quantity === 0 && (
                            <div className="middle">
                                <img src={soldout} alt="soldout" className='img1' />
                            </div>
                        )}  
                    </div>
                    <div className="productCard__info">
                        <h3 className="productCard__title">{product.title}</h3>
                        {/* <div className="productCard__variation">
                            <span>250g</span>
                            <span>500g</span>
                            <span>1000g</span>
                            add view details button
                        </div> */}
                        <div className="price">
                            <h3>UGX {product.price}</h3>
                        </div>
                        <div className="description">
                            <h5>Description</h5>
                            {product.description}                            
                        </div>
                        <div className="last_section">
                            <button onClick={()=> addToCart(product.id)}>Add to cart</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    };
};

export default connect(null, mapDispatchToProps)(ProductCard);