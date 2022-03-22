import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { viewProductList } from '../actions/shoppingCart';
import '../CSS/wishList.css'

const ViewProduct = () => {
    const dispatch = useDispatch()
    // const viewPorductItem = useSelector(state => state.shoppingCart.viewProductList)
    let { id } = useParams();
    const [viewProductItem, setViewProductItem ] = useState({});
    const viewProductDetails = () => {
        fetch('https://fakestoreapi.com/products/' + id)
            .then(result => result.json())
            .then(data => {
               
                setViewProductItem({ ...data });
                console.log(viewProductItem);
            })
   
    }

     useEffect(() => {
    //     dispatch(viewProductList())
         viewProductDetails()
     }, [])
    let navigate = useNavigate();
   
    console.log(id)
    return (
        <>
            <div className='container'>
                <div className='row viewProductDiv' >
                    <div className='col-md-6'>

                     
                        <img src={viewProductItem.image} style={{ objectFit:'contain'}} width='100%' height='400px'/>
                    </div>
                    <div className='col-md-6'>
                        <h3>{viewProductItem.title}</h3>
                    </div>
                </div>
                
               
            </div>
          
        </>
    );
}

export default ViewProduct;