import React, { useEffect, useState } from 'react';
import { FETCH_PRODUCT_URL } from './constant';

const useProduct = (id)=> {

    const [productInfo, setProductInfo] = useState({})

    useEffect(()=>{
        fetchData();
    }, [])

    let fetchData = async()=>{
        const response = await fetch(FETCH_PRODUCT_URL + id)
        const data = await response.json();
        setProductInfo(data);
    }


    return productInfo
}

export default useProduct;