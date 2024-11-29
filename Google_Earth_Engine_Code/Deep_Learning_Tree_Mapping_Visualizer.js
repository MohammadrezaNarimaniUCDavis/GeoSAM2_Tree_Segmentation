/*****************************************************
 * University of California, Davis - Digital Agriculture Laboratory
 * Developers: Mohammadreza Narimani, Sarbani Kumar
 *
 * Description:
 * This Google Earth Engine script demonstrates dynamic visualization of segmented tree analysis using NAIP imagery and deep learning segmentation results. Users can view comparisons between standard satellite imagery and enhanced segmentation overlays.
 *
 * Key Functionalities Include:
 * 1. Dual Map View: Compare the original Google Hybrid map with the overlaid deep learning tree segmentation results.
 * 2. Interactive Visualization: Users can interact with the map to explore different regions at a detailed zoom level.
 * 3. Boundary Visualization: Visual boundaries delineate the focused area of the imagery, enhancing spatial orientation.
 *
 * The script employs an advanced segmentation model deployed as a part of the GeoSAM2 project, providing a practical application of deep learning in agricultural research.
 *
 * Visit our lab for more information: https://digitalag.ucdavis.edu/
 *****************************************************/

// Define visualization parameters for your image
var visParams = {
  bands: ['b1', 'b2', 'b3'],  // Assuming these are the RGB bands
  min: 0,
  max: 255,
  gamma: 1.4
};

// Load your image
var image = ee.Image('projects/ee-mnarimani/assets/GeoSAM2_Tree_Segmentation');

// Get the bounding box of the image
var bounds = image.geometry().bounds();

// Create a feature collection using the bounds as a rectangle
var boundary = ee.FeatureCollection(ee.Feature(bounds, {stroke: '#ff0000'}));

// Define the style for the boundary
var boundaryStyle = {
  color: 'red',
  fillColor: '00000000',  // Transparent fill
  width: 3  // Width of the boundary line
};

// Create the left map and set it to show only the Google satellite hybrid basemap
var leftMap = ui.Map();
leftMap.setControlVisibility(false);
leftMap.setOptions('HYBRID');
leftMap.addLayer(boundary.style(boundaryStyle), {}, 'Image Boundary');

// Add a label to the left map
var leftLabel = ui.Label('Google Map', {
  position: 'top-left',
  padding: '10px',
  fontSize: '24px',
  backgroundColor: '#ffffffAA'  // Increased opacity
});
leftMap.add(leftLabel);

// Create the right map, set it to show the Google satellite hybrid basemap
var rightMap = ui.Map();
rightMap.setControlVisibility(false);
rightMap.setOptions('HYBRID');
rightMap.addLayer(image, visParams, 'Tree Segmentation');
rightMap.addLayer(boundary.style(boundaryStyle), {}, 'Image Boundary');

// Add a label to the right map
var rightLabel = ui.Label('Tree Segmentation', {
  position: 'top-right',
  padding: '10px',
  fontSize: '24px',
  backgroundColor: '#ffffffAA'  // Less transparency for better readability
});
rightMap.add(rightLabel);

// Link both maps for synchronized panning and zooming
var linker = ui.Map.Linker([leftMap, rightMap]);

// Create a SplitPanel to hold the two maps side by side
var splitPanel = ui.SplitPanel({
  firstPanel: leftMap,
  secondPanel: rightMap,
  wipe: true,
  style: {stretch: 'both'}
});

// Set the SplitPanel as the root UI element
ui.root.widgets().reset([splitPanel]);

// Center both maps on the image's centroid and set the zoom level to 19
var center = image.geometry().centroid();
leftMap.centerObject(center, 19);
rightMap.centerObject(center, 19);
