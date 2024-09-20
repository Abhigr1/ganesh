
const adminUser = {
  username: 'admin',
  password: 'password',
  role: 'admin'
};

function login(username, password) {
  if (username === adminUser.username && password === adminUser.password) {
    return true;
  } else {
    return false;
  }
}

function checkAdminRole(username, password) {
  return login(username, password);
}

function getRandomData() {
  const getDataFromLocalStorage = () => {
    const storedData = localStorage.getItem('formData');
    return storedData ? JSON.parse(storedData) : [];
  };

  // Retrieve data
  const dataArray = getDataFromLocalStorage();

  if(dataArray.length === 0) {
    document.getElementById('result').innerText = 'No data available!';
    return []; // return an empty array
  } else {
    const randomIndex = Math.floor(Math.random() * dataArray.length); // Get random index
    return dataArray[randomIndex]; // return a single random data object
  }
}

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (checkAdminRole(username, password)) {
    const randomData = getRandomData();
    if (randomData) { // check if randomData is not empty
      document.getElementById('result').innerHTML =  `Name: ${randomData.name}
                                                    \nEmail: ${randomData.email}
                                                    \nPhone: ${randomData.phone}`;
    } else {
      document.getElementById('result').innerHTML = "No data available!";
    }
  } else {
    document.getElementById('result').innerHTML = "Access denied";
  }
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
});
