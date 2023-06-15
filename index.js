
function getWeather(city) {


const settings = {
	async: true,
	crossDomain: true,
	url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4e105ac82bmsh6b71d2cd50d5986p145177jsn477f172bb9e5',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};



$.ajax(settings).done(function (response) {

	console.log(response);

	if(city==="Seattle")
	{
		Temp3.innerHTML=response.temp;
		Feels_like3.innerHTML=response.feels_like;
		Min_temp3.innerHTML=response.min_temp;
		Max_temp3.innerHTML=response.max_temp;
		Humidity3.innerHTML=response.humidity;
		Cloud_pct3.innerHTML=response.cloud_pct;
		Wind_speed3.innerHTML=response.wind_speed;
		Wind_degrees3.innerHTML=response.wind_degrees;
	}

	if(city==="London")
	{
		Temp4.innerHTML=response.temp;
		Feels_like4.innerHTML=response.feels_like;
		Min_temp4.innerHTML=response.min_temp;
		Max_temp4.innerHTML=response.max_temp;
		Humidity4.innerHTML=response.humidity;
		Cloud_pct4.innerHTML=response.cloud_pct;
		Wind_speed4.innerHTML=response.wind_speed;
		Wind_degrees4.innerHTML=response.wind_degrees;
	}

	if(city==="Shanghai")
	{
		Temp5.innerHTML=response.temp;
		Feels_like5.innerHTML=response.feels_like;
		Min_temp5.innerHTML=response.min_temp;
		Max_temp5.innerHTML=response.max_temp;
		Humidity5.innerHTML=response.humidity;
		Cloud_pct5.innerHTML=response.cloud_pct;
		Wind_speed5.innerHTML=response.wind_speed;
		Wind_degrees5.innerHTML=response.wind_degrees;
	}

	if(city==="Delhi")
	{
		Temp6.innerHTML=response.temp;
		Feels_like6.innerHTML=response.feels_like;
		Min_temp6.innerHTML=response.min_temp;
		Max_temp6.innerHTML=response.max_temp;
		Humidity6.innerHTML=response.humidity;
		Cloud_pct6.innerHTML=response.cloud_pct;
		Wind_speed6.innerHTML=response.wind_speed;
		Wind_degrees6.innerHTML=response.wind_degrees;
	}

	if(city==="Bhubaneswar")
	{
		Temp7.innerHTML=response.temp;
		Feels_like7.innerHTML=response.feels_like;
		Min_temp7.innerHTML=response.min_temp;
		Max_temp7.innerHTML=response.max_temp;
		Humidity7.innerHTML=response.humidity;
		Cloud_pct7.innerHTML=response.cloud_pct;
		Wind_speed7.innerHTML=response.wind_speed;
		Wind_degrees7.innerHTML=response.wind_degrees;
	}

	if(city==="Kolkata")
	{
		Temp8.innerHTML=response.temp;
		Feels_like8.innerHTML=response.feels_like;
		Min_temp8.innerHTML=response.min_temp;
		Max_temp8.innerHTML=response.max_temp;
		Humidity8.innerHTML=response.humidity;
		Cloud_pct8.innerHTML=response.cloud_pct;
		Wind_speed8.innerHTML=response.wind_speed;
		Wind_degrees8.innerHTML=response.wind_degrees;
	}


	

});
}




function getWeatherFinal(city) {


	const settings = {
		async: true,
		crossDomain: true,
		url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '4e105ac82bmsh6b71d2cd50d5986p145177jsn477f172bb9e5',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};
	


	
	try {
		$.ajax(settings).done(function (response) {
		
	 
	
		console.log(response);
		
	
		cityName.innerHTML=city;	
		// Temp.innerHTML=response.temp;
		temp2.innerHTML=response.temp;
		Feels_like.innerHTML=response.feels_like;
		Min_temp.innerHTML=response.min_temp;
		Max_temp.innerHTML=response.max_temp;
		Humidity.innerHTML=response.humidity;
		Cloud_pct.innerHTML=response.cloud_pct;
		Wind_speed.innerHTML=response.wind_speed;
		Wind_degrees.innerHTML=response.wind_degrees;
		// Sunrise.innerHTML=response.sunrise;
		// Sunset.innerHTML=response.sunset;
	
	
	
		
	
	});
	}
	catch (error) {
		console.error(error);
		alert("You have entered the wrong city name. Please enter the correct name.");
	}
}
	submit.addEventListener("click", function(event) {
	
		event.preventDefault();
		getWeatherFinal(city.value);
		
	});
	


getWeatherFinal("Delhi"); 
getWeather("Seattle");
getWeather("London");
getWeather("Shanghai");
getWeather("Delhi");
getWeather("Bhubaneswar");
getWeather("Kolkata");
	
Rourkela.addEventListener("click",function(event) {
	event.preventDefault();
	getWeatherFinal("Rourkela");
});

Bengaluru.addEventListener("click",function(event) {
	event.preventDefault();
	getWeatherFinal("Bengaluru");
});

Dubai.addEventListener("click",function(event) {
	event.preventDefault();
	getWeatherFinal("Dubai");
});
