
    const yargs=require('yargs');

    const geocode=require('./geocodeaddress/geocode.js');
    const weatherapi=require('./weather/weather.js');

    const argv=yargs.options({
        a:{
            demand:true,
            alias:'address',
            describe:'Address to fetch weather for',
            string:true
        }
    }).help()
    .alias('help','h').argv;

///Manin Function
    geocode.geocodeaddress(argv.address,(errormessage,results)=>{

        if(errormessage)
            {
                console.log(errormessage);
            }
        else
            console.log(results.address),
                weatherapi.weatherforecast(results.lattitude,results.longitude,(errorMessgage2,results2)=>{

        if(errorMessgage2)
            {
                console.log(errorMessgage2);
            }
        else
            console.log(`It is currently ${results2.temperature} .This feels like ${results2.apparentTempertaure}`);

    });

    });


//latitude--13.0688891
//longitude--80.2711277






