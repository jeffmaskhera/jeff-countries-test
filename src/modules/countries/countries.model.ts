
export class CountriesModel {
    public name: string = '';
    public imageFlag: string = '';
    public alt: string = '';
    public languages: Array<string> = [];
    public population: string
    public region: string
    public capital: [string]
    public nativeName: string
    public subRegion: string
    public borderCountries: [string]
    public currencies: object
    public topLevelDomain: [string]

    constructor(init: Partial<CountriesModel> = {}) {
        Object.keys(init).forEach(key => {
            if (Object.keys(this).includes(key)) this[key] = init[key]
        })
    }
}