import {observable, action,autorun} from 'mobx';
import Axios from 'axios';
import Login from './Login';
class MapStore {
    @observable mapscity = null;
    @observable mapscountry= null;
    
    @action mapsCityAll()
    {
        Axios.get(`https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json`)
        .then(res => res.data)
        .then(res => {  this.mapscity = res.JSON.stringify(name, country_code)})
    }
    
    @action mapsCountriesAll()
    {
        Axios.get(`https://gist.githubusercontent.com/keeguon/2310008/raw/bdc2ce1c1e3f28f9cab5b4393c7549f38361be4e/countries.json`)
        .then(res => res.data)
        .then(res => {  this.mapscountry = res.JSON.stringify(name, code)})
    }

}export default new MapStore()




