import {observable, action,autorun} from 'mobx';
import Axios from 'axios';
import { Observer } from 'mobx-react';
class Read{
    @observable id = 0;
    @observable photo ="";
    @observable users = null;
    @observable city = "";
    @observable contactno = 0;
    @observable contactmail = "";
    @observable hobby = "";
    @observable sharecounttravel = 0;
    @observable reliability = 0;
    @observable answerscount = 0;
    @observable name = "";
    @observable nickname = "";
    @observable readchoise="";
    @observable library=null;
    @action _Photo()
    {
            Axios.get(`http://192.168.195.1:8088/api/TravelProfil/GetPhoto?incomingID=${this.id}`)
            .then(res => res.data)
            .then(res => {this.photo = res})
    }
    @action _city()
    {
        Axios.get(`http://192.168.195.1:8088/api/TravelProfil/GetCity?incomingID=${this.id}`)
        .then(res => res.data)
        .then(res => {this.city = res})
       
    }
    @action _contactno ()
    {
        Axios.get(`http://192.168.195.1:8088/api/TravelProfil/GetContactNo?incomingID=${this.id}`)
                .then(res => res.data)
                .then(res => { this.contactno = res})
    }
    @action _hobby ()
    {
        Axios.get(`http://192.168.195.1:8088/api/TravelProfil/GetHobby?incomingID=${this.id}`)
                .then(res => res.data)
                .then(res => { this.hobby = res})
    }
    @action _countravel ()
    {
        Axios.get(`http://192.168.195.1:8088/api/TravelProfil/GetShareCount?incomingID=${this.id}`)
                .then(res => res.data)
                .then(res => { this.sharecounttravel = res})
    }
    @action _reliability ()
    {
        Axios.get(`http://192.168.195.1:8088/api/TravelProfil/GetReliiability?incomingID=${this.id}`)
        .then(res => res.data)
        .then(res => { this.reliability=res})
    }
    @action _name ()
    {
        Axios.get(`http://192.168.195.1:8088/api/TravelProfil/GetName?incomingID=${this.id}`)
                .then(res => res.data)
                .then(res => { this.name=res })
    }
    @action _nickname ()
    {
        Axios.get(`http://192.168.195.1:8088/api/TravelProfil/GetNickname?incomingID=${this.id}`)
        .then(res => res.data)
        .then(res => {  this.nickname = res})
    }
    @action _contactemail ()
    {
        Axios.get(`http://192.168.195.1:8088/api/TravelProfil/GetEmail?incomingID=${this.id}`)
        .then(res => res.data)
        .then(res => {  this.contactmail = res})
    }
    @action _readchoise ()
    {
        Axios.get(`http://192.168.195.1:8088/api/TravelProfil/GetReadChoise?incomingID=${this.id}`)
        .then(res => res.data)
        .then(res => {  this.readchoise = res})
    }
    @action _Library = async () =>
    {
        try {
            let response = await fetch(`http://192.168.195.1:8088/api/Library/Get`);
            let json = await response.json();
            this.library = json;
        } catch (error) 
        {
            console.error(error);
        }
    }
}
export default new Read()