import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
const Verife = () =>{
    const {navigate, token , setCartItems , backendUrl } = useContext(ShopContext);
    const [searchParams , setSearchParams] = useSearchParams()
    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')

    const verifyPayment = async () => {
        try {
            if (!token) {
                return null                
            }

            const response = await axios.post(backendUrl+'/api/orders/verifyStripe',{success,orderId},{headers:{token}})
            if (response.data.success) {
                setCartItems({})
                navigate('/orders')                
            }else{
                navigate('/cart')
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    useEffect(()=>{
        verifyPayment()
    },[token])
    return (
        <div className="">

        </div>
    )
}

export default Verife;