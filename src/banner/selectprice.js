import React from "react";

function SelectPrice(props) {
    return(
        <div className="checkBoxContainer priceSelectCenter">
            <label className={'categoryLabel priceLabel'}> Mažiausia kaina <br/>
                <input className={'priceInput'} id={'min'} onChange={(e) => props.setPrice(e)} type={'number'} defaultValue={0}/>
            </label><br/>
            <label className={'categoryLabel priceLabel'}> Didžiausia kaina <br/>
                <input className={'priceInput'} id={'max'} onChange={(e) => props.setPrice(e)} type={'number'} defaultValue={100}/>
            </label>
        </div>
    )
}

export default SelectPrice