import axios from 'axios'

let JsonData ;

const request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
    if(request.readyState === 4){
        console.log(request.responseText)
         return request.responseText;
    }
})
function sendRequest() {
     
    request.open('GET','http://localhost:8080/FirstServlet/pqr');
    request.send();

}




export  {sendRequest}
