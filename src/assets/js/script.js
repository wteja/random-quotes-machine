(function () {
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('#random-button').onclick = function () {

            document.querySelector('#loader').style.display = 'block';
            document.querySelector('#blockquote').style.display = 'none';

            fetch('https://andruxnet-random-famous-quotes.p.mashape.com?count=1',
                {
                    method: 'POST',
                    headers: {
                        'X-Mashape-Key': '8VSxu5zbNVmshEfpNbMRRlNlTqTDp1PNKeHjsnSJRrQamRPifi',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => {
                    return res.json()
                })
                .then(function (result) {
                    document.querySelector('#loader').style.display = 'none';

                    if (result && result.length > 0) {
                        document.querySelector('#blockquote .quote-text').innerHTML = result[0].quote;
                        document.querySelector('#blockquote cite').innerHTML = result[0].author;
                        document.querySelector('#blockquote .tweet-link').href = 'https://twitter.com/home?status=' + encodeURIComponent(result[0].quote) + ' -- ' + result[0].author;
                        document.querySelector('#blockquote').style.display = 'block';
                        document.querySelector('#blockquote .tweet-link').style.display = 'block';
                    }
                })
                .catch(function (err) {
                    document.querySelector('#loader').style.display = 'none';
                    document.querySelector('#blockquote').style.display = 'block';
                    document.querySelector('#blockquote .quote-text').innerHTML = 'Sorry but this app currently offline. Please try again when you connect to the internet.';
                    document.querySelector('#blockquote cite').innerHTML = 'Weerayut Teja';
                    document.querySelector('#blockquote .tweet-link').style.display = 'none';
                    console.error(err);
                });
        };
    });
})();