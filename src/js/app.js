function RadialMenu(styles={}) {
    let {borderColor, borderWith} = styles;
    this.menu = document.createElement('ul');
    this.menu.classList.add('radial-menu');
    this.menu.style.border = `${borderWith}`+'px solid '+`${borderColor}`;
    document.body.appendChild(this.menu);
    return this;
}

//function aded item main item
RadialMenu.prototype.add = function(text='item', styles={}) {
  return new RadialMenuItem(this, text, styles);
};

//finction for create main structure
function RadialMenuItem(parent, text, styles={}) {
  this.style = styles;
  this.li = document.createElement('li');
  let {borderColor, borderWith, background} = this.style;
  this.li.style.border = `${borderWith}`+'px solid '+`${borderColor}`;
  this.li.style.backgroundColor = `${background}`;

  this.li.innerHTML = `${text}`;
  this.li.classList.add('inner-menu-item');
  this.menu = document.createElement('ul');
  this.menu.classList.add('inner-menu');
  this.createStructure(parent);
}

//finction for create structure
RadialMenuItem.prototype.createStructure = function (parent) {
  this.controlMenuItems();
  parent.menu.appendChild(this.li);
  this.li.appendChild(this.menu);
}

//function aded item child item
RadialMenuItem.prototype.add = function (text='item-inner', styles={}) {
  return new RadialMenuItem(this, text, styles);
}

//function for control items menu
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
  borderColor:'#f4c360'
});

let newItem1 = generalMenu.add('внешний-1',{
  borderWith:1,
  borderColor:'red',
  background:'yellow'
});
let newItem11 = newItem1.add('внутренний-1', {
  borderWith:1,
  borderColor:'green',
  background:'red'
});
let newItem111 = newItem11.add('внутренний-2', {
  borderWith:1,
  borderColor:'orange',
  background:'green'
});
let newItem1111 = newItem111.add('внутренний-3', {
  borderWith:1,
  borderColor:'red',
  background:'blue'
});
let newItem11111 = newItem1111.add('внутренний-4');
let newItem111111 = newItem11111.add('внутренний-5');

let newItem2 = generalMenu.add('внешний-2', {
  borderWith:1,
  borderColor:'red',
  background:'#b8b8ff'
});
let newItem22 = newItem2.add('внутренний-2');
let newItem222 = newItem22.add('внутренний-3');
let newItem2222 = newItem222.add('внутренний-4');

let newItem3 = generalMenu.add('внешний-3', {
  borderWith:1,
  borderColor:'red',
  background:'chartreuse'
});
let newItem33 = newItem3.add('внутренний-5');
let newItem333 = newItem33.add('внутренний-6');
