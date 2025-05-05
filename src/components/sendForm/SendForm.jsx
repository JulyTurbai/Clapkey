import React, { useState } from "react";

const SendForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://api.clapkey.com/webhook/55921649-6989-42a1-b679-179c46ce4c50", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Email успішно відправлено!");
        setFormData({ email: "", subject: "", message: "" });
      } else {
        const errorData = await response.json();
        setStatus(`Помилка: ${errorData.message}`);
      }
    } catch (error) {
      setStatus("Виникла помилка при відправці email: " + error.message);
    }
  };

  return (
    <div className="form">
      <p className="subscr">ПІДПИШІТЬСЯ НА НАШІ НОВИНИ</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            required
          />
        </div>
        <button className="form-button" type="submit">Детальніше</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default SendForm;
