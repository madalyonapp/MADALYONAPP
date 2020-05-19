import {observable, action,autorun} from 'mobx';
import Axios from 'axios';
import Login from './Login';
class Add {
    @observable bookname="";
    @observable writename="";
    @observable bookchoise="";
    @observable country="";
    @observable city="";
    @observable date=new Date();
    @observable mapchoise="";

    @action AddBook()
    {
        Axios.get(`http://192.168.195.1:8088/api/Add/BookAdd?incomingBookname=${this.bookname}&incomingWritename=${this.writename}&incomingChoise=${this.bookchoise}&incomingUser_id=${Login.id}`)
    }
    @action AddMap()
    {
        Axios.get(`http://192.168.195.1:8088/api/Add/MapAdd?incomingCountry=${this.country}&incomingCity=${this.city}&date=${this.date}&incomingChoise=${this.mapchoise}&incomingUser_id=${Login.id}`)
        .catch(err=>console.log("api çalışmadı"))
        console.log(this.date)
    
    }

}export default new Add()