import React from "react";

function SelectPrice(props) {
    return(
        <div className="container">
            <label className={'categoryLabel priceLabel'}> Mažiausia kaina <br/>
                <input id={'min'} onChange={(e) => props.setPrice(e)} type={'number'} defaultValue={0}/>
            </label><br/>
            <label className={'categoryLabel priceLabel'}> Didžiausia kaina <br/>
                <input id={'max'} onChange={(e) => props.setPrice(e)} type={'number'} defaultValue={100}/>
            </label>
        </div>
    )
}

export default SelectPrice