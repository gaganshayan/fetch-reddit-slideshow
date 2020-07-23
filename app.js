document.addEventListener("DomContentLoaded", function() {
    const requestURL = "https://www.reddit.com/search.json?q=Hypercars";

    fetch(requestURL)
        .then(function (responseData){
            console.log(responseData);
            return responseData.json();
        })
        .then(function (jsonData) {
            console.log(jsonData);

            let results = jsonData.data.children;
            let infoNeeded = results.map(function (imageResults) {
                let image = imageResults.data.thumbnail;
                return image;
            });
            const imageShow = document.getElementById("cars");
            infoNeeded.forEach((image) => {
                let imageDaddy = document.createElement("img");
                imageDaddy.src = '$(image)';
                imageShow.appendChild(imageDaddy);
            });
        });
});
