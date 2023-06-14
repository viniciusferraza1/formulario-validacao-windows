
// Preencher opções de dia
let daySelect = document.getElementById('day');
for (let day = 1; day <= 31; day++) {
    let option = document.createElement('option');
    option.value = day;
    option.text = day;
    daySelect.appendChild(option);
}

// Preencher opções de ano
let yearSelect = document.getElementById('year');
let currentYear = new Date().getFullYear();
let startYear = currentYear - 110; // Início do intervalo de anos
for (let year = startYear; year <= currentYear; year++) {
    let option = document.createElement('option');
    option.value = year;
    option.text = year;
    yearSelect.appendChild(option);
}

// VINI-MANUAL

function next() {
    // Lógica para o campo Nome
    let nomeInput = document.getElementById('nome');
    let obrigatorioNome = document.getElementById('invalid-add');

    if (nomeInput.value.trim() === '') {
        nomeInput.classList.add('invalid');
        obrigatorioNome.innerHTML = 'Campo Obrigatório';
    } else {
        nomeInput.classList.remove('invalid');
        obrigatorioNome.innerHTML = '';
    }

    nomeInput.addEventListener('focus', function () {
        nomeInput.style.borderColor = 'green';
    });

    // Lógica para o campo Sobrenome
    let sobrenomeInput = document.getElementById('sobrenome');
    let obrigatorioSobrenome = document.getElementById('invalid-add-sobrenome');

    if (sobrenomeInput.value.trim() === '') {
        sobrenomeInput.classList.add('invalid');
        obrigatorioSobrenome.innerHTML = 'Campo Obrigatório';
    } else {
        sobrenomeInput.classList.remove('invalid');
        obrigatorioSobrenome.innerHTML = '';
    }

    sobrenomeInput.addEventListener('focus', function () {
        sobrenomeInput.style.borderColor = 'green';
    });

    // Lógica para as datas
    // DAY
    let daySelect = document.getElementById('day');
    let firstChild = daySelect.firstElementChild;

    if (firstChild.value.includes('dia')) { daySelect.classList.add('invalid') }
    else { daySelect.classList.remove('invalid') }
    // MONTH

    let monthSelect = document.getElementById('month');
    let secondChild = monthSelect.firstElementChild;

    if (secondChild.value.includes('select-one')) { monthSelect.classList.add('invalid') }
    else { monthSelect.classList.remove('invalid') }
    // YEAR

    let yearSelect = document.getElementById('year');
    let thirdChild = monthSelect.firstElementChild;

    if (thirdChild.value.includes('select-one')) { yearSelect.classList.add('invalid') }
    else { yearSelect.classList.remove('invalid') }



    // Lógica para o país da filial
    let getCountry = document.querySelector("select[name='country']")
    let indCountry = getCountry
    let addParagraph = document.getElementById('sl-pais')

    if (indCountry.value === 'sl') {
        getCountry.classList.add('invalid')
        addParagraph.innerHTML = 'Campo Obrigatório'
    } else {
        getCountry.classList.remove('invalid')
        addParagraph.innerHTML = ''
    }



    let nome = nomeInput.value.trim();
    let sobrenome = sobrenomeInput.value.trim();
    let day = daySelect.value;
    let month = monthSelect.value;
    let year = yearSelect.value;
    let country = getCountry.value;

    if (nome === '' || sobrenome === '' || day === 'dia' || month === 'select-one' || year === '' || country === 'sl') {

        window.alert('Verifique se todos os campos foram preenchidos')
    }

    let formData = {
        nome: nome,
        sobrenome: sobrenome,
        dataNascimento: {
            dia: day,
            mes: month,
            ano: year
        },
        pais: country
    };

    console.log(JSON.stringify(formData));

}


// FIM VINI MANUAL