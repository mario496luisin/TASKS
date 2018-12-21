var getPosts = document.getElementById("posts");

var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', ' https://jsonplaceholder.typicode.com/posts');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);

        // console.log(ourData[0]);

        renderHTML(ourData);
    };
ourRequest.send();
});

function renderHTML(data) {
    var htmlString = "";

    for (i = 0; i < data.length; i++) {
        htmlString += "<h2>" + "USUARIO" + data[i].userId + "</h2>" + "<span><h3>" + data[i].title + "</h3></span>" + "<p>" + data[i].body + "</p>";
    }

    getPosts.insertAdjacentHTML('beforeend', htmlString);
}
