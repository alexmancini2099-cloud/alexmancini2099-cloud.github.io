console.log("vis.js is loaded");



let triangle = document.querySelector("polygon");


    triangle.addEventListener("click", function() {
        let randomColor = Math.floor(Math.random() * 1677721);
        triangle.setAttribute("fill", `#${randomColor}`);
    });


async function fetchData() {
  const data = await d3.csv("./dataset/videogames_wide.csv");
  return data;
}

fetchData().then(async (data) => {
  const vlSpec = vl
    .markBar()
  .data(data)
  .encode(
    vl.y().fieldN("Genre").title("Genre"),
    vl.x().fieldQ("Genre").aggregate('count').title("Number of games"),
    vl.color().fieldN("Genre").title("Genre"),
     vl.tooltip(
      [
        vl.x().fieldN("Platform").aggregate('count')
    
    ]
  )
  
  )

    .width("container")
    .height(400)
    .toSpec();

const vlSpec2 = vl
    .markBar()
  .data(data)
  .encode(
    vl.y().fieldN("Platform").title("Platform"),
    vl.x().fieldQ("Platform").aggregate('count').title("Games on Platform"),
    vl.color().fieldN("Platform").title("Platform").title("Average of Global Sales"),
    vl.tooltip(
      [
        vl.x().fieldN("Platform").aggregate('count')
    
    ]
  )
  )
    .width("container")
    .height(400)
    .toSpec();

const vlSpec3 = vl
    .markCircle()
  .data(data)
  .encode(
    vl.y().fieldN("Platform").title("Platform"),
    vl.x().fieldQ("Global_Sales").aggregate('average').title("Average of Global Sales"),
    vl.color().fieldN("Genre").title("Genre"),
    vl.tooltip(
      [
        vl.fieldN("Name"),
        vl.fieldQ("Global_Sales")
    
    ]
  )
    )  
    .width("container")
    .height(400)
    .toSpec();


const vlSpec4 = vl
.markBar()
  .data(data)
  .encode(
    vl.y().fieldN("Platform").title("Platform"),
    vl.x().fieldQ("Global_Sales").aggregate('average').title("Average of Global Sales"),
    vl.color().fieldN("Platform").title("Platform"),
    vl.tooltip(
      [
        vl.x().fieldQ("Global_Sales").aggregate('average')
    
    ]
  )
  )
  .width("container")
    .height(400)
    .toSpec();

const vlSpec5 = vl
.markBar()
  .data(data)
  .encode(
    vl.y().fieldN("Genre").title("Genre"),
    vl.x().fieldQ("Global_Sales").aggregate('average').title("Average of Global Sales"),
    vl.color().fieldN("Genre").title("Genre")
  )
  .width("container")
    .height(400)
    .toSpec();


const vlSpec6 = vl
.markLine()
  .data(data)
  .encode(
    vl.x().fieldO("Year").title("Year"),
    vl.y().fieldQ("Global_Sales").aggregate('average').title("Average of Global Sales"),
    vl.color().fieldN("Genre")
  )
   .width("container")
    .height(400)
    .toSpec();


const vlSpec7 = vl
.markCircle()
  .data(data)
  .encode(
    vl.x().fieldO("Year").title("Year"),
    vl.y().fieldQ("Global_Sales").aggregate('average').title("Average of Global Sales"),
    vl.color().fieldN("Platform"),
    vl.tooltip(
      [
        vl.fieldN("Name"),
        vl.fieldN("Platform"),
        vl.fieldQ("Global_Sales")
    
    ]
  )
    )
    .width("container")
    .height(400)
    .toSpec();


const vlSpec8 = vl
.markArc()
  .data(data)
  .encode(
    vl.theta().fieldQ("NA_Sales").aggregate("average"),
    vl.color().fieldN("Platform").title("Platform"),
    vl.tooltip(
      [
        vl.fieldN("Platform"),
        vl.x().fieldQ("NA_Sales").aggregate("average")
    ]
  )
  )
  .width("container")
    .height(400)
    .toSpec();

const vlSpec9 = vl
.markArc()
  .data(data)
  .encode(
    vl.theta().fieldQ("JP_Sales").aggregate("average"),
    vl.color().fieldN("Platform").title("Platform"),
    vl.tooltip(
      [
        vl.fieldN("Platform"),
        vl.x().fieldQ("JP_Sales").aggregate("average")
    ]
  )
  )
  .width("container")
    .height(400)
    .toSpec();



const vlSpec10 = vl
.markArc()
  .data(data)
  .encode(
    vl.theta().fieldQ("EU_Sales").aggregate("average"),
    vl.color().fieldN("Platform").title("Platform"),
    vl.tooltip(
      [
        vl.fieldN("Platform"),
        vl.x().fieldQ("EU_Sales").aggregate("average")
    ]
  )
  )
   .width("container")
    .height(400)
    .toSpec();

const vlSpec11= vl
.markArc()
  .data(data)
  .encode(
    vl.theta().fieldQ("Other_Sales").aggregate("average"),
    vl.color().fieldN("Platform").title("Platform"),
     vl.tooltip(
      [
        vl.fieldN("Platform"),
        vl.x().fieldQ("Other_Sales").aggregate("average")
    ]
  )
  )
   .width("container")
    .height(400)
    .toSpec();


const vlSpec12 = vl
.markCircle()
.data(data)
.encode(
  vl.y().fieldQ("Global_Sales").aggregate("Average").title("Average of Global Sales"),
  vl.x().fieldN("Year"),
  vl.color(). fieldN("Publisher").legend(null),
  vl.tooltip(
      [
        vl.fieldN("Publisher"),
        vl.y().fieldQ("Global_Sales").aggregate("average")

    ]
))
 .width("container")
    .height(400)
    .toSpec();


let pokemonGames = data.filter((d) => {
  return typeof(d.Name)==="string" && d.Name.toLowerCase().includes("pokemon") && d.Global_Sales;
});
const vlSpec13 = vl
.markCircle()
  .data(pokemonGames)
  .encode(
    vl.x().fieldN("Year").title("Year"),
    vl.y().fieldQ("Global_Sales").title("Global Sales"),
    vl.color().fieldN("Name").legend(null),
    vl.tooltip(
      [
        vl.fieldN("Name")
    ]
   ))
   .width("container")
    .height(400)
    .toSpec();

render("#view", vlSpec);
render("#view2", vlSpec2);
render("#view3", vlSpec3);
render("#view4", vlSpec4);
render("#view5", vlSpec5);
render("#view6", vlSpec6);
render("#view7", vlSpec7);
render("#view8", vlSpec8);
render("#view9", vlSpec9);
render("#view10", vlSpec10);
render("#view11", vlSpec11);
render("#view12", vlSpec12);
render("#view13", vlSpec13);


});

async function render(viewID, spec) {
  const result = await vegaEmbed(viewID, spec);
  result.view.run();
}