// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
// var user = {};

// function startApp() {
//   axios
//     .get(url)
//     .then(function (response) {

//       user = response.data;

//       // TODO: 이름, 이메일, 주소 표시하기
//       username.innerText = user.name;
//       email.innerText = user.email;
//       address.innerText = user.address;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

var user = {};


//Address type 객체에 대한 정의
/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser(){
  return axios.get(url);
}

fetchUser().then(function(response){
  response.address
});

function startApp() {
  // axios
  //   .get(url)
  fetchUser()
    .then(function (response) {

      user = response.data;

      // TODO: 이름, 이메일, 주소 표시하기
      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = user.address;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
