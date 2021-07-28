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

    // Variables to identify if flavor or temperature can be changed
    const flavorChange = product.flavorChange;
    const tempChange = product.tempChange;
    
    const handleSubmit = (e) => {
        e.preventDefault();

        // Add function to add the product to the cart

    }

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
                    <option value='2% Lowfat' key='3'>2% Lowfat</option>
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
                        <p>{flavor}</p>
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
                        <p>{temp}</p>
                }
                <label for='custom-syrup'>Syrup</label>
                <select className='custom-option' 
                        id='custom-syrup' 
                        onChange={(e) => setSyrup(e.target.value)}>
                    <option value={syrup} selected='selected' key='0'>{syrup}</option>
                    <option value='1' key='1' >1</option>
                    <option value='2' key='2' >2</option>
                    <option value='3' key='3'>3</option>
                    <option value ='4' key='4'>4</option>
                </select>
                <button type='submit' value='submit'>Add to cart</button>
            </form>
        </div>
    );
}

export default OrderForm;