import React from "react";
import PropTypes from "prop-types";

import classes from "./SingleProductCard.module.css";
import RatingStars from "../RatingStars/RatingStars";
import Button from "../Button/Button";

import Text from 'LoginPageMFE/Text'
import products from "../../../utils/products";



/**
 * Impliments ProductCard component
 *
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns ProductCard
 */

export const SingleProductCard = (props) => {
 

// function handleClick(){
//   alert('added')
// }

  return (
    <>

<h1 className={classes.heading}>TOP HEALTHY FRUITS</h1>

     

<div className={classes.container}>
      {products.map((product)=>{
       const {id, productName, productImg, description, price}=product
       return (
        <div className={classes.container} key={id}>
    <div className={classes.item1}>
      <span className={classes.categories}>
        {description}
      </span>
      <h2 className={classes.title}>{productName}</h2>
      <img src={productImg} className={classes.Img}/>
      <RatingStars rating={4}/>

      <h5 className={classes.price}>Price: ${price}</h5>
      <Button className={classes.btn} />
    </div>
        </div>
       )
      }
      )}
         


</div>
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