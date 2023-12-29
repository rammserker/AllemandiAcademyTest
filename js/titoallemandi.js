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
    const row = document.querySelector('thead tr:nth-of-type(2)'),
        tbody = row.parentElement.nextElementSibling;
    
    row.addEventListener('input', evt => filtrarTBody(row, tbody));
}

function nuevaFicha (el)
{
    const uid = el.dataset.uid; // Id de usuario
    console.log('Nueva ficha para usuario', uid);

    window.location = 'formulario.html';
}

function filtrarTBody (row /*Int*/, tbody /* HTMLTBody */)
{
    const terms = [...row.children]
        .map(
            c => c.firstElementChild != null && c.firstElementChild.type == 'search' ?
                c.firstElementChild.value.trim().toLowerCase() :
                ''
        ),
        rows = [...tbody.querySelectorAll('tr')],
        clean = terms.every(t => t.length < 2);

    rows.forEach(fila => {

        if (clean)
        {
            fila.classList.remove('hide');
        }
        else
        {
            let stay = true;

            for (let i = 0, l = terms.length; i < l; i++)
            {
                const str = terms[ i ];

                if (str.length >= 2)
                {
                    const content = fila.children[ i ].innerText.trim().toLowerCase();

                    console.log(str, content, content.indexOf(str), stay && content.indexOf(str) > -1);

                    stay = stay && content.indexOf(str) > -1;
                }
            }

            fila.classList[ stay ?'remove' :  'add' ]( 'hide' );
        }
    });
}

function initFormGuard ()
{
    document.querySelector('form').addEventListener('submit', evt => confirm('Está por guardar la evaluación. ¿Proceder?'));
}
