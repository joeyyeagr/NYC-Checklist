// Grab the dropdowns
const roofTypeDropdown = document.getElementById('roof-type');
const outlierDropdown = document.getElementById('outlier');

// Ensure dropdowns reset and initialize visibility on page load
window.addEventListener('load', () => {
  // Reset dropdown selections
  roofTypeDropdown.selectedIndex = 0;
  outlierDropdown.selectedIndex = 0;

  // Initialize conditional visibility
  updateConditionalVisibility(roofTypeDropdown.value, outlierDropdown.value);
});

// Roof Type dropdown change event
roofTypeDropdown.addEventListener('change', () => {
  console.log("Selected Roof Type:", roofTypeDropdown.value);
  updateConditionalVisibility(roofTypeDropdown.value, outlierDropdown.value);
});

// Outlier Parameter dropdown change event
outlierDropdown.addEventListener('change', () => {
  console.log("Outlier Parameter selected:", outlierDropdown.value);
  updateConditionalVisibility(roofTypeDropdown.value, outlierDropdown.value);
});

// Function to show/hide conditional items based on Roof Type and Outlier Parameter
function updateConditionalVisibility(selectedRoofType, selectedOutlier) {
  console.log("Roof Type changed to:", selectedRoofType);
  console.log("Outlier Parameter changed to:", selectedOutlier);

  // Grab all conditional checklist items
  const pitchItems = document.querySelectorAll('.conditional.pitch');
  const flatItems = document.querySelectorAll('.conditional.flat');
  const canopyItems = document.querySelectorAll('.conditional.canopy');

  const landmarkItems = document.querySelectorAll('.conditional.landmark');
  const basementItems = document.querySelectorAll('.conditional.basement');
  const floodItems = document.querySelectorAll('.conditional.flood');

  // Show/hide Pitch-specific items
  pitchItems.forEach(item => {
    item.style.display = selectedRoofType.includes("Pitch") ? "flex" : "none";
  });

  // Show/hide Flat-specific items
  flatItems.forEach(item => {
    item.style.display = selectedRoofType.includes("Flat") ? "flex" : "none";
  });

  // Show/hide Canopy-specific items
  canopyItems.forEach(item => {
    item.style.display = selectedRoofType.includes("Canopy") ? "flex" : "none";
  });

  // Show/hide Landmark-specific items
  landmarkItems.forEach(item => {
    item.style.display = selectedOutlier === "Landmark" ? "flex" : "none";
  });

  // Show/hide Basement-specific items
  basementItems.forEach(item => {
    item.style.display = selectedOutlier === "Basement/Garage Plan" ? "flex" : "none";
  });

  // Show/hide Flood Zone-specific items
  floodItems.forEach(item => {
    item.style.display = selectedOutlier === "Flood zone" ? "flex" : "none";
  });
}
