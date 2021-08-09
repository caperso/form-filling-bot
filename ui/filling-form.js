import * as $ from "./third-party/jquery";

function fillForm() {
  console.log(123123);
  $(`#${prefix}-name`).value = data.name;
  $(`#${prefix}-age`).value = data.age;
  $(`#${prefix}-address`).value = data.address;
  $(`#${prefix}-country`).value = data.country;
  $(`#${prefix}-phone`).value = data.phone;
}

export default fillForm;
