// select buscar motorista ajax

$(document).ready(function(){
    var searchDriver = $('#searchSession').select2({
        width: '100%',
        language: 'pt-BR',
        minimumInputLength: 3,
        ajax: {
            url: "api/olinda/zona",
            dataType: 'json',
            data: function (params) {
                return {
                    q: params.term
                };
            },
            processResults: function (data) {
                return {
                    results: $.map(data, function (d) {
                        return {
                            'number': d.NUMERO_SECAO,
                            'id': d.id
                        };
                    })
                };
            }
        }
    });
});
