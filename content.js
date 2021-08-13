const fillForm = () => {
  const data = {
    name: "John Doe",
    age: 32,
    address: "Any town",
    country: "Iceland",
    phone: "+1426855510",
  };

  const prefix = "data-form";
  document.querySelector(`[${prefix}-id="name"]`).value = data.name;
  document.querySelector(`[${prefix}-id="age"]`).value = data.age;
  document.querySelector(`[${prefix}-id="address"]`).value = data.address;
  document.querySelector(`[${prefix}-id="country"]`).value = data.country;
  document.querySelector(`[${prefix}-id="phone"]`).value = data.phone;
};

window.addEventListener(
  "message",
  function (event) {
    console.log("incoming", { event });
    if (event.source != window) return;

    if (event.data.type && event.data.type == "FILL_FORM") {
      const { message } = event.data;
      console.log(message);
      return fillForm();
    }
  },
  false
);

console.log("Form Filling Bot Extension Loaded", this);
