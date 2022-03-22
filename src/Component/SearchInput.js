
import React, { useState, useEffect } from 'react'
import Products from './Products';
import WishList from './MyCart'

const SearchInput = ({ data, searchUserInput }) => {
    const [searchInput, setSearchInput] = useState(''); 
    const openAddCart = () => {
       
        console.log(data);
            // (<WishList data={item}/>)
    }
    return (
        <>
            <form className="d-flex">
                <input className="form-control me-2" type="text" placeholder="Search" onChange={(e) => setSearchInput(e.target.value)} value={searchInput}/>
                <button className="btn btn-primary" type="button" onClick={() => searchUserInput(searchInput)}>Search</button>
            </form>
            {/* <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="text" id='description' onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />
                <button className='btn-primary' onClick={() => searchUserInput(searchInput)}>Search</button>
            </div> */}
            <div>
                {/* <button onClick={openAddCart}>Open Cart</button>
                 */}
                {/* <WishList /> */}
            </div>
          
        </>
    );
};

export default SearchInput;




// 1. props => data
// 2. inputField

  
                        //  userList.map((item) => {
                        //     return (<tr key={ item.id}>
                        //         <td>{ item.login}</td>
                        //         <td>{item.id }</td>
                        //     </tr>)
                        // })