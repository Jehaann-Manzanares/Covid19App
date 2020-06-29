const API = 'https://api.covid19api.com/summary'
const API_Countries_Flags = 'https://restcountries.eu/rest/v2/all';
const API_Country_All_STATUS = 'https://api.covid19api.com/live/country/';


class Api {
    async getSummary() {
        const query = await fetch(API);
        const  summary  = await query.json();
        console.log(summary)
        return summary;
    }
    async getGlobal() {
        const query = await fetch(API);
        const  {Global}  = await query.json();
        console.log(Global)
        return Global;
    }

    async getCountries() {
        const query = await fetch(API);
        const  {Countries}  = await query.json();
        console.log(Countries)
        return Countries;
    }
    async getCountriesNameandFlag(){
        const query = await fetch(API_Countries_Flags);
        const ListCountries = await query.json();
        console.log(ListCountries)
        return ListCountries;
    }
    async getCountryAllStatus(NameCountry){
        const query = await fetch(`${API_Country_All_STATUS}${NameCountry}`);
        const Country = await query.json();
        //console.log(Country[0])
        return Country[0];
    }

}

export default new Api;