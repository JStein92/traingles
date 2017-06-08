$(document).ready(function(){

  $('form#triangle').submit(function(event){

    event.preventDefault();
    var side1 = parseInt($('#sideLength1').val());
    var side2 = parseInt($('#sideLength2').val());
    var side3 = parseInt($('#sideLength3').val());

    if ((side1+side2 <= side3) || (side2+side3 <= side1) || (side1+side3 <=side2)) {//is NOT a triangle
      $('#output').text("Not a triangle");

    } else { //proceed to check what type of triangle

      if (side1 === side2 && side2 === side3){
        $('#output').text("Equilateral");
      }
      else if ((side1 === side2 && side1 != side3) || (side1 === side3 && side1 !=side2) || (side2===side3 && side2 !=side1))
      {
        $('#output').text("Isosceles");
      } else {
        $('#output').text("Scalene");
      }

    }


  });
});
