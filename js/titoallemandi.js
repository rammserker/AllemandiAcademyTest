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
    // Nueva ficha
    const bots = document.querySelectorAll('button');

    for (const bot of bots)
    {
        if (bot.classList.contains('nueva-ficha'))
            bot.addEventListener(
                'click',
                evt => nuevaFicha(evt.target.parentElement.parentElement)
            );
    }

    // Campos de búsqueda
    const searchrow = document.querySelector('thead tr:nth-of-type(2)'),
        tbody = searchrow.parentElement.nextElementSibling;
    
    searchrow.addEventListener('input', evt => {
        const search = evt.target,
            column = search.dataset.col;

        console.log('Aca ta', search, column, tbody, search.value);

        filtrarPorColumna(column, tbody, search.value);
    });
}

function nuevaFicha (el)
{
    const uid = el.dataset.uid; // Id de usuario
    console.log('Nueva ficha para usuario', uid);

    window.location = 'formulario.html';
}

function filtrarPorColumna (col /*Int*/, tbody /* HTMLTBody */, str = "")
{
    str = str.trim().toLowerCase();

    const tds = tbody.querySelectorAll(`td:nth-of-type(${ col })`);

    for (const td of tds)
    {
        const fila = td.parentElement;

        if (str.length < 2)
        {
            fila.classList.remove('hide');
        }
        else
        {
            const txt = td.innerText.trim().toLowerCase();
            
            fila.classList[ txt.indexOf(str) > -1 ? 'remove' : 'add' ]('hide');
        }
    }
}

function initFormGuard ()
{
    document.querySelector('form').addEventListener('submit', evt => confirm('Está por guardar la evaluación. ¿Proceder?'));
}
