import { useState } from 'react';

export const useOrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: '',
  });

  const [isSuccessVisible, setIsSuccessVisible] = useState(false);


  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhoneChange = (event) => {
    const onlyNumbers = event.target.value.replace(/\D/g, '').slice(0, 9);
    setFormData((prevData) => ({
      ...prevData,
      phone: onlyNumbers,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        'https://api.clapkey.com/webhook/callback-form-3c7a89aa-a703-4ea2-ae15-d1832ff38856',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            phone: `+380${formData.phone}`,
          }),
        }
      );

      if (response.ok) {
        setIsSuccessVisible(true);
        setFormData({ name: '', phone: '', comment: '' });
        setStatus('');
      } else {
        const errorData = await response.json();
        setStatus(`Помилка: ${errorData.message}`);
      }
    } catch (error) {
      setStatus('Виникла помилка при відправці email: ' + error.message);
    }
  };

  return {
    formData,
    handleChange,
    handlePhoneChange,
    handleSubmit,
    setIsSuccessVisible,
    isSuccessVisible,
    status,
  };
};