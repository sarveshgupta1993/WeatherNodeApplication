const request=require('request');

var weatherforecast=(latitude,longitude,callback)=>{
    
    request({
    url:`https://api.darksky.net/forecast/yOURAPIKEY/${latitude},${longitude}`,
    json:true
    
},(error,response,body)=>{
    
    if(!error && response.statusCode===200)
        {
            callback(undefined,{
                temperature:body.currently.temperature,
                apparentTempertaure:body.currently.apparentTemperature
            });
        }
    else 
        {
            callback('Unable to fetch weather');
          
            
        }
   
})
    
};

module.exports={
    
    weatherforecast
}