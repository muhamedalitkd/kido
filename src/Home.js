import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="/images/Kido.png" alt=""/>

                <div className="home__row">
                    <Product 
                    id="123123123123"
                    title="Розовый муслин напоминает сладкую вату" 
                    price={29.99} 
                    image="/images/1.jpg" 
                    rating={5}/>

                    <Product 
                    id="213121512"
                    title="Футболочки из муслина подойдут и девочкам и мальчикам" 
                    price={899.99} 
                    image="/images/2.jpg" 
                    rating={5}/>

                </div>

                <div className="home__row">
                <Product 
                    id="21512125"
                    title="Платье" 
                    price={599.99} 
                    image="/images/3.jpg" 
                    rating={5}/>

                    <Product 
                    id="1251251251"
                    title="Голубое Платье" 
                    price={29.99} 
                    image="/images/4.jpg" 
                    rating={5}/>

                    <Product 
                    id="251512515"
                    title="Майка со штанами" 
                    price={1.99} 
                    image="/images/5.jpg" 
                    rating={5}/>
                </div>

                <div className="home__row">
                <Product 
                    id="215125215"
                    title="Разноцветные платья" 
                    price={59.99} 
                    image="/images/6.jpg" 
                    rating={5}/>
                </div>
            </div>
        </div>
    )
}

export default Home
