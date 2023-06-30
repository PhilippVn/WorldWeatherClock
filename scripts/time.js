// TODO: PASTE YOUR API KEY HERE
const apikey = ""

async function getTimeData(place){
    const url = `https://timezone.abstractapi.com/v1/current_time/?api_key=${apikey}&location=${place}`;

    console.log("TIME API CALL:" + url);

    const res = await fetch(url);
    data = await res.json();

    console.log("Response:" + JSON.stringify(data,null,2));

    time = data.datetime;

    const latitude = data.latitude;
    const longitude = data.longitude;

    document.getElementById("timep").innerText=`Time: ${time} ${data.timezone_abbreviation}`

    return [latitude,longitude];
}