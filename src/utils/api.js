const API = 'https://api.covid19api.com/summary'

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

}

export default new Api;