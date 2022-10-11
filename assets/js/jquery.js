let nameInputEl = $('#search');

// Autocomplete widget
$(function () {
  let countryArr = []
  fetch('https://restcountries.com/v3.1/all')
  .then(function (response) {
		return response.json();
	})
	.then(function (data) {
    console.log(data)
    for(i=0;i<250;i++){
    let titles = data[i].name.common
    countryArr.push(titles)
  }})
console.log(countryArr)

  $('#search').autocomplete({
    source: countryArr,
  });
});
