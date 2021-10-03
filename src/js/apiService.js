const url = 'https://pixabay.com/api/';
const MY_KEY = '23677072-ad1f1d27f5221362a9cf8bc21';


export default
class ApiService {
    constructor(){
        this.query = '';
        this.page = 1;
    }
async fetchImg(){         
    let response = await fetch(`${url}/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${MY_KEY}`);
    let data = await response.json();
    let hits = await data.hits
    this.incrementPage();
    
    return hits;
}

incrementPage(){
    this.page +=1
    
}
 
clearPage(){
    return this.page = 1;
}
}