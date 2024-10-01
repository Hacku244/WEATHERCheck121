     
        
        const apikey="381a82372e3be0af1cc402c7cb4d52f0 ";
        const apiURL =" https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const Searchbox = document.querySelector(".search input");
        const Searchbtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function CheckWeather( city) {
            const response= await fetch( apiURL + city  +`&appid=${apikey}`);
            if(response.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
                
            }
            else{
            var data= await response.json();
        

            document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp )+"°C";

        document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
        document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";

        if(data.weather[0].main == "Clouds"){
            
            weatherIcon.src="images/cloudy (2).png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src="images/sun.png";
        }
        else if(data.weather[0].main  == "Rain"){
            weatherIcon.src="images/raining.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src="images/mist.png";
            
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src="images/winter.png";
            
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/drizzle.png";
        }
        else if (data.weather[0]=="Thunderstorm"){
            weatherIcon.src="images/storm.png";
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
}
        
        Searchbtn.addEventListener("click", () => {
        
        CheckWeather( Searchbox.value);
        });

    


       


    