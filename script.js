const fname = document.getElementById("firstName");
const lname = document.getElementById("lastName");
const email = document.getElementById("email");
const city = document.getElementById("city");
const zip = document.getElementById("zip");
const phone = document.getElementById("phone");
const dob = document.getElementById("dob");
const btn = document.getElementById("btn");
const err = document.getElementById("err");
const msg = document.getElementById("msg");

clearError = () => {
  err.innerHTML = "";
};

const validate = (e) => {
  e.preventDefault();
  clearError();
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const cityValue = city.value.trim();
  const zipValue = zip.value.trim();
  const phoneValue = phone.value.trim();
  const dobValue = dob.value.trim();
  // const msgValue = msg.value.trim();

  let phoneRGEX =
    /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  let emailRGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (fnameValue === "") {
    err.innerHTML = "First Name cannot be blank <br>";
  } else if (fnameValue.length > 15) {
    err.innerHTML = "First Name is too long <br>";
  } else if (fnameValue.length < 3) {
    err.innerHTML = "First Name is too short <br>";
  }

  if (lnameValue === "") {
    err.innerHTML += "Last Name cannot be blank <br>";
  } else if (lnameValue.length > 20) {
    err.innerHTML = "Last Name is too long <br>";
  } else if (lnameValue.length < 3) {
    err.innerHTML = "Last Name is too short <br>";
  }

  if (cityValue === "" || zipValue === "") {
    err.innerHTML += "Address cannot be blank <br>";
  } else if (cityValue.length < 3 || cityValue.length > 20) {
    err.innerHTML += "City/State is not valid <br>";
  }

  if (zipValue.length > 10) {
    err.innerHTML += "Zip Code is not valid <br>";
  }

  if (phoneValue === "") {
    err.innerHTML += "Phone Number cannot be blank <br>";
  } else if (phoneValue.length != 10) {
    err.innerHTML += "Phone Number should be 10 digits <br>";
  } else if (!phoneRGEX.test(phoneValue)) {
    err.innerHTML += "Phone Number is not valid <br>";
  }

  if (emailValue === "") {
    err.innerHTML += "Email cannot be blank <br>";
  } else if (!emailRGEX.test(emailValue)) {
    err.innerHTML += "Email is not valid <br>";
  }

  if (dobValue === "") {
    err.innerHTML += "Date of Birth cannot be blank <br>";
  }
};

btn.addEventListener("click", validate);
