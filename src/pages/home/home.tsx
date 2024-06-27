import React, {useEffect, useState} from 'react';
import {searchCountries} from "../../modules/countries/countries.informer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import CustomSelect from "../../components/custom-select/custom-select";
import Link from 'next/link'
import {CountriesModel} from "../../modules/countries/countries.model";
import {urls} from "../../routes/routes-data";
import Spinner from "../../components/spinner/spinner";

const Home = () => {

    const [countries, setCountries] = useState<CountriesModel[]>([])
    const [showSpinner, setShowSpinner] = useState<boolean>(true)
    const [filter, setFilter] = useState({
        name: '',
        region: '',
    })

    const selectData = [ 'Africa', 'America', 'Asia', 'Europe', 'Oceania', 'All' ]

    const getInfo = async (valueFilter) => {
        const response = await searchCountries(valueFilter);
        setCountries(response)
        setShowSpinner(false)
    };

    const handleChange =(e)=> {
        const value = e?.target?.value
        const name = e?.target?.name

        setFilter({
            ...filter,
            [name]: value,
        })
    }

    const handleSelect =(value: string)=> {
        if (value !== filter.region) {
            setFilter({
                ...filter,
                ['region']: value,
            })
        }
    }



    useEffect(() => {
        getInfo(filter);
    }, [filter]);



    return (
        <div className="home">
            {showSpinner && <Spinner />}

            <div className="home__container-filters">
                <div className="container-input">
                    <div className="container-input__icon-left">
                        <FontAwesomeIcon icon={faSearch} />
                    </div>

                    <input type="text" className="input-style" placeholder="Search for a country..." value={filter.name} name={'name'} onChange={handleChange}/>
                </div>
                <CustomSelect
                    selectData={selectData}
                    handleSelect={handleSelect}
                />
            </div>

            <div className="home__grid-countries">
                {countries && countries.length >= 0 &&
                    countries.map((country, id)=> {
                        return (
                            <Link href={`${urls.countryDetail}${country?.name}`} className="home__grid-countries__item-country" key={id}>
                                <div className="home__grid-countries__item-country__box-image">
                                    <img
                                        src={country?.imageFlag}
                                        alt={country?.alt}
                                    />
                                </div>
                                <div className="home__grid-countries__item-country__container-info">
                                    <h3>{country?.name}</h3>
                                    <p><strong>Population:</strong> <span>{country?.population ? country?.population : 'Not found'}</span> </p>
                                    <p><strong>Region:</strong> <span>{country?.region ? country?.region : 'Not found'} </span></p>
                                    <p><strong>Capital:</strong> {country.capital && country.capital.length >= 0 &&
                                        country.capital.map((capital, idCap)=> {
                                            return (
                                                <span key={idCap}>{capital ? capital : 'Not found'}</span>
                                            )
                                        })
                                    }</p>
                                </div>

                            </Link>
                        )
                    })
                }
            </div>

        </div>
    );
}


export default Home;


