$(document).ready(function () {
    $('form button').click(function() {
        $('ul').slideDown();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const adicionarNovaTarefa =$('#adicionarNovaTarefa').val();
        const novaTarefa =$('<li></li>').text(adicionarNovaTarefa);
        const botaoRemover = $('<button class="remover">-</button>');
        novaTarefa.append(botaoRemover);
        $('ul').append(novaTarefa)
        novaTarefa.hide().fadeIn(500);
        $('#adicionarNovaTarefa').val('')
    })
    
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('Icon')
    })


    $('ul').on('click', '.remover', function() {
        $(this).closest('li').remove();
    })
})