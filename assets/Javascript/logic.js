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