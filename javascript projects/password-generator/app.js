
window.addEventListener('load',()=>{
  let long;
  let lat;
  let temperature=document.querySelector('.degree');
  let temperature_Description=document.querySelector('.temperature_description')
  let timezone=document.querySelector('.location-timezone')
  let temp_icon=document.getElementsByTagName('p');
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position=>{
        long=position.coords.longitude;
        lat=position.coords.latitude;
         
        // const proxy='https://cors-anywhere.herokuapp.com/';
        const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d3b1cebffe5a63edf105f824030566a7`;

        fetch(api)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            const {feels_like,temp}=data.main;
            const {description,icon}=data.weather[0];
            const {country}=data.sys
            // set dom elements from api
            temperature.textContent=temp;
            temperature_Description.textContent=description;
            timezone.textContent=data.name;
            //   setIcons(icon,temp_icon);
        })
    });
  }

//   function setIcons(icon,iconId){
//      const skycons=new Skycons()       
//   }
})
