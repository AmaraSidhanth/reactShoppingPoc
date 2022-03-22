import React, { useSate, useEffect } from 'react';
import '../CSS/wishList.css'
import styles from './CardItems.css'
import { useSelector, useDispatch } from 'react-redux';
// import { myCartList } from '../actions/shoppingCart';

const MyCart = () => {
    // alert('Hi My Cart');
    const wishListProduct = useSelector(state => state.shoppingCart.myCartList)
    
    

    return (
        <>
            <div className='container productList'>
                <div className='row'>
                    {
                        wishListProduct?.map(({ id, title, description, image }) => (
                            <div className='col-md-4'>
                                <div className='card' style={{}} id={id}>
                                    <img className="card-img-top" id={id} src={image} alt="Card image cap" style={{ objectFit: 'contain' }} alt="Card image cap" width='100%' height='200px' />
                                    <div className="card-body">
                                        <h6>My Card Item</h6>
                                        <h5 className="card-title" id={id} style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</h5>
                                        <p className="card-text" id={id} style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}> {description}</p>
                                        <a className="btn btn-primary" id={id} >View Product</a>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
          
        </>
       
    );
}

export default MyCart;