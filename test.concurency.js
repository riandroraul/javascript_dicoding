class NetworkError extends Error {

    constructor(message) {

      super(message);

      this.name = 'NetworkError';

    }

  }

  

  // TODO: 1

  const fetchingUserFromInternet = (callback, isOffline) => {

    return new Promise((resolve, reject) => {

        setTimeout(() =>{

            if(isOffline){

                reject(new NetworkError('Gagal mendapatkan data dari internet'));

            }

            resolve({ name: 'John', age: 18 });

        },500)

    })

  };

 

 async function gettingUserName(){

     try{

        const user = await fetchingUserFromInternet(false);

        return user.name;   

     }catch(error){

         return error.message;

     }

}

  console.log(gettingUserName());

//   try {
//     const arr = [1, 2, 3, 4];
//     for (let i = 0; i <= 4; i++) {
//         console.log(arr[i]);
//     }
// } catch(e) {
//     console.log("Out of bounds");
// }


// Perhatikan kode berikut:

function fetchUsername() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('JSUser');
        }, 3000);
    })
}

console.log("Fetching username...");
fetchUsername().then((value) => {
    console.log(`You are logged in as ${value}`);
})
console.log("Welcome!");