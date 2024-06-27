
import React, {useEffect, useState} from 'react';
import {searchCountry} from "../../modules/countries/countries.informer";
import {CountriesModel} from "../../modules/countries/countries.model";
import Link from 'next/link'
import {urls} from "../../routes/routes-data";
import Spinner from "../../components/spinner/spinner";

const CountryDetail = ({route}) => {
    const [showSpinner, setShowSpinner] = useState<boolean>(true)
    const [country, setCountry] = useState<CountriesModel>(new CountriesModel())


    const getCountry = async (route: string)=> {
        const response = await searchCountry(route)
        setCountry(response)
        setShowSpinner(false)
    }

    const renderTopLevel = (country) => {
        return (
            <>
                <strong>Top Level Domain: </strong>
                {country?.topLevelDomain && country?.topLevelDomain.length > 0 ? (
                    country?.topLevelDomain.map((topLevel, id) => (
                        <span key={id}>
                            {topLevel}
                            {id < country.topLevelDomain.length - 1 && ', '}
                        </span>
                    ))
                ) : (
                    <>Not Found</>
                )}
            </>
        );
    };

    const renderCurrency = (country: { currencies?: { name?: string } }) => {
        return (
            <>
                <strong>Currency:</strong>{' '}
                {country?.currencies && Object.keys(country?.currencies).length > 0 ? (
                    Object.values(country?.currencies).map((currencies, id) => (
                        <span key={id}>
                            {currencies?.['name']}
                            {id < Object.keys(country?.currencies).length - 1 && ', '}
                        </span>
                    ))
                ) : (
                    <>Not Found</>
                )}
            </>
        );
    };

    const renderLanguage = (languages: any) => {
        return (
            <>
                <strong>Language:</strong>{' '}
                {languages && Object.keys(languages).length > 0 ? (
                    Object.values(languages).map((language: any, id: any) => (
                        <span key={id}>
              {language}
                            {id < Object.keys(languages).length - 1 && ', '}
            </span>
                    ))
                ) : (
                    <>Not Found</>
                )}
            </>
        );
    };

    const renderCapital = (country) => {
        return (
            <>
                <strong>Capital:</strong>{' '}
                {country?.capital && country?.capital.length > 0 ? (
                    country?.capital.map((topLevel, id) => (
                        <span key={id}>
                            {topLevel}
                            {id < country.capital.length - 1 && ', '}
                        </span>
                    ))
                ) : (
                    <>Not Found</>
                )}
            </>
        );
    };

    const renderBorderCountries =(country)=> {
        return (
            <div className="country-page__country-detail__right-grid__content-borders">
                <strong>Border Countries:</strong>
                <div className="country-page__country-detail__right-grid__content-borders__flex-tags">
                    {country?.borderCountries && country?.borderCountries.length > 0 ? (
                        country?.borderCountries.map((topLevel, id) => (
                            <div className="button s" key={id}>
                                {topLevel}
                                {id < country.borderCountries.length - 1 && ', '}
                            </div>
                        ))
                    ) : (
                        <>Not Found</>
                    )}
                </div>
            </div>
        )
    }


    useEffect(()=> {
        if (route !== undefined) {
            getCountry(route)
        }
    }, [route])


    return (
        <div className="country-page">

            {showSpinner && <Spinner />}

            <Link href={urls.home} className="button m">
                Back
            </Link>

            <div className="country-page__country-detail">

                <div className="country-page__country-detail__left-grid">
                    <div className="country-page__country-detail__left-grid__flag">
                        <img src={country?.imageFlag} alt={country?.alt} />
                    </div>
                </div>
                <div className="country-page__country-detail__right-grid">
                    <h2 className="country-page__country-detail__right-grid__title">{country?.nativeName} </h2>
                    <div className="country-page__country-detail__right-grid__content-grid">
                        <div className="grid-row10">
                            <p className="country-page__country-detail__right-grid__content-grid__paragraph"><strong>Native Name:</strong> {country?.nativeName ? country?.nativeName : 'Not found'}</p>
                            <p className="country-page__country-detail__right-grid__content-grid__paragraph"><strong>Population:</strong> {country?.population ? country?.population : 'Not found'}</p>
                            <p className="country-page__country-detail__right-grid__content-grid__paragraph"><strong>Region:</strong> {country?.region ? country?.region : 'Not found'}</p>
                            <p className="country-page__country-detail__right-grid__content-grid__paragraph"><strong>Sub Region:</strong> {country?.subRegion ? country?.subRegion : 'Not found'}</p>
                            <p className="country-page__country-detail__right-grid__content-grid__paragraph">{renderCapital(country)}</p>
                        </div>
                        <div className="grid-row10">
                            <p className="country-page__country-detail__right-grid__content-grid__paragraph">{renderTopLevel(country)}</p>
                            <p className="country-page__country-detail__right-grid__content-grid__paragraph">{renderCurrency(country)}</p>
                            <p className="country-page__country-detail__right-grid__content-grid__paragraph">{renderLanguage(country?.languages)}</p>
                        </div>
                    </div>

                    {renderBorderCountries(country)}
                </div>
            </div>
        </div>
    );
};


export default CountryDetail;


