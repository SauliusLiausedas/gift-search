import React, { Component } from 'react'
import '../stylesheets/banner.css'
import { data } from "./data";
import SelectCategory from "./selectcategory";
import CheckBoxes from "./checkboxes";
import SelectPrice from "./selectprice";

class Banner extends Component {
    constructor(){
        super()
        this.url = 'https://www.beta.lt/'
        this.state = {
            categories: '',
            selectedCategory: '',
            selectedCities: [],
            selectedPeople: [],
            selectedNights: [],
            minPrice: '',
            maxPrice: '',
            travelLocationCountry: '',
            subCategory: '',
            page: 0,
        }
    }
    componentWillMount() {
        this.setState({ categories: data.categories})
    }

    setCategory(e) {
        this.setState({selectedCategory: e.target.value, page: this.state.page+1})
    }

    setCities(e) {
        this.setState({selectedCities: e, page: this.state.page+1})
    }

    setPeopleCount(e) {
        this.setState({selectedPeople: e, page: this.state.page+1})
    }
    setNights(e) {
        this.setState({selectedNights: e, page: this.state.page+1})
    }
    setHotelType(e) {
        this.setState({selectedHotelType: e, page: this.state.page+1})
    }
    setTravelLocationCountry(e) {
        this.setState({travelLocationCountry: e, page: this.state.page+1})
    }
    setPrice(e) {
        if(e.target.id === 'min') {
            this.setState({minPrice: e.target.value})
        } else {
            this.setState({maxPrice: e.target.value})
        }
    }
    setSubCategory(e) {
        this.setState({subCategory: e.target.value, page: this.state.page+1})
    }


    redirect() {
        if(this.state.selectedCategory) {
            this.url = this.url + this.state.selectedCategory
        }
        if(this.state.subCategory) {
            this.url = this.url + this.state.subCategory
        }
        if (this.state.selectedCities && this.state.selectedCities.length > 0) {
            let cities = this.state.selectedCities.join(',')
            this.url = this.url + '?filters[6]=' + cities + '&'
        } else if(this.state.selectedCities && this.state.selectedCities.length === 0) {
            this.url = this.url + '?'
        }
        if (this.state.selectedPeople && this.state.selectedPeople.length > 0) {
            let people = this.state.selectedPeople.join(',')
            this.url = this.url + 'filters[18]=' + people + '&'
        }
        if (this.state.selectedNights && this.state.selectedNights.length > 0) {
            let nights = this.state.selectedNights.join(',')
            this.url = this.url + 'filters[20]=' + nights + '&'
        }
        if (this.state.selectedHotelType && this.state.selectedHotelType.length > 0) {
            let hotelTypes = this.state.selectedHotelType.join(',')
            this.url = this.url + 'filters[15]=' + hotelTypes
        }
        if (this.state.travelLocationCountry) {
            let locationCountries = this.state.travelLocationCountry.join(',')
            this.url = this.url + `filters[5]=${locationCountries}&`
        }
        if (this.state.minPrice) {
            this.url = this.url + `&from_eur=${this.state.minPrice}`
        }
        if (this.state.maxPrice) {
            this.url = this.url + `&to_eur=${this.state.maxPrice}`
        }
        window.location.replace(this.url)
    }

