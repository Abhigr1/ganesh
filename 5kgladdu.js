const getDataFromLocalStorage1 = () => {
    const storedData =localStorage.getItem('formData1');
    return storedData ? JSON.parse(storedData) : [] ;
};

const saveDataToLocalStorage1 = (data) => {
    localStorage.setItem('formData1' , JSON.stringify(data));
};

let dataArraySecond = getDataFromLocalStorage1();

document.getElementById('dataForm').addEventListener('submit',function(event)
{
    event.preventDefault();


const formData1 = {
    name : document.getElementById('name').value,
    email : document.getElementById('email').value,
    phone : document.getElementById('number').value
};

dataArraySecond.push(formData1);
saveDataToLocalStorage1(dataArraySecond);

document.getElementById('name').value = '';
document.getElementById('email').value = '';
document.getElementById('number').value = '';


alert('Data submitted Successfully');
});

