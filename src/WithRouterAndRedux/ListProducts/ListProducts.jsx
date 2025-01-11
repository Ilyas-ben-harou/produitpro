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
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isAutoplay) return;
        
        const timer = setInterval(() => {
            dispatch(next());
        }, 3000);
    
        return () => clearInterval(timer);
    }, [isAutoplay, dispatch]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-600">
            <NavBar />
            
            {/* Carousel Section */}
            <div 
                className="relative h-[50vh] md:h-[70vh] lg:h-[80vh] w-full"
                onMouseEnter={() => setIsAutoplay(false)}
                onMouseLeave={() => setIsAutoplay(true)}
            >
                {/* Image Container */}
                <div className="relative w-full h-full overflow-hidden">
                    <img 
                        src={caders[index]} 
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out" 
                        alt="Carousel image" 
                    />

                    {/* Navigation Buttons */}
                    <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between">
                        <button
                            onClick={() => dispatch(prev())}
                            className="transform hover:scale-110 bg-black/40 hover:bg-black/60 text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
                            aria-label="Previous slide"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        <button
                            onClick={() => dispatch(next())}
                            className="transform hover:scale-110 bg-black/40 hover:bg-black/60 text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
                            aria-label="Next slide"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Dots */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                        {[0, 1, 2, 3].map((dot) => (
                            <button
                                key={dot}
                                onClick={() => dispatch(select(dot))}
                                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-125 
                                    ${index === dot 
                                        ? 'bg-white scale-110' 
                                        : 'bg-white/50 hover:bg-white/75'}`}
                                aria-label={`Go to slide ${dot + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Products Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                    Our Products
                </h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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