
var elements = document.getElementsByClassName("bar-input");
var names = document.getElementsByClassName("bar-name");

var data = [];

function checkForm() {
    var layout;
    var count;
    var pers;
    var text = document.getElementsByClassName("error");    
    for(var i=0; i<elements.length; i++) {
        count = 0
        pers = parseFloat(elements[i].value)
        if (pers !== pers) {
            document.getElementById("p1").innerHTML = "Please check all of your Percentage fields!";
            return true
        } else {
            document.getElementById("p1").innerHTML = "";
        }

        layout = {"name": names[i].value, "percentage": elements[i].value}
        if (data.length != 0) {
            for(var id=0; id<data.length; id++) {
                if (layout.name == data[id].name && layout.percentage == data[id].percentage) {
                    count = 1
                }
            }
        } else {
            count = 0
        }

        if (names[i].value == "" || elements[i].value == "") {
            count = 1
        }

        if (count == 0) {
            data.push(layout)
        }

    }
    
    console.log(data);
    pie()
}

function addField() {
    d3.select('forms').append('div').attr('class', 'input-Container')

    var divs = document.getElementsByClassName("input-Container");
    var layout = '<input class="bar-input" placeholder="Percentage"></input>'
    var layout2 = '<input class="bar-name" placeholder="Name"></input>'
    for(var i=0; i<divs.length; i++) {
        if(i + 1 === divs.length) {
            console.log(i)
            divs[i].innerHTML += layout2;
            divs[i].innerHTML += layout;
        }
    }
}


// javascript
// var data = [
//     {"platform": "Android", "percentage": 40.11}, 
//     {"platform": "Windows", "percentage": 36.69},
//     {"platform": "iOS", "percentage": 13.06}
// ];

function pie() {
    var svgWidth = 500, svgHeight = 300, radius =  Math.min(svgWidth, svgHeight) / 2;
    var svg = d3.select('svg')
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    //Create group element to hold pie chart    
    var g = svg.append("g")
        .attr("transform", "translate(" + radius + "," + radius + ")") ;

    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var pie = d3.pie().value(function(d) { 
        return d.percentage; 
    });

    var path = d3.arc()
        .outerRadius(radius)
        .innerRadius(0);
    
    var arc = g.selectAll("arc")
        .data(pie(data))
        .enter()
        .append("g");

    arc.append("path")
        .attr("d", path)
        .attr("fill", function(d) { return color(d.data.percentage); });
            
    var label = d3.arc()
        .outerRadius(radius)
        .innerRadius(0);
                
    arc.append("text")
        .attr("transform", function(d) { 
            return "translate(" + label.centroid(d) + ")"; 
        })
        .attr("text-anchor", "middle")
        .attr('class', 'bold')
        .text(function(d) { return d.data.name+"   "+d.data.percentage+"%"; });
}