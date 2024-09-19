const words = document.getElementById("words");
const name = document.getElementById("name");
const btn = document.getElementsByClassName("butt")

function dataFetch() {
    // below api is broken, need to find new api
    fetch("http://quotes.stormconsultancy.co.uk/random.json")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            words.innerText = data.quote;
            name.innerText = `-${data.author}`;
        });
}

dataFetch();