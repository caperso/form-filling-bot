import "./third-party/jquery.min.js";

function putElementValue(target, value) {
  const prefix = "data-form-id";
  const element = $(`[${prefix}="${target}"]`)[0];
  if (element && element.value !== undefined) element.value = value;
}

const fillForm = () => {
  const data = {
    name: "John Doe",
    age: 32,
    address: "Any town",
    country: "Iceland",
    phone: "+1426855510",
  };

  putElementValue("name", data.name);
  putElementValue("age", data.age);
  putElementValue("address", data.address);
  putElementValue("country", data.country);
  putElementValue("phone", data.phone);
};

export default fillForm;
