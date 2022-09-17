import React from 'react';
import CurrencyFormat from "react-currency-format"
import './Subtotal.css'
import { useStateValue} from "./StateProvider"
import { getBasketTotal } from './reducer'; 

const Subtotal = () => {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div>
            <div className="subtotal">
            <CurrencyFormat
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>${value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                
            />

            <button>Proceed to Checkout</button>
        </div>
        </div>
    );
};

export default Subtotal;