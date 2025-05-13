import React from 'react';
import './OrderCall.css';
import { useOrderForm } from '../../hooks/useOrderForm';

const OrderCall = () => {

  const {
    formData,
    handleChange,
    handlePhoneChange,
    handleSubmit,
    setIsSuccessVisible,
    isSuccessVisible,
    status,
  } = useOrderForm();

  return (
    <div className="order-form">
      <img className="order__img" src="img/orderCall/orderCall.png" alt="" />
      {isSuccessVisible ? (
        <div className="success">
          <div className="close" onClick={() => setIsSuccessVisible(false)}>
            <img src="img/icons/exit.png" alt="Закрити" />
          </div>
          <p className='accepted'>ЗАЯВКА ПРИЙНЯТА</p>
          <p>
            За 10-15 хвилин вам зателефонують для надання детальної інформації або текст про те що все круто або не круто, як повезе
          </p>
        </div>
      ) : (
      <div className="card-order">
        <p className="subscr">ЗАМОВИТИ ДЗВІНОК</p>
        <form className="order" onSubmit={handleSubmit}>
          <div className="inputs">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ім'я*"
              required
            />
            <div className="phone-input-wrapper">
              <span className="phone-prefix">+380</span>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder=""
                required
              />
            </div>
            <div className="input-wrapper">
              <textarea
                className="comment-field"
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Поле для коментаря*"
                required
              />
            </div>
          </div>
          <button className="comment-button" type="submit">
            ЗАМОВИТИ
          </button>
        </form>
        {status && <p>{status}</p>}
      </div>
    )}
  </div>
  );
};

export default OrderCall;