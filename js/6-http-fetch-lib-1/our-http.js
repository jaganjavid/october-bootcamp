

class OurHttp{

    // Make an get Request

    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject("some thing went worng"));
        })
    }

    post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify(data)
            }).then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject("some thing went worng"));
            
        })
    }


    put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method:"PUT",
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify(data)
            }).then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject("some thing went worng"));
            
        })
    }

    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method:"DELETE",
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify(data)
            }).then(res => res.json())
            .then(data => resolve("Resource Deleted"))
            .catch(err => reject("some thing went worng"));
            
        })
    }

}