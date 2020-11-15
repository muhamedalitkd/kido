import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProudct from './CheckoutProudct';

function Checkout() {
    const [{ basket, user } , dispatch ] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" 
                src="/images/kido.png" 
                alt=""/>


                <div>
                    <h3>Приветствуем, {user?.email}</h3>
                    <h2 className="checkout__title">Ваша Корзина</h2>

                    {basket.map(item => (
                        <CheckoutProudct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
