function RadialMenu() {
  this.menu = document.createElement('ul');
  this.menu.classList.add('radial-menu');
  this.li = document.createElement('li');
  this.li.classList.add('radial-menu-item');
  document.body.appendChild(this.menu);
  // this.count = 1;
  //New Item
  this.item = this.li.appendChild(this.menu);
}

RadialMenu.prototype.add = function() {
    // let that = this;
    // this.appendChild(this.item);
  // this.li.innerHTML = `${text}`;
  // this.menu.appendChild(this.li.cloneNode(true));
  console.log(new RadialMenu());
};
// var newLi = document.createElement('li');
//   newLi.innerHTML = 'Привет, мир!';
// var textElem = document.createTextNode('');
// var div = document.createElement('div');
// div.innerHTML = "<strong>Ура!</strong>";

let menu = new RadialMenu();
console.log(menu);
