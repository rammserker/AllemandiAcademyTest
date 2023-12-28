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

function initUsersActions ()
{
    const bots = document.querySelectorAll('.nueva-ficha');

    for (const bot of bots)
    {
        bot.addEventListener('click', evt => nuevaFicha(evt.target.parentElement.parentElement));
    }

}

function nuevaFicha (el)
{
    const uid = el.dataset.uid; // Id de usuario
    console.log('Nueva ficha para usuario', uid);

    window.location = 'formulario.html';
}

function initFormGuard ()
{
    document.querySelector('form').addEventListener('submit', evt => confirm('Está por guardar la evaluación. ¿Proceder?'));
}
