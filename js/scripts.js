$(document).ready(function(){
  $("#blanks").submit(function(event) {
    var fruit = $("input:radio[name=fruit]:checked").val();
    var veggie = $("input:radio[name=veggie]:checked").val();

    var shoplist = [fruit, veggie].sort();

    var shoplistUpper = shoplist.map(function(item){
      return item.toUpperCase();
    });

    var fruitUpper= shoplistUpper[0];
    var veggieUpper= shoplistUpper[1];
    $(".fruit").text(fruitUpper);
    $(".veggie").text(veggieUpper);
    //$("#blanks").hide;
    $("#result").show();

    event.preventDefault();
  });

});
