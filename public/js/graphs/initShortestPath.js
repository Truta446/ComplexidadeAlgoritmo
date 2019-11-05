var dijkstra = new Dijkstra();

dijkstra.setGraph(
    [
        ['Oradea',[
            ['Zerind', 71],
            ['Sibiu', 151]
        ]],
        ['Zerind',[
            ['Oradea', 71],
            ['Arad', 75]
        ]],
        ['Arad',[
            ['Zerind', 75],
            ['Sibiu', 140],
            ['Timisoara', 118]
        ]],
        ['Timisoara',[
            ['Arad', 118],
            ['Lugoj', 111]
        ]],
        ['Lugoj',[
            ['Timisoara', 111],
            ['Mehadia', 70]
        ]],
        ['Mehadia',[
            ['Lugoj', 70],
            ['Dobreta', 75]
        ]],
        ['Dobreta',[
            ['Mehadia', 75],
            ['Craiova', 120]
        ]],
        ['Sibiu',[
            ['Oradea', 151],
            ['Arad', 140],
            ['Rimnicu Vilcea', 80],
            ['Fagaras', 99]
        ]],
        ['Rimnicu Vilcea',[
            ['Sibiu', 80],
            ['Craiova', 146],
            ['Pitesti', 97]
        ]],
        ['Craiova',[
            ['Rimnicu Vilcea', 146],
            ['Dobreta', 120],
            ['Pitesti', 138]
        ]],
        ['Fagaras',[
            ['Sibiu', 99],
            ['Bucharest', 211]
        ]],
        ['Pitesti',[
            ['Rimnicu Vilcea', 97],
            ['Craiova', 138],
            ['Bucharest', 101]
        ]],
        ['Bucharest',[
            ['Fagaras', 211],
            ['Pitesti', 101],
            ['Giurgiu', 90],
            ['Urziceni', 85]
        ]],
        ['Giurgiu',[
            ['Bucharest', 90]
        ]],
        ['Neamt',[
            ['Iasi', 87]
        ]],
        ['Iasi',[
            ['Neamt', 87],
            ['Vaslui', 92]
        ]],
        ['Vaslui',[
            ['Iasi', 92],
            ['Urziceni', 142]
        ]],
        ['Urziceni',[
            ['Bucharest', 85],
            ['Vaslui', 142],
            ['Hirsova', 98]
        ]],
        ['Hirsova',[
            ['Urziceni', 98],
            ['Eforie', 86]
        ]],
        ['Eforie',[
            ['Hirsova', 86]
        ]]
    ]
);

/**
 * Evento invocado durante o envio do formulário.
 */
$('form').submit(function(event) {
    /**
     * Não permite a atualização padrão da página.
     */
    event.preventDefault();

    /**
     * Executado algoritmo de dijkstra para buscar menor caminho entre as cidades.
     */
    let caminho = dijkstra.getPath($('#origem').val(), $("#destino").val());

    /**
     * Incluída a cidade de origem no início do caminho.
     */
    caminho.unshift($('#origem').val());

    /**
     * Criada uma nova string a partir do array separando os vértices por setas e exibido no campo resultado.
     */
    $('#result').val(caminho.join(' => '));
});