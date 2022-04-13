import React, { useState } from "react";
import './ProductCard.css'
import { useStateValue } from "../../StateProvider"
import { HiMinusSm } from 'react-icons/hi'
import { HiPlusSm } from 'react-icons/hi'

function ProductCard({title, image, price, rating, id}) {
    const [ dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                key: id+1
            }
        })
    }
    const [addcart,setaddcart]=useState(1);

    const AddCart=()=> {
    if(addcart<10){ setaddcart(addcart+1); } }; 
    
    const DecBag=()=>{
        if(addcart>=1){
        setaddcart(addcart-1);
        }
    };

    return(
        <>
            <div className="productCard__container">
                <div className="productCard__card">
                    <div className="productCard__image">
                        <img src={image} alt="" />

                    </div>
                    <div className="text">
                        <h3>{title}</h3>
                        <div className="productCard__variation">
                            <span>250g</span>
                            <span>500g</span>
                            <span>1000g</span>
                        </div>
                        <div className="price">
                            <h3>UGX {price}</h3>
                            <div className="qty">
                                <i onClick={DecBag}><HiMinusSm/></i>
                                <p>{addcart}</p>
                                <i onClick={AddCart}><HiPlusSm/></i>
                            </div>
                        </div>
                        <div className="description">
                            <h5>Description</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <div className="last_section">
                            <button onClick={addToBasket}>Add to cart</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default ProductCard;