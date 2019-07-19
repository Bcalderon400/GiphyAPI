var topics = [
    'archer',
    'futurama'
]

console.log(topics)

function renderButtons() {
    $('#cartoon-buttons').empty()

    for (var i = 0; i < topics.length; i++) {

        var b = $('<button>')

        b.addClass('cartoon')
        b.attr('data-name', topic[i])
        b.text(topics[i])

        $('#cartoon-buttons').append(b)
    }
}
// $('#add-cartoon').on("click", function(event))