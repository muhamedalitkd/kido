import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

                <div className="home__row">
                    <Product 
                    id="123123123123"
                    title="The lean startup" 
                    price={29.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg" 
                    rating={5}/>

                    <Product 
                    id="213121512"
                    title="The New Macbook" 
                    price={899.99} 
                    image="https://www.notebookcheck-cn.com/uploads/tx_nbc2/air13teaser.jpg" 
                    rating={5}/>

                </div>

                <div className="home__row">
                <Product 
                    id="21512125"
                    title="Apple Watches" 
                    price={599.99} 
                    image="https://p.ipricegroup.com/uploaded_ec48abb48b7cc0bdf397076846444b75.jpg" 
                    rating={5}/>

                    <Product 
                    id="1251251251"
                    title="iPhone 11 Pro" 
                    price={29.99} 
                    image="https://switch.com.my/wp-content/uploads/2019/09/11-pro6.jpg" 
                    rating={5}/>

                    <Product 
                    id="251512515"
                    title="Bad Smelly Socks kotorye pizdec kak vonyayut ya hueyu prosto ahahaha bleaaaa pizdooos" 
                    price={1.99} 
                    image="https://www.prada.com/content/dam/pradanux_products/6/664/66465/1WO9F0J22/66465_1WO9_F0J22_S_201_SLF.png" 
                    rating={5}/>
                </div>

                <div className="home__row">
                <Product 
                    id="215125215"
                    title="Boxing Gloves" 
                    price={59.99} 
                    image="https://asia.venum.com/media/catalog/product/cache/3d6373dfdbd8bf7042581a31874a0831/7/4/74ce4135378d82a0f66953e3801d9565cd92fa18_BG_IMPACT_BLACK_GOLD_1500_01__1_.jpg" 
                    rating={5}/>
                </div>
            </div>
        </div>
    )
}

export default Home
