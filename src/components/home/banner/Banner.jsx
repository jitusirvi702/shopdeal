import React from 'react'
import './Banner.scss'
import BannerImg from '../../../assests/banner-img1.jpg'
export const Banner = () => {
  return (
    <div className='hero-banner'>
        <div className='content'>
          <div className='text-content'>
            <h1>SALES</h1>
            <div className="ctas">
                <div className='banner-cta'>Read More</div>
                <div className='banner-cta'>Shop Now</div>
            </div>
            </div>  
        <p className='banner-price'>At only Rs.999</p>
            <img className='banner-img' src={BannerImg} alt=''/>
        </div>
    </div>
  )
}
