import React from 'react'
import CategoryList from './CategoryList'
import "./Home.css"
import ListUser from './ListUser'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <ListUser/>
            <img className='home__image' src='https://m.media-amazon.com/images/I/61Ly9zlsGxL._SX1500_.jpg'/>
            <CategoryList/>
            <div className="home__row">
                <Product id={12365} title = 'Lean startup' price={29.99} image = 'https://th.bing.com/th/id/R.9de82ef2da08008a74aa3afbec9f3cf9?rik=zaas85eGaea9BQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-T-d3JPMr-Uk%2fUPshLuidy6I%2fAAAAAAAAFbU%2fvOiHd0qgnC4%2fs1600%2flean-startup_book-cover.jpeg&ehk=O90jlIAsVo0HEm3VJD7I%2b0%2fbWRp8HxsmQwJdugopPLU%3d&risl=&pid=ImgRaw&r=0' rating = {5} />
                <Product id={12355} title = 'Wholesale Frosted Glass Bottle Skincare Packaging Silver Skin Care' price={19.99} image = 'https://th.bing.com/th/id/OIP.kDGQxyQuX_uLGWm8vhfO8gHaHa?pid=ImgDet&rs=1' rating = {3} />
            </div>

            <div className="home__row">
                <Product id={12345} title = 'Sage Dawn Hand Cream | Get silky soft hands | Søstrene Grene' price={29.99} image = 'https://grene-prod-omni.azureedge.net/catalog/57498-1-502321-001_pack_a.png?format=jpg&width=1024&height=1317&quality=75&mode=crop' rating = {5} />
                <Product id={12395} title = 'Water Lip Stain - CLARINS - Smith & Caughey' price={39.99} image = 'https://www.smithandcaugheys.co.nz/data/media/images/catalogue/T314/199950_1.jpg?height=1500&width=1000&404=default.jpg' rating = {3} />
                <Product id={15345} title = 'Nestea Lemon Ice 350ml' price={9.99} image = 'https://cf.shopee.ph/file/625422a0a0d5d4ee88a8b8471f6743e8' rating = {5} />
            </div>

            <div className="home__row">
                <Product id={12045} title = 'Wholesale LOreal cosmetics' price={123.99} image = 'https://i.pinimg.com/originals/80/1e/25/801e250c39a9fb9d2a4c716a896a2d3f.jpg' rating = {5} />
            </div>
        </div>
    </div>
  )
}

export default Home
