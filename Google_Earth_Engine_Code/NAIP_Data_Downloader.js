/*****************************************************
 * University of California, Davis - Digital Agriculture Laboratory
 * Developers: Mohammadreza Narimani, Sarbani Kumar
 *
 * Description:
 * This application operates within Google Earth Engine (GEE) to facilitate dynamic visualization and analysis of NAIP (National Agriculture Imagery Program) imagery.
 * Users can load the NAIP dataset, draw a polygon over any orchard or area of interest, and download the clipped image data for further analysis.
 *
 * Key Functionalities Include:
 * 1. Interactive Mapping: Users can visualize NAIP true color imagery.
 * 2. Drawing Tool: Users can draw a polygon over their area of interest.
 * 3. Image Export: Allows users to export the image inside the drawn polygon to Google Drive.
 *
 * The app uses the NAIP dataset provided by USDA (United States Department of Agriculture).
 *
 * Visit our lab for more information: https://digitalag.ucdavis.edu/
 *****************************************************/

// Import the NAIP dataset
var dataset = ee.ImageCollection('USDA/NAIP/DOQQ')
                  .filter(ee.Filter.date('2017-01-01', '2018-12-31'));
var trueColor = dataset.select(['R', 'G', 'B']);
var trueColorVis = {
  min: 0,
  max: 255,
};

// Set map center
Map.setCenter(-73.9958, 40.7278, 15);
Map.addLayer(trueColor, trueColorVis, 'True Color');

// Create a Drawing Tool for Polygon
var drawingTools = Map.drawingTools();
drawingTools.setShown(true);
drawingTools.setDrawModes(['polygon']);

drawingTools.onDraw(function (geometry) {
  drawingTools.stop();
  drawingTools.setShape(null);
  drawingTools.setShown(false);
  exportImage(geometry);
});

// Add a button to finish the drawing
var button = ui.Button('Finish Drawing and Export');
button.onClick(function() {
  var layers = drawingTools.layers();
  if (layers.length() > 0) {
    var geometry = layers.get(0).getEeObject();
    exportImage(geometry);
  } else {
    print('No geometry drawn!');
  }
});

// Add button to the map
Map.add(button);

// Function to export the image to Google Drive
function exportImage(geometry) {
  var clippedImage = trueColor.mosaic().clip(geometry);
  Export.image.toDrive({
    image: clippedImage,
    description: 'NAIP_Exported_Image',
    folder: 'EarthEngine',
    fileNamePrefix: 'NAIP_Export',
    scale: 0.6,  // Export resolution in meters
    region: geometry,
    maxPixels: 1e9
  });
}
