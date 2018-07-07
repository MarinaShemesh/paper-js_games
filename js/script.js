
// +++++++Random colors -circles+++++++

// for (var i = 0; i < 18; i++) {
    
//     var x = 90 + i * 30;
//     var y = 60 + i * 30;

//     var center = new Point(x, y) * Point.random();
//     var path = new Path.Circle(center, 30);
//     path.strokeWidth = 11;
//     path.strokeColor = 'red';
// }

// // Save a reference to the children array in a variable,
// // so we don't end up with very long lines of code:
// var children = project.activeLayer.children;

// // Iterate through the items contained within the array:
// for (var i = 0; i < children.length; i++) {
//     var child = children[i];

//     // Change the fill color of the child to a random
//     // value between 0 and 360:
//     child.strokeColor.hue = Math.random() * 360;
// }

// ++++++++

 // +++++++18 randomnly colored circles+++++++

// for (var i = 0; i < 18; i++) {
    
//     var x = 20 + i * 30;
//     var y = 20 + i * 10;

//     var center = new Point(x, y)*Point.random();
//     var path = new Path.Circle(center, 50);
//     path.strokeWidth = 11;
//     path.strokeColor = 'red';
// }

// // Save a reference to the children array in a variable,
// // so we don't end up with very long lines of code:
// var children = project.activeLayer.children;

// // Iterate through the items contained within the array:
// for (var i = 0; i < children.length; i++) {
//     var child = children[i];

//     // Change the fill color of the child to a random
//     // value between 0 and 360:
//     child.strokeColor.hue = Math.random() * 360;
// }

// ++++++++

 // +++++++20 randomnly placed circles with color gradient+++++++
var count = 10;

var path = new Path.Circle(new Point(100, 100),99);
path.strokeColor = {
       stops: [['blue',0.20], ['red',0.20],['yellow',0.20], ['green',0.20], ['purple',0.20]],
       origin: [0,100],
       destination: [100,0]},
       path.strokeWidth = 13;


var child = new Symbol(path);

// Place the instances of the symbol:
for (var i = 0; i < count; i++) {
    // The center position is a random point in the view:
    var center = Point.random() * view.size;
    var placedSymbol = child.place(center);
}

function onFrame(event) {
    // Run through the active layer's children list and change
    // the position of the placed symbols:
    for (var i = 0; i < count; i++) {
        var item = project.activeLayer.children[i];
        
        // Move the item 1/20th of its width to the right. This way
        // larger circles move faster than smaller circles:
        item.position.x += item.bounds.width / 50;
        item.position.y += item.bounds.width / 50;

        // If the item has left the view on the right, move it back
        // to the left:
        if (item.bounds.bottom > view.size.width) {
            item.position.x = - item.bounds.width;
            item.position.y = - item.bounds.width;
            
            
        }
    }
}

