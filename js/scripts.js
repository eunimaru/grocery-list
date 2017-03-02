$(document).ready(function(){
  $("#blanks").submit(function(event) {
    var fruit = $("input:radio[name=fruit]:checked").val();
    var veggie = $("input:radio[name=veggie]:checked").val();

    var shoplist = [fruit, veggie].sort();

    var shoplistUpper = shoplist.map(function(item){
      return item.toUpperCase();
    });

    alert(shoplistUpper);

    event.preventDefault();
  });

});
