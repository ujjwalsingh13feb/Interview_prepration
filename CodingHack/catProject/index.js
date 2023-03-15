// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


// let amount = JSON.parse(localStorage.getItem("amount"));

// let h1 = document.getElementById("wallet");
// h1.innerText = amount




let movies = document.getElementById("movies");

let el =document.getElementById("search")

let getdata = async() =>{
    try{
        // let search = document.getElementById("search").value;

        let res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_bMuCPZXKalXyAMC8TOkQ0NPxzYhj16TBoJ8zU7clZM2YzSpDpXlIuWCDB594sCnL`);

        let data = await res.json()
        console.log(data)
        append(data)
    }catch(error){
        console.log(error)
    }
}
getdata()

// el.addEventListener("keydown",getdata)

// let picture= JSON.parse(localStorage.getItem("movie")) ||[]

function append(data){
    movies.innerHTML = null
  

    data.forEach((element)=>{
        let box = document.createElement("div");

        let image = document.createElement("img");
        image.setAttribute("class","movie_tab")
        image.src = element.url
        // console.log(image)

        let Title = document.createElement("h2");
        Title.innerText = element.breeds[0].name;

        let description = document.createElement("p");
        description.innerText = element.breeds[0].description;

        let Origin = document.createElement("h4");
        Origin.innerText = element.breeds[0].origin;

        let temperament = document.createElement("h3");
        temperament.innerText = element.breeds[0].temperament;
        
// 
        let LifeSpan = document.createElement("h2");
        LifeSpan.innerText = element.breeds[0].life_span;

        let Wikepedia = document.createElement("h2");
        Wikepedia.innerText = element.breeds[0].wikipedia_url;

        let btn = document.createElement("button");
        btn.setAttribute("class", "book_now")
        
        btn.innerText = "View Image"
        btn.addEventListener("click",function(){
            picture.push(element);
            localStorage.setItem("movie",JSON.stringify(picture))
            window.location.href ="checkout.html"
        })

        box.append(image,Title,description,Origin,temperament,LifeSpan,Wikepedia,btn)
        movies.append(box)
    })

}