import {observable , configure, action} from 'mobx'
import axios from 'axios'
configure({
    enforceActions: "observed"
});
class Book{
    @observable bookname = [];
    @action fetchBook (){
        axios.get('http://192.168.195.1:8088/api/BookList/Get')
        .then(res => res.data.results)
        .then( 
            this.bookname= this.bookname.concat(res)
        )
        console.log(this.bookname)
    }
}

export default new Book()