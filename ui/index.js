import * as $ from "./third-party/jquery";

const data = {
  name: "John Doe",
  age: 32,
  address: "Any town",
  country: "Iceland",
  phone: "+1426855510",
};

const prefix = "data-form";

const button = $("#fill-button");

function fillForm() {
  console.log(123123);
  $(`#${prefix}-name`).value = data.name;
  $(`#${prefix}-age`).value = data.age;
  $(`#${prefix}-address`).value = data.address;
  $(`#${prefix}-country`).value = data.country;
  $(`#${prefix}-phone`).value = data.phone;
}

button.onClick = fillForm;
