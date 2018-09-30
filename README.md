# Dropdownjs
A simple javascript dropdown element creater thingy

## Basic usage
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

When you create a new dropdown it changes the div element to
``` Html
  <div id="initialId-dropdown" class="dropdown">
    <span class="selected">Hint</span>
    <input type="hidden" id="initialId" value="1">
    <ul>
      <li id="0">Option One</li>
      <li id="1">Option Two</li>
      <li id="2">Option Three</li>
    </ul>
  </div>
```

## Methods
``` javascript
  var dropdown = new Dropdown();
  
  dropdown.getValue();
  dropdown.selectOption(id); // programmicly selects an option in the dropdown
  dropdown.prependOption(id, value); // adds an option to the beginning of the dropdown
  dropdown.appendOption(id, value); // adds an option to the end of the dropdown
  
``` 
