console.log('Iniciando app Tito Allemandi Academy...');

// Actualizacion de outputs
function initFichaUpdate ()
{
    const ficha = document.querySelector('form');

    // 

    ficha.addEventListener('input', outputUpdate);
}

function outputUpdate (evt)
{
    const input = evt.target;

    if (input.type == 'range')
    {
        const output = input.parentElement.querySelector('output');
        
        output.innerText = input.value;
    }
}
