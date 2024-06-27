import {CountriesModel} from "./countries.model";
import {formatNumeric, switchCases} from "../../utils/helpers";
import {baseUrl} from "../env";





export const searchCountries = async (filter: { [key: string]: string }) => {
    try {
        const apiUrl = switchCases(
            filter.name ? 'name' : filter.region && filter.region !== 'All' ? 'region' : 'default',
            {
                name: `${baseUrl}/name/${filter.name}`,
                region: `${baseUrl}/region/${filter.region}`,
                default: `${baseUrl}/all`,
            }
        );

        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.length >= 0) {
            return data?.map((item: any)=> formatData(item))
        } else {
            return ([])
        }


    } catch (error) {
        console.error("Error:", error);
    }
}

export const searchCountry = async (country: string) => {
    try {
        const apiUrl = `${baseUrl}/name/${country}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return formatData(data[0])

    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

const formatData =(data: any)=> {
    return new CountriesModel({
        name: data?.['name']?.['common'],
        imageFlag: data?.['flags']?.['png'],
        alt: data?.['name']?.['common'],
        population: formatNumeric(data?.['population']),
        region: data?.['region'],
        capital: data?.['capital'],
        nativeName: data?.['name']?.['official'],
        subRegion: data?.['subregion'],
        borderCountries: data?.['borders'],
        languages: data?.['languages'],
        currencies: data?.['currencies'],
        topLevelDomain: data?.['tld'],
    })
}
