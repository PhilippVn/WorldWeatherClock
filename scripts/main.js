window.onload = function () {
    main();
};
 
function main(){
    document.querySelectorAll(".allPaths").forEach(e => {
        e.addEventListener("mouseover", function () {
            window.onmousemove=function (j) {
                x = j.clientX
                y = j.clientY
                document.getElementById('name').style.top = y-30  + 'px'
                document.getElementById('name').style.left = x +10 + 'px'
            }
            document.getElementById("name").style.opacity = 1
            
            document.getElementById("namep").innerText = e.id
        })
        e.addEventListener("mouseleave", function () {
            document.getElementById("name").style.opacity = 0
        })

        e.addEventListener("click",function(){
            const arr = getTimeData(e.id).then((arr) => {
                const latitude = arr[0];
                const longitude = arr[1];

                getWeatherData(latitude,longitude).then(() =>{
                    document.getElementById("countryp").innerText = `Country: ${e.id}`
                })
            });
        })
    })
}