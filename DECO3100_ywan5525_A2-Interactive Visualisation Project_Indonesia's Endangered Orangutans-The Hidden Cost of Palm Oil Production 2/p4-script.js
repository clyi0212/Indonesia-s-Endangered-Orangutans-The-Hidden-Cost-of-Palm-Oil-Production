
/// Figure7——Choropleth Map - The Distribution of wild orangutan habitats(2001) and oil palm plantations(2019)

// Set the access token for Mapbox.
mapboxgl.accessToken = 'pk.eyJ1IjoieWl3YW4yIiwiYSI6ImNsZ2o2Z3Z4aDEyNWEzcXBuZmh6aXk5NXgifQ.POr1fPCI21nImPXlo_hVdg';

// Initialize a new map.
const map = new mapboxgl.Map({
  container: 'Figure7', // ID of the HTML element where the map will be displayed
  style: 'mapbox://styles/yiwan2/clhycxepu006q01r63qrq80pu',  // Mapbox style to use
  center: [106.5, 0], // Initial geographical centerpoint (longitude, latitude)
  zoom: 4, // Initial zoom level
  dragPan: false,  // Disable panning
  scrollZoom: false, // Disable zooming by scrolling
  boxZoom: false, // Disable box zoom
  dragRotate: false,  // Disable rotation by dragging
  keyboard: false,  // Disable map controls by keyboard
  doubleClickZoom: false,  // Disable zooming by double clicking
  touchZoomRotate: false,  // Disable zooming and rotating by touch
});

// Define the colors to use for the categories.
const colors = {
  'The distribution of wild orangutan habitats in 2001': '#9A6D68',
  'The distribution of oil palm plantations in 2019': '#282914',
};

// Define the data, which consists of ids and categories.
const data = [
  { id: 'SumatraOrangutans', category: 'The distribution of wild orangutan habitats in 2001' },
  { id: 'KalimantanOrangutans', category: 'The distribution of wild orangutan habitats in 2001' },
  { id: 'SumatraOilPalmPlantation', category: 'The distribution of oil palm plantations in 2019' },
  { id: 'KalimantanOilPalmPlantation', category: 'The distribution of oil palm plantations in 2019' },

];

// Event listener for the 'load' event, to load GeoJSON data when the map is loaded.
map.on('load', async () => {
  await loadGeoJSON('SumatraOrangutans.geojson', 'SumatraOrangutans', 'The distribution of wild orangutan habitats in 2001');
  await loadGeoJSON('KalimantanOrangutans.geojson', 'KalimantanOrangutans', 'The distribution of wild orangutan habitats in 2001');
  await loadGeoJSON('SumatraOilPalmPlantation.geojson', 'SumatraOilPalmPlantation', 'The distribution of oil palm plantations in 2019');
  await loadGeoJSON('KalimantanOilPalmPlantation.geojson', 'KalimantanOilPalmPlantation', 'The distribution of oil palm plantations in 2019');

});

const layers = {}; // Create an object to store the layers

// Define an async function to load GeoJSON data from a url and add it as a layer to the map.
async function loadGeoJSON(url, id, category) {
  const response = await fetch(url); // Fetch the data from the url
  const geojson = await response.json(); // Parse the data as JSON

  // Add the id and category to each feature in the GeoJSON data
  geojson.features.forEach(feature => {
    feature.properties.id = id;
    feature.properties.category = category;
  });

  // Add the GeoJSON data as a source
  map.addSource(`${id}-source`, {
    type: 'geojson',
    data: geojson
  });

  // Add a layer using the GeoJSON source
  map.addLayer({
    id: `${id}-layer`,
    type: 'fill',
    source: `${id}-source`,
    paint: {
      'fill-color': colors[category],
      'fill-opacity': 1
    }
  });
}


// Create a legend
const legend = document.getElementById('legend'); // Get the legend HTML element
const legendOrder = [
  'The distribution of wild orangutan habitats in 2001',
  'The distribution of oil palm plantations in 2019'
];

// Add items to the legend for each category
legendOrder.forEach(category => {
  const legendItem = document.createElement('div'); // Create a new div for the legend item
  legendItem.className = 'legend-item';  // Set the class name of the div
  const legendColor = document.createElement('span');  // Create a new span for the color
  legendColor.className = 'legend-color'; // Set the class name of the span
  legendColor.style.backgroundColor = colors[category];  // Set the background color of the span
  legendItem.appendChild(legendColor);  // Append the span to the div

  // Add the category text to the legend item
  const legendText = document.createTextNode(category); // Create a text node with the category text
  const legendTextElement = document.createElement('span'); // Create a new span for the text
  legendTextElement.className = `legend-text ${category.replace(/\s/g, "-")}`;  // Set the class name of the span
  legendTextElement.appendChild(legendText);   // Append the text node to the span

  legendItem.appendChild(legendTextElement); // Append the span to the div
  legend.appendChild(legendItem); // Append the div to the legend
  legendItem.addEventListener('click', () => toggleCategory(category)); // Add an event listener for the 'click' event
});

// Initialize all categories as visible
let visibleCategories = [...legendOrder];

// Function to toggle the visibility of a category
function toggleCategory(category) {
  if (visibleCategories.includes(category)) {
    visibleCategories = visibleCategories.filter(c => c !== category); // Remove the category from the visible categories
  } else {
    visibleCategories.push(category); // Add the category to the visible categories
  }
  updateMap();  // Update the map
}

// Update the map to show/hide the countries based on the visible categories
function updateMap() {
  data.forEach(({ id, category }, index) => {
    map.setLayoutProperty(
      `${id}-layer`,
      'visibility',
      visibleCategories.includes(category) ? 'visible' : 'none'  // Set the visibility based on whether the category is in the visible categories
    );
  });
}
