const JustWatch = require('justwatch-api');

function print_result(name, result)
{
	console.log(name+":");
    var myobj = JSON.parse(result.items[0].poster)
    console.log(JSON.Stringify(myobj, null, 4));
	console.log("\n\n\n\n");
}

(async function(){
	var justwatch = new JustWatch();

	var searchResult = await justwatch.search({query: 'always sunny'});
	print_result("search", searchResult);

	var episodes = await justwatch.getEpisodes(searchResult.items[0].id);
	print_result("episodes", episodes);
})();