    renderContainer() {
        let componentToReturn = ''
        if(!this.state.selectedCategory) {
            return (
                <SelectCategory setSelectOption={(e) => this.setCategory(e)} options={this.state.categories} selectCategory={'Ką mėgsta žmogus, kuriam ieškote dovanos?'}/>
            )
        } else if (this.state.selectedCategory === 'viesbuciai') {
            switch (this.state.page) {
                case 1:
                    componentToReturn = <CheckBoxes text={'Pasirinkite Jums tinkančius miestus'}
                                                    setCheckBoxes={(e) => this.setCities(e)}
                                                    checkBoxes={this.state.categories[0].cities}/>
                    break
                case 2:
                    componentToReturn = <CheckBoxes text={'Kiek asmenų vyks?'}
                                                    setCheckBoxes={(e) => this.setPeopleCount(e)}
                                                    checkBoxes={this.state.categories[0].peopleCount}/>
                    break
                case 3:
                    componentToReturn = <CheckBoxes text={'Kiek naktų norėtumėte apsistoti?'}
                                                    setCheckBoxes={(e) => this.setNights(e)}
                                                    checkBoxes={this.state.categories[0].nights}/>
                    break
                case 4:
                    componentToReturn =  <CheckBoxes text={'Koks viešbučių tipas Jums priimtiniausias?'}
                                                     setCheckBoxes={(e) => this.setHotelType(e)}
                                                     checkBoxes={this.state.categories[0].hotelTypes}/>
                    break
                case 5:
                    componentToReturn = <SelectPrice setPrice={(e) => this.setPrice(e)}/>
                    break
                default:
                    componentToReturn = <SelectCategory setSelectOption={(e) => this.setCategory(e)} options={this.state.categories} selectCategory={'Ką mėgsta žmogus, kuriam ieškote dovanos?'}/>
            }
        } else if (this.state.selectedCategory === 'keliones') {
            switch (this.state.page) {
                case 1:
                    componentToReturn = <CheckBoxes text={'Kokia kryptis būtų tinkamiausia?'}
                                                    setCheckBoxes={(e) => this.setTravelLocationCountry(e)}
                                                    checkBoxes={this.state.categories[1].travelToCountry}/>
                    break
                case 2:
                    componentToReturn = <CheckBoxes text={'Kiek laiko galės trukti kelionė?'}
                                                    setCheckBoxes={(e) => this.setTravelLocationCountry(e)}
                                                    checkBoxes={this.state.categories[1].travelTime}/>
                    break
                case 3:
                    componentToReturn = <SelectPrice setPrice={(e) => this.setPrice(e)}/>
                    break
                default:
                    componentToReturn =  <SelectCategory setSelectOption={(e) => this.setCategory(e)} options={this.state.categories} selectCategory={'Ką mėgsta žmogus, kuriam ieškote dovanos?'}/>

            }
        } else if (this.state.selectedCategory === 'paslaugos/laisvalaikis') {
            switch(this.state.page) {
                case 1:
                    componentToReturn = <CheckBoxes text={'Pasirinkite Jums tinkančius miestus'}
                                                    setCheckBoxes={(e) => this.setCities(e)}
                                                    checkBoxes={this.state.categories[2].cities}/>
                    break
                case 2:
                    componentToReturn = <CheckBoxes text={'Kiek asmenų vyks?'}
                                                    setCheckBoxes={(e) => this.setPeopleCount(e)}
                                                    checkBoxes={this.state.categories[0].peopleCount}/>
                    break
                case 3:
                    componentToReturn = <SelectPrice setPrice={(e) => this.setPrice(e)}/>
                    break
                default:
                    componentToReturn =  <SelectCategory setSelectOption={(e) => this.setCategory(e)} options={this.state.categories} selectCategory={'Ką mėgsta žmogus, kuriam ieškote dovanos?'}/>
            }
        } else if (this.state.selectedCategory === 'paslaugos/restoranai') {
            switch(this.state.page) {
                case 1:
                    componentToReturn = <CheckBoxes text={'Pasirinkite Jums tinkančius miestus'}
                                                    setCheckBoxes={(e) => this.setCities(e)}
                                                    checkBoxes={this.state.categories[3].cities}/>
                    break
                case 2:
                    componentToReturn = <SelectPrice setPrice={(e) => this.setPrice(e)}/>
                    break
                default:
                    componentToReturn =  <SelectCategory setSelectOption={(e) => this.setCategory(e)} options={this.state.categories} selectCategory={'Ką mėgsta žmogus, kuriam ieškote dovanos?'}/>
            }
        } else if (this.state.selectedCategory === 'paslaugos/grozis-ir-sveikata') {
            switch(this.state.page) {
                case 1:
                    componentToReturn = <CheckBoxes text={'Pasirinkite Jums tinkančius miestus'}
                                                    setCheckBoxes={(e) => this.setCities(e)}
                                                    checkBoxes={this.state.categories[4].cities}/>
                    break
                case 2:
                    componentToReturn = <SelectPrice setPrice={(e) => this.setPrice(e)}/>
                    break
                default:
                    componentToReturn =  <SelectCategory setSelectOption={(e) => this.setCategory(e)} options={this.state.categories} selectCategory={'Ką mėgsta žmogus, kuriam ieškote dovanos?'}/>
            }
        } else if (this.state.selectedCategory === 'paslaugos/sveikata') {
            switch (this.state.page) {
                case 1:
                    componentToReturn = <CheckBoxes text={'Pasirinkite Jums tinkančius miestus'}
                                                    setCheckBoxes={(e) => this.setCities(e)}
                                                    checkBoxes={this.state.categories[5].cities}/>
                    break
                case 2:
                    componentToReturn = <SelectPrice setPrice={(e) => this.setPrice(e)}/>
                    break
                default:
                    componentToReturn =  <SelectCategory setSelectOption={(e) => this.setCategory(e)} options={this.state.categories} selectCategory={'Ką mėgsta žmogus, kuriam ieškote dovanos?'}/>
            }
        } else if (this.state.selectedCategory === 'dovanos') {
            switch (this.state.page) {
                case 1:
                    componentToReturn =  <SelectCategory setSelectOption={(e) => this.setSubCategory(e)} options={this.state.categories[6].subcategories} selectCategory={'Kam ieškote dovanos?'}/>
                    break
                case 2:
                    componentToReturn = <CheckBoxes text={'Pasirinkite Jums tinkančius miestus'}
                                                    setCheckBoxes={(e) => this.setCities(e)}
                                                    checkBoxes={this.state.categories[6].cities}/>
                    break
                case 3:
                    componentToReturn = <SelectPrice setPrice={(e) => this.setPrice(e)}/>
                    break
                default:
                    componentToReturn =  <SelectCategory setSelectOption={(e) => this.setCategory(e)} options={this.state.categories} selectCategory={'Ką mėgsta žmogus, kuriam ieškote dovanos?'}/>
            }
        }
        return componentToReturn
    }

    render() {
        console.log(this.state.page)
        return(
            <div className={'banner'}>
                <div className="header">
                    <h1> Išrinkite geriausią Kalėdų dovaną</h1>
                </div>
                {this.renderContainer()}
                <button className="searchButton" onClick={() => this.redirect()}> Ieškoti </button>
            </div>
        )
    }
}

export default Banner