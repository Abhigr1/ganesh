const getDataFromLocalStorage2 = () => {
    const storedData =localStorage.getItem('formData2');
    return storedData ? JSON.parse(storedData) : [] ;
};

const saveDataToLocalStorage2 = (data) => {
    localStorage.setItem('formData2' , JSON.stringify(data));
};

let dataArrayThird = getDataFromLocalStorage2();

document.getElementById('dataForm').addEventListener('submit',function(event)
{
    event.preventDefault();


const formData2 = {
    name : document.getElementById('name').value,
    email : document.getElementById('email').value,
    phone : document.getElementById('number').value
};

dataArrayThird.push(formData2);
saveDataToLocalStorage2(dataArrayThird);

document.getElementById('name').value = '';
document.getElementById('email').value = '';
document.getElementById('number').value = '';


alert('Data submitted Successfully');
});
