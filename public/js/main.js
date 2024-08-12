const btn = document.getElementById("submitBtn")
const cityName = document.getElementById("cityName")
const temp = document.getElementById("temperature")
const city = document.getElementById("city")
const country = document.getElementById("country")

const d = document.getElementById("date")

const hide = document.querySelector(".temp-scale")

const getInfo = async()=>{
    let cityVal = cityName.value;

    if(cityVal === ""){
        alert("Please enter city")
        hide.classList.add("data_hide")
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=928259952c67eeb229afc132b6ccb2af`
            const response = await fetch(url)
            const data = await response.json()
            const arr = [data]

            temp.innerText = arr[0].main.temp;
            city.innerText = arr[0].name;
            country.innerText = arr[0].sys.country;
 
            const date = new Date().toLocaleDateString()
            d.innerText = date
        }
        catch(err){
            alert("Please enter the city name properly....☠️")
        }
        
    }
}

btn.addEventListener("click",getInfo)