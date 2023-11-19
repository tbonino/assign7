import React from "react";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = React.useState({
    fullName: "",
    userName: "",
    email: "",
    address: "",
    phone: "",
  });

  //function body for handling change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmit} className="formBody">
        <label htmlFor="fullNameInput">Enter Your Full Name: </label>
        <input
          className="textInput"
          id="fullNameInput"
          type="text"
          placeholder="John Doe"
          name="fullName"
          value={formData.fullName} // getter from our state management
          onChange={handleChange}
        />

        <label htmlFor="userNameInput">Enter Your Desired User Name: </label>
        <input
          className="textInput"
          id="userNameInput"
          type="text"
          placeholder="MightyMonarch68"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />

        <label htmlFor="emailInput">Enter Your Email: </label>
        <input
          className="textInput"
          id="emailInput"
          type="email"
          placeholder="mfitzcarraldo@guildoci.net"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="addressInput">Enter Your Address: </label>
        <input
          className="textInput"
          id="addressInput"
          type="address"
          placeholder="The Cocoon, Anywhere, USA"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        <label htmlFor="addressInput">Enter Your Phone Number: </label>
        <input
          className="textInput"
          id="phoneInput"
          type="phone"
          placeholder="1-800-666-2724"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
