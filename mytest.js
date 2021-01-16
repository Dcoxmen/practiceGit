function myQueryURL () {

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
    var queryParams = {"api-key": "R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M"}


queryParams.q = $("#search-term").val().trim();


console.log(queryURL + $.param(queryParams));
}