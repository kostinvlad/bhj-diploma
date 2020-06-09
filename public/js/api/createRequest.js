/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = 

(options = {}) => {
    
    
    if(options.method === 'GET'){            
        const xhr = new XMLHttpRequest;            

            if(options.url === '/user/current'){
                if(options.data === null){
                    xhr.open( 'GET', `${options.url}` );
                    xhr.withCredentials = true
                    xhr.responseType = options.responseType
                    xhr.send();
                    xhr.onreadystatechange = function() {
                        if(this.readyState === 4 && this.status === 200){  
                            let err = this.response.error
                            let response = this.response           
                            options.callback(err, response)
                        }    
                    }
                } else {
                    xhr.open( 'GET', `${options.url}?mail=${options.data.email}&name=${options.data.name}&id=${options.data.id}` );                
                    xhr.withCredentials = true
                    xhr.responseType = options.responseType
                    xhr.send();
                    xhr.onreadystatechange = function() {
                        if(this.readyState === 4 && this.status === 200){  
                            let err = this.response.error
                            let response = this.response           
                            options.callback(err, response)
                        }    
                    } 
                }
                


            } else {
                xhr.open( 'GET', `${options.url}?mail=${options.data.email}&password=${options.data.password}` );                
                xhr.withCredentials = true
                xhr.send();
                xhr.onreadystatechange = function() {
                    if(this.readyState === 4 && this.status === 200){  
                        let err = this.response.error
                        let response = this.response           
                        options.callback(err, response)
                    }    
                } 
            }
   

    } else {
        const xhr = new XMLHttpRequest;

            let formData = new FormData;
            for(item in options.data){
                formData.append( item, options.data[item]);                
            }      

            xhr.open( options.method, options.url );
            xhr.responseType = options.responseType
            
            xhr.withCredentials = true
            try {
                xhr.send( formData );
                xhr.onload = function() {                     
                        let err = this.response.error
                        let response = this.response            
                        options.callback(err, response)    
                } 
            }
            catch (e) {
                console.error(e)
            }      
        }
};
