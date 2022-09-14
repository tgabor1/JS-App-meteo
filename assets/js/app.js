//Clé d'authentification pour se connecter à l'API
<<<<<<< HEAD
const APIKEY = "53bb56b84b28e556aa7c5e3feec60813";
=======
const APIKEY = "7303129fa7860152545e0931db16cad4";
>>>>>>> b171420566865db0d470535bba86a47e2d174725

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {

        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        callAPI(lat, long);

    }, () => {
        alert("Vous avez refusé la géolocalisation, l'application ne peut pas fonctionner");
    })
}

function callAPI(lat, long) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${APIKEY}`)
    
    .then(response => response.json())
    
    .then(function (data){
        console.log(data);
        meteo(data)
        jourMeteo(data);
    })

}

function meteo(data) {
    const currentTemp = document.querySelector('.temp');

    currentTemp.textContent = data.current.temp;

    const currentTempRound = document.querySelector('.roundedTemp');

    currentTempRound.textContent = Math.floor(data.current.temp);

    const threeHoursTemp = document.querySelector('.threeHoursTemp');

    threeHoursTemp.textContent = Math.floor(data.hourly[3].temp);

    for (let i = 0; i < 5; i++) {
        const liTemp = document.querySelectorAll('.fiveHoursTemp');

        liTemp[i].textContent = data.hourly[i + 1].temp;
        
    }

    const dans2Jours = document.querySelector(".weatherInTwoDays")
    dans2Jours.textContent = Math.floor(data.daily[2].temp.day)
}

function jourMeteo(data){
            
            // const lund = document.querySelectorAll('.card ul li');
            // console.log(caractéristiquesJour);
            
            const jours = document.querySelectorAll('div.card');
            console.log(jours);
        
            for (let i = 0; i < jours.length; i++) {
                let timestamp = new Date(data.daily[i].dt * 1000);
                let currentDate = timestamp.toLocaleString('fr-FR', { weekday: 'long'})
                
                const weatherIcon = document.querySelectorAll('.card img');
                weatherIcon[i].src = `./assets/img/day/${data.daily[i].weather[0].icon}.svg`
                
                const jour = document.querySelectorAll('.card-title');
                jour[i].textContent = currentDate;
                
                const descriptionMeteo = document.querySelectorAll('.card-text');
                descriptionMeteo[i].textContent = data.daily[i].weather[0].description;

                const liJour = jours[i].querySelectorAll('li');
                liJour[0].textContent = 'Temperature : ' + data.daily[i].temp.day + ' °C';
                liJour[1].textContent = 'Humidity : ' + data.daily[i].humidity + ' %';
                liJour[2].textContent = 'Hours : ' + timestamp.toLocaleTimeString();
                liJour[3].textContent = 'Pressure : ' + data.daily[i].pressure + ' Pa';
                liJour[4].textContent = 'Wind speed : ' + data.daily[i].wind_speed + ' m / s';
                
            }
       
}






















































































































































































//Fonction qui permet de récupérer les données météo avec les données récupérées ci-dessus puis d'afficher les différentes valeurs sur le site

    //1) On envoie une requète à l'API en donnant en paramètres notre lat, long ainsi que notre APIKEY

    //2) On obtient une réponse que l'on convertit au format .json (tableau de données)


    //3) On enregistre le tableau de résultats obtenu dans notre variable apiResults afin de pouvoir l'afficher sur notre site


        const temperatureActuelle = document.querySelector('.temperature');
        temperatureActuelle.textContent = apiResults.current.temp;

        const humiditeActuelle = document.querySelector('.humidite');
        humiditeActuelle.textContent = apiResults.current.humidity;

        const pressionActuelle = document.querySelector('.pression');
        pressionActuelle.textContent = apiResults.current.pressure;

        const vitesseActuelle = document.querySelector('.vitesse');
        vitesseActuelle.textContent = apiResults.current.wind_speed;

        const descriptionMeteo = document.querySelector('.descriptionTemps');
        descriptionMeteo.textContent = apiResults.current.weather[0].description;

        // 1) on selectionne l'emplacement pour l'heure 2) on déclare une variable date avec *1000 sert à convertir en milliseconde 3)donner le contenu à afficher
        const heureActuelle = document.querySelector('.heure');
        var date = new Date(apiResults.current.dt * 1000);
        heureActuelle.textContent = date.toLocaleTimeString();

        const cartes = document.querySelectorAll('.card');
        for(i=0; i<cartes.length; i++){
            
            const temperature = cartes[i].querySelector('li:nth-child(1)');
            temperature.textContent = apiResults.daily[i].temp.day + ' °C';

            const humidite = cartes[i].querySelector('li:nth-child(2)')
            humidite.textContent = apiResults.daily[i].humidity + ' %';

            const heure = cartes[i].querySelector('li:nth-child(3)')
            var date = new Date(apiResults.daily[i].dt * 1000);
            heure.textContent = date.toLocaleTimeString();

            const pression = cartes[i].querySelector('li:nth-child(4)')
            pression.textContent = apiResults.daily[i].pressure + ' aPh';

            const vitesse = cartes[i].querySelector('li:nth-child(5)')
            vitesse.textContent = apiResults.daily[i].wind_speed + ' Km/h';

            const descriptionMeteo = cartes[i].querySelector('p');
            descriptionMeteo.textContent = apiResults.daily[i].weather[0].description;


            const imageMeteo = cartes[i].querySelector('img');
            imageMeteo.src = `./assets/img/day/${apiResults.daily[i].weather[0].icon}.svg`;

            let dayDate = new Date(apiResults.daily[i].dt * 1000).toLocaleString('fr-FR', { weekday: 'long' });


            const titreCarte = cartes[i].querySelector('.card-title');
            titreCarte.textContent = dayDate;

        }

        //On utilise maintenant les valeurs du tableau apiResults pour afficher les données souhaitées
        //Par exemple :
        //Température actuelle :
<<<<<<< HEAD


        //Température actuelle (arrondie) :


        //Température dans 3h (arrondie) :


        //Température des 5 prochaines heures :


        //La météo dans 2 jours :


        //On récupère l'heure actuelle (timestamp * 1000 car JS gère les dates en millisecondes)
=======
//         currentTemp = document.querySelector('.temp');
//         currentTemp.textContent = apiResults.current.temp;

//         //Température actuelle (arrondie) :
//         currentRoundedTemp = document.querySelector('.roundedTemp');
//         currentRoundedTemp.textContent = Math.round(apiResults.current.temp);

//         //Température dans 3h (arrondie) :
//         roundedTempInThreeHours = document.querySelector('.threeHoursTemp');
//         roundedTempInThreeHours.textContent = Math.round(apiResults.hourly[3].temp);

//         //Température des 5 prochaines heures :
//         fiveHoursTemp = document.querySelectorAll('.fiveHoursTemp');
//         for(let i = 0; i < fiveHoursTemp.length; i++) {
//             fiveHoursTemp[i].textContent = apiResults.hourly[i + 1].temp;
//         }

//         //La météo dans 2 jours :
//         weatherInTwoDays = document.querySelector('.weatherInTwoDays');
//         weatherInTwoDays.textContent = apiResults.daily[2].weather[0].description;

//         weatherInTwoDaysImg = document.querySelector('.weatherInTwoDays-img');

//         //On récupère l'heure actuelle (timestamp * 1000 car JS gère les dates en millisecondes)
//         let time = new Date(apiResults.current.dt * 1000).getHours();
//         if (time >= 6 && time < 21) {
//             weatherInTwoDaysImg.src = `./assets/img/day/${apiResults.daily[2].weather[0].icon}.svg`;
//         } else {
//             weatherInTwoDaysImg.src = `./assets/img/night/${apiResults.daily[2].weather[0].icon}.svg`;
//         }





    });
}
>>>>>>> b171420566865db0d470535bba86a47e2d174725
