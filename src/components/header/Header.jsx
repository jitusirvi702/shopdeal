import React ,{useEffect,useState,useContext} from 'react'
import { useNavigate } from 'react-router'
import {TbSearch} from 'react-icons/tb'
import {CgShoppingCart} from 'react-icons/cg'
import {AiOutlineHeart} from 'react-icons/ai'

import Search from './search/Search'
import Cart from '../cart/Cart'
import { Context } from '../../utils/context'
import './Header.scss'
export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY
        if(offset>200){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
        
    };
    useEffect(() => {
        window.addEventListener("scroll",handleScroll)
    },[]);
  return (
    <header className={`main-header ${scrolled ? 'sticky-header' : " "}`}>
        <div className='header-content'>
            <ul className='left'>
                <li>Home</li>
                <li>Category</li>
                <li>Electronics</li>
            </ul>
            <div className='center'>Shopdeal</div>
            <div className='right'>
                <TbSearch/>
                <AiOutlineHeart/>
                <span className='cart-icon'>
                    <CgShoppingCart/>
                    <span>5</span>
                </span>
            </div>
        </div>
    </header>
  )
}
