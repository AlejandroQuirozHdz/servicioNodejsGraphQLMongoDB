export async function getErrorMessage(){
    let message = '';

    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Error ' + err.code + ': Este registro ya existe.';
                break;
            default:
                message = 'Error ' + err.code + ': Error de base de datos.';
                break;
        }
    } else {
        for (var errName in err.errors) {
            if (err.errors[errName].message) {
                message = err.errors[errName].message;
            }
        }
    }
    if (message === "" || message === " ") {
        try {
            message = err.toString();
        } catch (e) {}
    }
    return message;
}