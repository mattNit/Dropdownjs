# Dropdownjs
A simple javascript dropdown element creater thingy

##Basic usage
``` Html
  <div id="dropdown"></div>
```
``` javascript
  var dropdown = new Dropdown({
    wrapper: document.getElementById('dropdown'),
    options: [{id: "1",value: "ItemOne"},
              {id: "2", value: "ItemTwo"}]
  });
  
```

##Methods
``` javascript
  var dropdown = new Dropdown();
  
  dropdown.getValue();
  dropdown.selectOption(id); // programmicly selects an option in the dropdown
  dropdown.prependOption(id, value); // adds an option to the beginning of the dropdown
  dropdown.appendOption(id, value); // adds an option to the end of the dropdown
  
``` 
