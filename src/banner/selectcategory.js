import React from "react";

function SelectCategory(props) {
    return(
        <div className="container">
            <label className={'categoryLabel'}>
                {props.selectCategory ? 'Ką mėgsta žmogus, kuriam ieškote dovanos?' : ''}
                <select onChange={(e) => props.setSelectOption(e)} className={'categorySelectBox'} id="categories">
                    <option>Pasirinkite kategoriją</option>
                    {props.options.map((option, i) => {
                        return(
                            <option key={i} value={option.path}>
                                {option.name}
                            </option>
                        )
                    })}
                </select>
            </label>
        </div>
    )
}

export default SelectCategory