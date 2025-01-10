import React, { useEffect, useState } from 'react'
import Cart from './Cart'
import { data } from './../data/data'
import NavBar from '../NavBar/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { next, prev, select } from '../ConfigRedux/configIndex'
import { caders } from '../data/caders'

const ListProducts = () => {
    const [isAutoplay, setIsAutoplay] = useState(true);
    const index = useSelector((state) => state.index.index)
    console.log(index)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isAutoplay) return;
        
        const timer = setInterval(() => {
            dispatch(next());
        }, 3000);
    
        return () => clearInterval(timer);
    }, [isAutoplay]);

    return (
        <div className='bg-slate-600'>
            <NavBar />
            {/* carousel section */}
            <div 
                className="w-screen h-screen relative"
                onMouseEnter={() => setIsAutoplay(false)}
                onMouseLeave={() => setIsAutoplay(true)}
            >
                {/* Image container - fullscreen */}
                <div className="w-full h-full">
                    <img src={caders[index]} className="w-full h-full object-cover transition-opacity  "alt="" />

                    {/* Navigation buttons */}
                    <div className="absolute inset-0 flex items-center justify-between px-4">
                        <button
                            onClick={() => dispatch(prev())}
                            className="bg-black/50 hover:bg-black/70 text-center text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                        >
                            <span className="text-2xl font-bold">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>

                            </span>
                        </button>

                        <button
                            onClick={() => dispatch(next())}
                            className="bg-black/50 hover:bg-black/70 text-center  text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                        >
                            <span className="text-2xl font-bold">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>

                            </span>
                        </button>
                    </div>

                    {/* Navigation circles - positioned at bottom center of image */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center gap-4">
                        {[0, 1, 2, 3].map((dot) => (
                            <button
                                key={dot}
                                onClick={() => dispatch(select(dot))}
                                className={`w-3 h-3 rounded-full transition-colors ${index === dot ? 'bg-white' : 'bg-white/50'
                                    } hover:bg-white`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-center text-3xl text-white mt-10'>Liste products </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.map((product) => (
                        <Cart
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </div>

        </div>

    )
}

export default ListProducts