const apiUrl = "https://services1.arcgis.com/79kfd2K6fskCAkyg/arcgis/rest/services/Louisville_Metro_KY_Inspection_Violations_of_Failed_Restaurants/FeatureServer/0/query?where=1%3D1&outFields=InspectionDate,premise_name,Insp_Viol_Comments&outSR=4326&f=json";

// Make a GET request to the API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON response
  })
  .then(data => {
    // Handle the JSON response here
    console.log(data);

    // Access and process each JSON object individually
    data.features.forEach(feature => {
      const inspectionDate = feature.attributes.InspectionDate;
      const premiseName = feature.attributes.premise_name;
      const comments = feature.attributes.Insp_Viol_Comments;

      // Do something with each object, e.g., display it on the page
      console.log(`Date: ${inspectionDate}, Premise: ${premiseName}, Comments: ${comments}`);
    });
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch.
    console.error('There was a problem with the fetch operation:', error);
  });
