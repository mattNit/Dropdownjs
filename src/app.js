window.onload = function(){
  var element = document.getElementById('cars');

  var dd = new Dropdown({
    wrapper: element,
    options: [{id: "1",value: "Subaru"},
              {id: "2", value: "Audi"}]
  });

  dd.prependOption(0, "Halla");

  dd.selectOption(1);

}
