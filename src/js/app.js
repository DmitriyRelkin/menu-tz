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
  return new RadialMenuItem(this, text);
}

let generalMenu = new RadialMenu();
let newItem1 = generalMenu.add('внешний');
let newItem11 = newItem1.add('внутренний');
