import "./third-party/jquery.min.js";

const fillForm = () => {
  const data = {
    name: "John Doe",
    age: 32,
    address: "Any town",
    country: "Iceland",
    phone: "+1426855510",
  };
  const prefix = "data-form";

  $(`[${prefix}-id="name"]`)[0]?.value = data.name;
  $(`[${prefix}-id="age"]`)[0]?.value = data.age;
  $(`[${prefix}-id="address"]`)[0]?.value = data.address;
  $(`[${prefix}-id="country"]`)[0]?.value = data.country;
  $(`[${prefix}-id="phone"]`)[0]?.value = data.phone;
};

export default fillForm;
