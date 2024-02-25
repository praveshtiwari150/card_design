const xhttp = new XMLHttpRequest()

xhttp.open('get', 'imagedata.json', true);
xhttp.send();

xhttp.onload = function () {

    if (this.readyState == 4 && this.status == 200) {
        
        let images = JSON.parse(this.responseText);
        let output = '';

        for (let item of images) {
            output += `
            <div class="card">
                <img src="${item.image}"/>
                <div class ="info">
                    <p class="name">${item.name} </p>
                    <p class="speciality">${item.speciality} </p>
                </div>
                
            </div>
        `;
        }

        document.querySelector(".container").innerHTML = output


    }
}