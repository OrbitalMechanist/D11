// JavaScript source code

$(document).ready(function () {
    console.log("ready!");
});

class ListItem {
    constructor(name, img, score) {
        this.name = name;
        this.img = img;
        this.score = score;
    }
}

var floodSource = [new ListItem("John Collie", "bootleg_forerunner.png", 123), new ListItem("John Discount", "helmet1demo.png", 124),
    new ListItem("John Athenan", "bootleg_forerunner.png", 125)];

function flood(inArray) {
    var i;
    var currentContainer;
    var tmp;
    var contentMain = $('#content');
    for (i = 0; i < inArray.length; i++) {
        console.log("flooding");
        currentContainer = $('<div/>').appendTo("#content").addClass("listcontainer");
        $('<img/>').appendTo(currentContainer).attr("src", floodSource[i].img).addClass("containerImage");
        tmp = $('<p>').appendTo(currentContainer).addClass("containerName").html(floodSource[i].name);
        tmp;
    }
    $("h1").remove();
    $("button").remove();
}