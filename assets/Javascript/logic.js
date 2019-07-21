var topics = [
    'Archer',
    'Futurama'
];

console.log(topics)

function displayGifs() {
    $('#gifs').empty()
    var show = $(this).attr('data-name')
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=VXqJz0wVYIVmRpwkI5yT0uRFnpT5O93o&limit=5"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response)

        var results = response.data;
        console.log(results)

        for (var i = 0; i < results.length; i++) {
            if (results[i].rating == 'r' || results[i].rating == 'pg-13') {

            } else {
                var showDiv = $('<div>')

                var rate = $('<p>').text("Rating:" + results[i].rating)

                var showImage = $('<img>')

                showImage.attr('src', results[i].images.fixed_height.url)
                showImage.attr('data-still', results[i].images.fixed_height_still.url)
                showImage.attr('data-animate', results[i].images.fixed_height.url)
                showImage.attr('data-state', 'still')
                showImage.addClass('gif')

                showDiv.append(rate)
                showDiv.append(showImage)

                $('#gifs').prepend(showDiv)
            }

        }

    })

}

$('.gif').on('click', function() {
    var state = $(this).attr('data-state')

    if (state === 'still') {
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    } else {
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
})

function renderButtons() {

    $('#cartoon-buttons').empty();

    for (var i = 0; i < topics.length; i++) {
        var b = $('<button>')

        b.addClass('cartoon')
        b.addClass('btn-lg btn-outline-dark')
        b.attr('data-name', topics[i])
        b.text("#" + topics[i])

        $('#cartoon-buttons').append(b)

        console.log(b)
    }
}

$("#add-cartoon").on("click", function(event) {

    event.preventDefault()

    var topic = $('#cartoon-input').val().trim()
    console.log(topic)

    topics.push(topic)

    renderButtons()



});

$(document).on('click', '.cartoon', displayGifs)
renderButtons()