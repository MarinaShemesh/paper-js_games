  // var path = new Path();
  // path.strokeColor = 'black';

  // var start = new Point(100, 100);
  // path.moveTo(start);
  // path.lineTo(start + [ 100, -50 ]);

// Create a circle shaped path with its center at the center
// of the view and a radius of 30:


// const path = new Path.Circle({
//   center: view.center,
//   radius: 30,
//   strokeColor: 'black'
// });

// path.fillColor = 'pink';

// function onResize(event) {
//   // Whenever the window is resized, recenter the path:
//   path.position = view.center;

var myPath = new Path({
  segments: [[40, 115], [80, 180], [200, 20]],
  selected: true
});

myPath.fillColor = '#ff0000';
