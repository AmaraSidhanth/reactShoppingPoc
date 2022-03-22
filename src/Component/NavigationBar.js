import React, {useState} from 'react'
import { BrowserRouter , Route, Link, Routes } from 'react-router-dom'
import SearchInput from './SearchInput';
import MyCart from './MyCart';
import Products from './Products';
import ViewProduct from './ViewProduct';
import { searchProduct, getUserList, getFilteredList } from '../actions/shoppingCart'
import {
    useDispatch, useSelector
} from 'react-redux';


const NavigationBar = ({ data, searchUserInput }) => { 
    const dispatch = useDispatch(); 
    const searchInputValue = useSelector(state=>state.shoppingCart.searchInputValue)
    const userList = useSelector(state => state.shoppingCart.userList)
    let filteredList = [];
    
    const searchForProduct = () => {
        console.log(searchInputValue);
        if (searchInputValue) {
            filteredList = [...userList];
            filteredList = filteredList.filter(item => item.title.toLowerCase().includes(searchInputValue.toLowerCase()));
             dispatch(getFilteredList([...filteredList]))
            console.log(filteredList);
        }
    } 
    return (
        <>
            <div>
                <BrowserRouter>
                    <nav className="navbar navbar-expand-sm navbar-dark bg-dark  fixed-top">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="">#Logo</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="mynavbar">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/myCart">My Cart</Link>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="text" placeholder="Search" onChange={(e) => dispatch(searchProduct(e.target.value))} />
                                    <button className="btn btn-primary" type="button" onClick={() => searchForProduct() }>Search</button>
                            </form>
                            </div>
                        </div>
                    </nav>
                    <Routes>
                        <Route exact path="/"  element={<Products />} />
                        <Route path="myCart" element={<MyCart />} />
                        <Route path ="viewProduct/:id" element={<ViewProduct />} />
                    </Routes>
                </BrowserRouter>
                </div>
        </>
    );
}

export default NavigationBar;