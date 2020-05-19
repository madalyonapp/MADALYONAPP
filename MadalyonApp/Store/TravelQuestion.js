import {observable, action,autorun} from 'mobx';
import Axios from 'axios';
import { Observer } from 'mobx-react';
class TravelQuestion{
    @observable travelquestion=null;
    @observable readquestions=null;
    @observable nickname="";
    @observable from_id=0;
    @observable question_id=0;
    @observable users=null;
    @observable answers ="";
    @action _updateandwers(){
        Axios.get(`http://192.168.195.1:8088/api/QuestionsSet/UpdateAnswers?incmoingQuestionsID=${this.question_id}&answermessage=${this.answers}`)
        .then(res => res.data)
    }
    @action _travelquestion = async () =>
    {
        try {
            let response = await fetch(`http://192.168.195.1:8088/api/TravelQuestion/Get`);
            let json = await response.json();
            this.travelquestion = json;
        } catch (error) 
        {
            console.error(error);
        }
    }
    @action _readquestions = async () =>
    {
        try {
            let response = await fetch(`http://192.168.195.1:8088/api/ReadQuestions/Get`);
            let json = await response.json();
            this.readquestions = json;
        } catch (error) 
        {
            console.error(error);
        }
    }
    @action _nickname(){
        Axios.get(`http://192.168.195.1:8088/api/TravelProfil/GetNickname?incomingID=${this.from_id}`)
        .then(res => res.data)
        .then(res => {  this.nickname = res})
        
       
    }
    @action _user= async () =>{
        try {
            let response = await fetch(`http://192.168.195.1:8088/api/User_Table/Get`);
            let json = await response.json();
            this.users = json;
        } catch (error) 
        {
            console.error(error);
        }
    }

}export default new TravelQuestion()