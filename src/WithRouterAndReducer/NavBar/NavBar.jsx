import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import { initialState } from '../ConfigReducer/configPanier'


const NavBar = () => {

    const totalProducts=initialState.panier.reduce((acc,item)=>acc+item.qte,0)
    return (
        <div className="bg-gray-800 p-4 ">
                <div className="flex justify-center items-center">
                    <Link to='/' className='mr-9'>
                        <button className="border-2 font-semibold border-white bg-gray-800 text-white px-4 py-2 rounded hover:bg-blue-900 hover:border-blue-900 hover:text-white transition" >
                            List Products
                        </button>
                        
                    </Link>
                    <Link to='/panier' className='ml-9' >
                        <button className=" flex border-2 font-semibold border-white bg-gray-800 text-white px-4 py-2 rounded hover:bg-blue-900 hover:border-blue-900 hover:text-white transition" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            
                            {initialState.panier.length > 0 ?
                                <span  className='px-2 ml-2 bg-white border-2 border-white  text-gray-800 rounded-full'>{totalProducts}</span>
                                :
                                ''
                            }
                        </button>
                    </Link>
                </div>
            <Outlet/>
        </div>
    )
}

export default NavBar
