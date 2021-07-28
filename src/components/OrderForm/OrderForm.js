import React, { useState } from 'react';

const OrderForm = (props) => {
    const product = props.product;

    // Variables that can be changed based on the order form
    const [name, setName] = useState(product.name);
    const [syrup, setSyrup] = useState(product.syrup);
    const [milk, setMilk] = useState(product.milk);
    const [flavor, setFlavor] = useState(product.flavor);
    const [temp, setTemp] = useState(product.temp);
    const [price, setPrice] = useState(product.price);
    const [quantity, setQuantity] = useState(1);

    // Variables to identify if flavor or temperature can be changed
    const flavorChange = product.flavorChange;
    const tempChange = product.tempChange;
    
    return (
        <div>
            <form>
                <label for='custom-milk'>Milk</label>
                <select className='custom-option' 
                        id='custom-milk' 
                        onChange={(e) => setMilk(e.target.value)}>
                    <option value={milk} selected='selected' key='0'>{milk}</option>
                    <option value='Almond' key='1' >Almond</option>
                    <option value='Oat' key='2' >Oat</option>
                    <option value='2%' key='3'>2%</option>
                    <option value ='Soy' key='4'>Soy</option>
                </select>
                <label for ='custom-flavor'>Flavor</label>
                {
                    flavorChange ? 
                        <select className='custom-option' 
                                id='custom-flavor' 
                                onChange={(e) => setFlavor(e.target.value)}>
                            <option value={flavor} selected='selected' key='0'>{flavor}</option>
                            <option value='Vanilla' key='1'>Vanilla</option>
                            <option value='Caramel' key='2'>Caramel</option>
                            <option value='Honey Lavender' key='3'>Honey Lavender</option>
                            <option value='Matcha' key='4'>Matcha</option>
                            <option value='Strawberry' key='5'>Strawberry</option>
                        </select>
                    :
                        <select className='custom-option' 
                                id='custom-flavor' 
                                onChange={(e) => setFlavor(e.target.value)}>
                            <option value={flavor} selected='selected' key='0'>{flavor}</option>
                        </select>
                }
                <label for='custom-temp'>Hot / Iced ?</label>
                {
                    tempChange ? 
                        <select className='custom-option' 
                                id='custom-temp' 
                                onChange={(e) => setTemp(e.target.value)}>
                            <option value={temp} selected='selected' key='0'>{temp}</option>
                            <option value='Iced' key='1'>Iced</option>
                        </select>
                    :
                        <select className='custom-option' 
                                id='custom-temp' 
                                onChange={(e) => setTemp(e.target.value)}>
                            <option value={temp} selected='selected' key='0'>{temp}</option>
                        </select>
                }
                <label for='custom-syrup'>Syrup</label>
                <input className='custom-option' 
                        id='custom-syrup'
                        type='number'
                        onChange={(e) => setSyrup(e.target.value)}
                        value={syrup} />
                <label for='quantity'>Quantity</label>
                <input id='quantity' 
                       type='number' 
                       placeholder='1'
                       onChange={(e) => setQuantity(e.target.value)}
                       value={quantity} />
                <button class='snipcart-add-item'
                        data-item-id={product._id}
                        data-item-price={price}
                        data-item-url={`/order/${product._id}`}
                        data-item-description={product.description}
                        data-item-image={props.image}
                        data-item-name={name}
                        data-item-custom1-name="Milk"
                        data-item-custom1-options="None|Whole|Almond|Oat|2%|Soy"
                        data-item-custom1-value={milk}
                        data-item-custom2-name="Flavor"
                        data-item-custom2-options="Regular|Vanilla|Caramel|Honey Lavender|Matcha|Strawberry"
                        data-item-custom2-value={flavor}
                        data-item-custom3-name="Temp"
                        data-item-custom3-options="Hot|Iced"
                        data-item-custom3-value={temp}
                        data-item-custom4-name="Syrup"
                        data-item-custom4-value={syrup}
                        data-item-quantity={quantity} >
                    Add to cart
                </button>
            </form>
        </div>
    );
}

export default OrderForm;