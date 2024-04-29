import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WatchList from './WatchList';


const Header = ({watchlist}) => {
   
    return (
        <header className="bg-gradient-to-r from-blue-700 to-red-700 text-black py-4  ">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <h1 className="text-2xl font-bold ml-4 mb-4 md:mb-0 font-krm">My Website</h1>
                <nav>
                    <ul className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0">
                        <li>
                            <Link to={"/"} className='hover:text-gray-300 hover:underline font-bold text-xl md:text-2xl font-krm'>İzlenecekler</Link>
                        </li>
                        <li>
                            <Link to={"/watched"} className='hover:text-gray-300 hover:underline font-bold text-xl md:text-2xl font-krm'>İzlenenler</Link>
                        </li>
                        
                    </ul>
                </nav>
                <Link to={"/add"} className='bg-gray-700 text-white hover:bg-gray-600 hover:no-underline rounded-full px-4 mr-4 py-2 font-bold hover:text-gray-300 '>+</Link>
            </div>
          
        </header>
    );
}

export default Header;
