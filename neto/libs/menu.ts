//

// Create an empty context menu
var menu = new nw.Menu();

// Add some items with label
menu.append(new nw.MenuItem({
	label: 'Item A',
	click: function () {
		alert('You have clicked at "Item A"');
	},
}));
menu.append(new nw.MenuItem({label: 'Item B'}));
menu.append(new nw.MenuItem({type: 'separator'}));
menu.append(new nw.MenuItem({label: 'Item C'}));

console.log('menu.js', menu);

export const mAppMenu = menu;
