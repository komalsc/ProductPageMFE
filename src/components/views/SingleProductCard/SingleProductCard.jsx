import React from "react";
import PropTypes from "prop-types";

import classes from "./SingleProductCard.module.css";
import RatingStars from "../RatingStars/RatingStars";
// import Button from "../Button/Button";
import Text from 'LoginPageMFE/Text'
import products from "LoginPageMFE/products";
// import products from "../../../utils/products";




/**
 * Impliments ProductCard component
 *
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns ProductCard
 */

export const SingleProductCard = (props) => {

  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  const id = params.id;
  function handleClick() {
    alert('added to cart')
    
  }
  const product = products[products.findIndex(current => current.id == id)] || products[0]

  return (
    
    <>

      <h1 className={classes.heading}>TOP HEALTHY FRUITS</h1>
     




      {products.map((product,id)=>{
        return (

       
         
        <div className={classes.container} key={id}>
          <div className={classes.item1}>
            <span className={classes.categories}>

              
              {product.description}
            </span>
          
            <h2 className={classes.title}>{product.productName}</h2>
            <img src={product.productImg} className={classes.Img} />
            <RatingStars rating={4} />

            <h5 className={classes.price}>Price: ${product.price}</h5>
            <button className={classes.btn} onClick={()=>handleClick()}>Add to Cart</button>
            
          </div>
        

        </div>
         )
        })}



      
      <div>

      </div>



      {/* <ProductCard /> */}
    </>

  );
}

/**
 * Property type definations
 *
 * @type {object}
 * @property {string} example - shows example - delete for in use
 */

export const propTypes = {
  price: PropTypes.string,
  // DollorImage: PropTypes.string
};

/**
 * Default values for ProductCard
 *
 * @type {object}
 * @property {string} example='ProductCard
 */

export const defaultProps = {
  price: "$38",
};

SingleProductCard.propTypes = propTypes;
SingleProductCard.defaultProps = defaultProps;

export default SingleProductCard;