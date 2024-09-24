document.getElementById('treeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get input values
  const city = document.getElementById('city').value;
  const population = parseInt(document.getElementById('population').value);
  const density = parseFloat(document.getElementById('density').value);

  // Calculate number of trees
  const totalTrees = population * density;

  // Display result
  document.getElementById('result').innerHTML = `The estimated number of trees in ${city} is approximately ${Math.round(totalTrees)} trees.`;
});

