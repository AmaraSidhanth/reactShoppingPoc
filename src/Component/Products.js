import React, { useState, useEffect } from 'react'
import styles from './CardItems.css'
import ViewProduct from './ViewProduct';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList, addToCartList, viewProductList} from '../actions/shoppingCart'

const Products = () => {
    const dispatch = useDispatch()
    const userList = useSelector(state => state.shoppingCart.userList)
    const filteredList = useSelector(state => state.shoppingCart.filteredList)
    let myCartList = useSelector(state => state.shoppingCart.myCartList)
    const searchInputValue = useSelector(state => state.shoppingCart.searchInputValue)
    let navigate = useNavigate();
   
       const getUser = () => {
        console.log("In")
           fetch('https://fakestoreapi.com/products')
        .then(results => results.json())
            .then(data => {
                console.log(data);
                dispatch(getUserList(data))
        })
    } 
    useEffect(() => {
        getUser()
    }, [])
    const addCart = (item) => {
        if (![item].includes(null)) {
            myCartList = [...myCartList, item]
            dispatch(addToCartList(myCartList))
            
            // setWishListProduct([...wishListProduct, { title, id, description, image }]);
        }
    }
    const viewProduct = (item) => {
        if (![item].includes(null)){
            dispatch(viewProductList(item))
        }
         
    }
    const viewProductNavigate = () => {
        let path = 'viewProduct';
        navigate(path);
         
    }
  
    return (
        <div>
            
            <div className='container'>
                <div className='row productList'>
                    {
                        searchInputValue ? filteredList.map((item) => {
                            return (
                                <div className='col-md-4' key={item.id}>
                                    <div className={`${styles.cardItem} card`} style={{}} id={item.id}>
                                        <img className="card-img-top" id={item.id} src={item.image} alt="Card image cap" style={{ objectFit: 'contain' }} alt="Card image cap" width='100%' height='200px' />
                                        <div className="card-body">
                                            <h5 className="card-title" id={item.id} style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.title}</h5>
                                            <p className="card-text" id={item.id} style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}> {item.description}</p>
                                            <a className="btn btn-primary" id={item.id} onClick={(e) => addCart(item)}>Add to Cart</a>
                        
                                            <Link to={`viewProduct/${item.id}`}>View Product</Link>
                                        </div>
                                    </div>

                                </div>
                            )
                    
                        }) : userList.map((item) => {
                            return (
                                <div className='col-md-4' key={item.id}>
                                    <div className={`${styles.cardItem} card`} style={{}} id={item.id}>
                                        <img className="card-img-top" id={item.id} src={item.image} alt="Card image cap" style={{ objectFit: 'contain' }} alt="Card image cap" width='100%' height='200px' />
                                        <div className="card-body">
                                            <h5 className="card-title" id={item.id} style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.title}</h5>
                                            <p className="card-text" id={item.id} style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}> {item.description}</p>
                                            <a className="btn btn-primary" id={item.id} onClick={(e) => addCart(item)}>Add to Cart</a>
                                        
                                            <Link to={`viewProduct/${item.id}`}>View Product</Link>
                                        </div>
                                    </div>

                                </div>
                            )
                            
                        })
                    }
                </div>

                  
            </div>
            
       
         
        </div>
    )
};

export default Products;