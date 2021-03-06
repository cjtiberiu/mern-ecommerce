import React from 'react';
import { useHistory } from 'react-router-dom';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';


const SearchInput = props => {

    const history = useHistory();
    const dispatch = useDispatch();

    // set the search query to redux state
    const onSearch = e => {  
        dispatch({
            type: 'SET_SEARCH_QUERY',
            payload: e.target.value
        })

    }

    // if the user current location is different from '/products' redirect the user to '/products', 
    // else the user will get the new products based on search query
    const onSubmit = (e) => {

        e.preventDefault();

        if (history.location.pathname !== '/products') {
            dispatch({ type: 'SET_CURRENT', payload: 'products'});
            history.push('/products')
        }
    }

    return (
        <form onSubmit={onSubmit} className='d-flex align-items-center search-input-container float-right mt-2 mb-0 mr-5'>
            <Input
                className='search-input border'
                placeholder="Search products"
                allowClear
                onChange={onSearch}
                style={{ width: 200, margin: '0 10px' }}
                bordered={false}
            />
            <SearchOutlined />
        </form>
        
    )
};

export default SearchInput;