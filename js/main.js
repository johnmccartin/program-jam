
//this is the animation and jamming that happens on the site. you wrap everything in this $(document).ready thing so that all of the html is loaded before we try to change it.
$(document).ready(function() {

   //our inital program jam to get things going. the actual goods are located in a function, so that we can use it repeatedly.
   jamIt();

   //animate the button so that it looks like it's being depressed
   $("a.btn").mousedown(function() {
      $(this).css("borderBottomWidth","2px").css("borderRightWidth","2px").css("left","3px");
   });
   $("a.btn").mouseup(function() {
      $(this).css("borderBottomWidth","5px").css("borderRightWidth","5px").css("left","0px");
      //don't forget to jam it again when the button is clicked
      jamIt();
   });

});


//this is our jamming function.
function jamIt() {

   //an array of potential architectural programs
   programs = [
         "office"
         ,"driving range"
         ,"library"
         ,"kitchen"
         ,"rec center"
         ,"cinema"
         ,"living room"
         ,"night club"
         ,"recording studio"
         ,"opera house"
         ,"lecture hall"
         ,"light manufacturing"
         ,"tailor"
         ,"apparel factory"
         ,"house of worship"
         ,"punk haus"
         ,"shipping yard"
         ,"land fill"
         ,"apartments"
         ,"distillery"
         ,"orchard"
         ,"public dock"
         ,"piazza"
         ,"bridge"
         ,"basketball court"
         ,"beach volleyball"
         ,"vineyard"
         ,"brewery"
         ,"data center"
         ,"self storage"
         ,"steel mill"
         ,"workshop"
         ,"bank branch"
         ,"college dorm"
         ,"coffee roaster"
         ,"bowling alley"
         ,"hackspace"
         ,"tea room"
         ,"bedroom"
         ,"laundromat"
         ,"conference room"
         ,"art gallery"
         ,"playground"
         ,"gym"
         ,"cafeteria"
         ,"union hall"
         ,"restaurant"
         ,"classroom"
         ,"city hall"
         ,"dance floor"
         ,"ballroom"
         ,"concert venue"
         ,"theater"
         ,"bodega"
         ,"retail space"
         ,"hospital"
         ,"hotel"
         ,"hostel"
         ,"industrial kitchen"
         ,"campground"
         ,"biochem lab"
         ,"zoo"
         ,"aquarium"
         ,"garden"
         ,"museum"
         ,"park"
         ,"farm"
         ,"amphitheater"
         ,"bathroom"
         ,"car dealership"
         ,"gas station"
         ,"chop shop"
         ,"post office"
         ,"video arcade"
         ,"theme park"
         ,"distribution center"
         ,"prayer room"
      ]

      //call this shuffleArray function to randomize our list
      shuffleArray(programs);

      //pick the first two entries in our randomized array and put them in variables
      var p1 = programs[0];
      var p2 = programs[1];

      //put the random programs (stored in variables) where they belong in the html
      $('.p1').text(p1);
      $('.p2').text(p2);

}

//here's our randomizing function. i pulled this off the internet. i don't really understand it but i don't need to. there are simpler ways to randomize things, but this one ensures that you'll never have the same item picked twice.

/**
 * Randomize array element order in-place.
 * Using Fisher-Yates shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
