var app = angular.module("registrationApp", []);
app.controller("registrationController", function($scope) {
$scope.user = {};
$scope.submitted = false;
$scope.submitForm = function() {
if ($scope.regForm.$valid) {
$scope.submitted = true;
alert("Registration Successful!");
}
};
});
Style.css
body {
font-family: Arial, sans-serif;
background-color: #eaf0f8;
margin: 0;
padding: 30px;

}
.container {
width: 400px;
margin: auto;
background-color: white;
padding: 25px;
border-radius: 10px;
box-shadow: 0 0 10px #aaa;
}
h2 {
text-align: center;
color: #243b64;
}
label {
display: block;
margin-top: 12px;
font-weight: bold;
}
input, select {
width: 100%;
padding: 10px;
margin-top: 5px;
box-sizing: border-box;
border: 1px solid #aaa;
border-radius: 5px;
}
.error {
display: block;
color: red;
font-size: 12px;
margin-top: 4px;
}
button {
width: 100%;
padding: 12px;
margin-top: 20px;
background-color: #243b64;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
}
button:disabled {
background-color: gray;

cursor: not-allowed;
}
.success {
text-align: center;
color: green;
font-weight: bold;
}