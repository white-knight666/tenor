

var apikey = "LIVDSRZULELA";
var lmt = 30;
$(".text").keyup(function () {
    $(".searched_content").empty();
    var term = $(".text").val();
    var url = "https://g.tenor.com/v1/search?q=" + term + "&key=" + apikey + "&limit=" + lmt;
    console.log(url);

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            console.log(myArr);
            var i =0;
            console.log(myArr["results"].length);
            while (i < myArr["results"].length){
                var src = myArr["results"][i]["media"][0]["nanogif"]["url"];
                $(".searched_content").append("<img class='pic' src= "+ src +">")
                i++;
            }
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
})




