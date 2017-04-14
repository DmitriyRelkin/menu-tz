function RadialMenu(styles) {
    this.menu = document.createElement('ul');
    this.menu.classList.add('radial-menu');
    document.body.appendChild(this.menu);
    this.styleArg = {};
    for (var style in styles) {
      if (styles.hasOwnProperty(style)) {
        this.styleArg[style] = styles[style];
      }
    }
    return this;
}

RadialMenu.prototype.add = function(text='item') {
  return new RadialMenuItem(this, text, this.styleArg);
};

function RadialMenuItem(parent, text, style={}) {
  this.style = style;
  this.li = document.createElement('li');
  let {borderColor, borderWith, background} = style;
  this.li.style.border = `${borderWith}`+'px solid '+`${borderColor}`;
  this.li.style.backgroundColor = `${background}`;

  this.li.innerHTML = `${text}`;
  this.li.classList.add('inner-menu-item');
  this.menu = document.createElement('ul');
  this.menu.classList.add('inner-menu');
  this.createStructure(parent);
}

RadialMenuItem.prototype.createStructure = function (parent) {

  this.controlMenuItems();
  parent.menu.appendChild(this.li);
  this.li.appendChild(this.menu);
}

RadialMenuItem.prototype.add = function (text='item-inner') {
  return new RadialMenuItem(this, text, this.style);
}

RadialMenuItem.prototype.controlMenuItems = function () {
  this.li.onclick = function (e) {
    let openItems = document.querySelectorAll('.open-item');
    let itemOpened = document.querySelectorAll('.item-opened');
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    this.classList.add('open-item');

    if (this.classList.contains('item-opened')) {
      for(var i = 0; i < openItems.length; i++) {
        if(openItems[i] == this) {
          let nextItems = i;
          for (var i = nextItems; i < openItems.length; i++) {
            openItems[i].classList.remove('open-item');
          }
        }
      }
    } else {
      setTimeout(() => {
        this.classList.add('item-opened');
      },200);
    }
  };
}

let generalMenu = new RadialMenu({
  borderWith:1,
  borderColor:'#f4c360',
  background:'#ffeac1'
});

let newItem1 = generalMenu.add('внешний-1');
let newItem11 = newItem1.add('внутренний-1');
let newItem111 = newItem11.add('внутренний-2');
let newItem1111 = newItem111.add('внутренний-3');
let newItem11111 = newItem1111.add('внутренний-4');
let newItem111111 = newItem11111.add('внутренний-5');

let newItem2 = generalMenu.add('внешний-2');
let newItem22 = newItem2.add('внутренний-2');
let newItem222 = newItem22.add('внутренний-3');
let newItem2222 = newItem222.add('внутренний-4');

let newItem3 = generalMenu.add('внешний-3');
let newItem33 = newItem3.add('внутренний-5');
let newItem333 = newItem33.add('внутренний-6');
