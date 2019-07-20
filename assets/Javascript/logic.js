var topics = [
    'Archer',
    'Futurama'
];

console.log(topics)

function renderButtons() {
    $('#cartoon-buttons').empty()

    for (var i = 0; i < topics.length; i++) {

        var b = $('<button>')

        b.addClass('cartoon')
        b.attr('data-name', topics[i])
        b.text(topics[i])

        $('#cartoon-buttons').append(b)
    }
    console.log(b)
}

$(document).on("click", '#add-cartoon', function(event) {

    event.preventDefault()

    var topic = $('#cartoon-input').val().trim()
    console.log(topic)

    topics.push(topic)

    renderButtons()

});
renderButtons()


$('button').on('click', function() {

    var show = $(this).attr('data-name')
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=VXqJz0wVYIVmRpwkI5yT0uRFnpT5O93o&limit=10"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response)

        var results = response.data;
        console.log(results)
        for (var i = 0; i < results.length; i++) {
            var showDiv = $('<div>')

            var rate = $('<p>').text("Rating:" + results[i].rating)

            var showImage = $('<img>')

            showImage.attr('src', results[i].images.fixed_height.url)

            showDiv.append(rate)
            showDiv.append(showImage)

            $('#gifs').prepend(showDiv)
        }
    })
})