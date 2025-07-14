import React, { useEffect, useState } from "react";

function Product() {
    const[data,setData]= useState([])

    // useEffect(() => {
    //     let data = fetch('https://fakestoreapi.com/products')
    //     console.log(data);
    //     data.then((val) => {
    //         return val.json();
    //     }).then((val) => {
    //         setData(val);
    //     }).catch((err) => {
    //         console.log(err);
    //     })

    // }, [])

    useEffect(()=>{
        async function getdata(){
            let datanew = await fetch('https://fakestoreapi.com/products');
            let dataupdate = await datanew.json()
            setData(dataupdate);
        }
        getdata();


    },[])
    console.log(data);
    return (
        <>
           {
            data.map((e)=>(
                <>
                    <h1>{e.title}</h1>                    
                    <p>{e.description}</p>
                </>
            ))
           }
        </>
    )
}
export default Product;