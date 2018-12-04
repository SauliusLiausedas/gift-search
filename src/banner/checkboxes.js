import React, { Component } from "react";
import help from '../services/helperfunctions'

class CheckBoxes extends Component {
    constructor() {
        super()
        this.state = {
            boxValues: []
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        let uncheck = document.getElementsByTagName('input')
        for(let box in uncheck) {
            if(uncheck[box].type === 'checkbox'){
                uncheck[box].checked = false
            }
        }
    }

    checkCheckBox(e) {
        const boxValues = help.cloneArray(this.state.boxValues)
        if(boxValues.includes(e.target.value)) {
            let index = boxValues.indexOf(e.target.value)
            boxValues.splice(index, 1)
        } else {
            boxValues.push(e.target.value)
        }
        this.setState({boxValues: boxValues})
    }


    render(){
        return(
            <div className="checkBoxContainer">
                <h2 className={'checkBoxText'}>{this.props.text}</h2>
                <ul className={'checkBoxGrid'}>
                    {this.props.checkBoxes.map((box, i) => {
                        return(
                            <li className={'checkBoxli'} key={i}>
                                <label className={'checkBoxLabel'}>{box[0]}
                                    <input defaultChecked={false} type={'checkbox'} value={box[1]} id={`checkbox${i}`} onChange={(e) => this.checkCheckBox(e)} className={'checkBox'}/>
                                </label>
                            </li>
                        )
                    })}
                </ul>
                <button className={'nextButton searchButton'} onClick={() => this.props.setCheckBoxes(this.state.boxValues)}>Toliau</button>
            </div>
        )
    }
}

export default CheckBoxes