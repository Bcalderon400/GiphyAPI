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
    })
})