const database = firebase.database();
const ref_temp = database.ref("Settings/Temperature");
const ref_humi = database.ref("Settings/Humidity");

const tempSetForm = document.getElementById('temp');
const humiSetForm = document.getElementById('humi');

tempSetForm.addEventListener('submit', (e) => {
    e.preventDefault();
    from = tempSetForm['from'].value;
    to = tempSetForm['to'].value;
    data = { from: from, to: to };
    ref_temp.set(data)

});

humiSetForm.addEventListener('submit', (e) => {
    e.preventDefault();
    from = humiSetForm['from'].value;
    to = humiSetForm['to'].value;
    data = { from: from, to: to };
    ref_humi.set(data)
});