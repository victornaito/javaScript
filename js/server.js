var http = require('http');

http.createServer(function(req, res){
    res.end('teste')
}).listen(8081)

function fn() {
    console.log('Botao clicado') 
}

function debounce(){
    let timer = null

    return (function(){
        timer = setTimeout(() => {
            fn()
        }, timeout)
    });

}
    const button = this.getElementById('btn-enviar')
    button.addEventListener('click', debounce(loadData, 2000))

