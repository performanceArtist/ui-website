module.exports = function test() {
    document.getElementById('test').innerHTML = 'ok';
    $('#test').append('<p>fine</p>');
}