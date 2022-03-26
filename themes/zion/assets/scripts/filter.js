var mySlider = new rSlider({
    target: '#filter__price',
    values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    range: true,
    tooltip: false,
    scale: true,
    labels: true,
    set: [0, 10]
});

var mySlider = new rSlider({
    target: '#filter__power',
    values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    range: true,
    tooltip: false,
    scale: true,
    labels: true,
    set: [0, 10]
});


/* 
Configuration
target	Single element's class/id or HTML object e.g. document.getElementById('filter__price')
values	A flat array of values e.g. [1, 2, , 4, 5] or object e.g. {min: 1, max: 10}.
step	While using an object value {min: 0, max: 100} the step can be defined e.g. 10
range	Boolean (true or false) to set if the slider is range or single type (default false)
set	A flat array of one (single slider) or two (range slider) values to set initial values (optional)
width	Number or string value (e.g. 400 or '400px') to set the slider width (optional). Default the closest parent div width is used.
scale	Boolean (true or false) to show or hide scale (default true).
labels	Boolean (true or false) to show or hide scale labels (default true).
tooltip	Boolean (true or false) to show or hide tooltips (default true).
disabled	Boolean (true or false) to disable/enable slider (default false).
Methods
Methods can be used after a new instance of slider is initiated e.g. slider.getValue();

getValue()	Returns selected values.
disabled(true/false)	Makes a slider disabled/enabled
onChange(callback)	the callback function argument returns current selected values e.g
mySlider.onChange(function (values) { // argument values represents current values });
setValues(start, end)	Method gets one (range: false) or two (range: true) parameters and sets the values (see example above).
destroy()	Removes an instance of slider e.g. mySlider.destroy(); */