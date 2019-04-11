function validateInput(regex) {
    return function(input) {
        if (regex.test(input.value)) {
            showError(input);
        } else {
            showOk(input);
        }
    }
}

function showError(input) {

}

function showOk(input) {

}