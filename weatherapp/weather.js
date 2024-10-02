// fetch(https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=66d7f039c814394772746450b4e6dd55)
let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let location=document.getElementById("location").value
    let fetchweather=async()=>{
        let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=66d7f039c814394772746450b4e6dd55`)
        let finaldata=await data.json()
     console.log(finaldata)
         let weatherdescription=(finaldata.weather[0].main).toUpperCase()
      

        let tempvalue=(Math.round(finaldata.main.temp-273))
        let humid=(finaldata.main.humidity)
        let desc=document.getElementById("desc")
         desc.innerHTML=weatherdescription

         let temp=document.querySelector("#temperature>h1")
         temp.innerHTML=`${tempvalue} <sup>o</sup><span>C</span>`
         let hum=document.querySelector("#humidity>span")
         hum.innerHTML=`${humid} <span>KMPH</span>`





         let img=document.getElementById("img")
         console.log(img)
         let bgc=document.getElementById("main_container")
         switch(weatherdescription){
            case 'CLEAR' : 
                img.src="clear-sky.png"
                bgc.style.backgroundImage="url(clearwheather.gif)"
                break;
                case  'CLOUDS' : 
                          img.src="cloud.png"
                            bgc.style.backgroundImage="url(cloudwheather.gif)"
                                break;
                case  'RAIN' : 
                           img.src="rainy.png"
                              bgc.style.backgroundImage="url(rain.gif)"
                                    break;
                case  'SNOW': 
                             img.src="snow.png"
                           bgc.style.backgroundImage="url(snowweather.gif)"
                                    break;
                
                case  'HAZE': 
                           img.src="haze.png"
                         bgc.style.backgroundImage="url(hazeweather.gif)"
                                break;
                case  'MIST': 
                          img.src="mist.png"
                           bgc.style.backgroundImage="url(mistweather.gif)"
                         break;
                case  'DUST': 
                           img.src="dust.png"
                           bgc.style.backgroundImage="url(dustweather.gif)"
                    break;

            //     default:  img.src="clear-sky.png"
            //     bgc.style.backgroundImage="url(clearwheather.gif)"
            //    break;


         }

    }
    fetchweather()
    
})