import {observable, action,autorun} from 'mobx';
import Axios from 'axios';
import Login from './Login';
import Visit from './Visit';
class Update {
    @observable id = 0;
    @observable checked1=false;
    @observable checked2=false;
    @observable insifre="";
    @observable city = "";
    @observable contactno = 0;
    @observable hobby = "";
    @observable name = "";
    @observable nickname = "";
    @observable travelchoise="";
    @observable readchoise = "";

    @action Updatehesap(){
        Axios.get(`http://192.168.195.1:8088/api/Update/UpdateHesap?incomingID=${Login.id}&incomingnickname=${this.nickname}&incomingpassword=${this.insifre}`)
    }
    @action UpdateBilgiler(){
        Axios.get(`http://192.168.195.1:8088/api/Update/UpdateBilgiler?incomingID=${Login.id}&incomingname=${this.name}&incomingcity=${this.city}&incomingtravelchoise=${this.travelchoise}&incominghobby=${this.hobby}&incomingreadchoise=${this.readchoise}`)

    }
    @action UpdateReliability(){
        Axios.get(`http://192.168.195.1:8088/api/TravelProfil/GetReliabilityPlus?inComingID=${Visit.id}`)
    }
}export default new Update()