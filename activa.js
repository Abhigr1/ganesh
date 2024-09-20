const getDataFromLocalStorage = () => {
    const storedData =localStorage.getItem('formData');
    return storedData ? JSON.parse(storedData) : [] ;
};

const saveDataToLocalStorage = (data) => {
    localStorage.setItem('formData' , JSON.stringify(data));
};

let dataArray = getDataFromLocalStorage();

document.getElementById('dataForm').addEventListener('submit',function(event)
{
    event.preventDefault();


const formData = {
    name : document.getElementById('name').value,
    email : document.getElementById('email').value,
    phone : document.getElementById('number').value
};

dataArray.push(formData);
saveDataToLocalStorage(dataArray);

document.getElementById('name').value = '';
document.getElementById('email').value = '';
document.getElementById('number').value = '';


alert('Data submitted Successfully');
});
