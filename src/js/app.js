function RadialMenu() {
    this.menu = document.createElement('ul');
    this.menu.classList.add('radial-menu');
    document.body.appendChild(this.menu);
    return this;
}

RadialMenu.prototype.add = function(text='item') {
  return new RadialMenuItem(this, text);
};

function RadialMenuItem(parent, text) {
  this.li = document.createElement('li');
  this.li.innerHTML = `${text}`;
  this.li.classList.add('inner-menu-item');
  this.menu = document.createElement('ul');
  this.menu.classList.add('inner-menu');
  this.createStructure(parent);
}

RadialMenuItem.prototype.createStructure = function (parent) {

  parent.menu.appendChild(this.li);
  this.li.appendChild(this.menu);
}

RadialMenuItem.prototype.add = function (text='item-inner') {
  this.li.onclick = function (e) {
    e.stopPropagation();
    e.preventDefault();
    e.stopImmediatePropagation();
    this.classList.toggle('open-item');
  };
  return new RadialMenuItem(this, text);
}

// RadialMenu.prototype.initialMenuState = function () {
//
// }

let generalMenu = new RadialMenu();
let newItem1 = generalMenu.add('внешний1');
let newItem11 = newItem1.add('внутренний1');
let newItem111 = newItem11.add('внутренний2');
let newItem1111 = newItem111.add('внутренний3');

let newItem2 = generalMenu.add('внешний2');
let newItem22 = newItem2.add('внутренний2');
let newItem222 = newItem22.add('внутренний3');
let newItem2222 = newItem222.add('внутренний4');
