let card_div = document.getElementById("card_div");

const fetchAPI = async () => {
    let API_URL= 'https://jsonplaceholder.typicode.com/albums';

    try { 

        let firstAwait = await fetch(API_URL);
        let response = await firstAwait.json();

        data = response;
        createCard();
        console.log("response:  ", response);
        
    } catch (error) {
        console.log(error);
    }
}
fetchAPI();

  function createCard() {
    data.forEach((album) => {
        console.log("ALBUM:  ",album);
        let div = document.createElement("div");
        let h5 = document.createElement("h5");
        h5.textContent = album.id;
        let h2 =  document.createElement("h2");
        h2.textContent = album.title
        let h6 = document.createElement("h6")
        h6.textContent= album.userId;

        div.append(h5,h2,h6);

        card_div.append(div);
    }) 
    };
  
