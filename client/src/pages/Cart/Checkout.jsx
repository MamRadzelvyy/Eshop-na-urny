import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import Select from 'react-select';
import { motion } from 'framer-motion';

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);

  const [form, setForm] = useState({
    name: '',
    country: '',
    address: '',
    zip: '',
    city: '',
    note: ''
  });

  const [errors, setErrors] = useState({});
  const fieldRefs = {
    name: useRef(null),
    country: useRef(null),
    address: useRef(null),
    zip: useRef(null),
    city: useRef(null)
  };

  const scrollToFirstError = (errorKeys) => {
    const firstErrorField = fieldRefs[errorKeys[0]];
    if (firstErrorField && firstErrorField.current) {
      firstErrorField.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateZip = (zip) => /^\d{5}$/.test(zip);
  const validateName = (name) => name.trim().split(' ').length >= 2;

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!form.name) newErrors.name = '❗️ Vyplňte jméno';
    else if (!validateName(form.name)) newErrors.name = '❗️ Zadejte celé jméno (jméno a příjmení)';

    if (!form.country) newErrors.country = '❗️ Vyberte zemi';
    if (!form.address) newErrors.address = '❗️ Vyplňte adresu';
    if (!form.city) newErrors.city = '❗️ Vyplňte město';
    if (!form.zip) newErrors.zip = '❗️ Vyplňte PSČ';
    else if (!validateZip(form.zip)) newErrors.zip = '❗️ Zadejte platné PSČ (5 číslic)';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error('Zkontrolujte prosím formulář.');
      scrollToFirstError(Object.keys(newErrors));
      return;
    }
    if (!agreed) {
      toast.error('Musíte souhlasit s obchodními podmínkami.');
      return;
    }

    navigate('/payment', { state: { customerInfo: form } });
  };

  const countryOptions = [
    'Česká republika', 'Slovensko', 'Německo', 'Rakousko', 'Polsko', 'Maďarsko', 'Francie',
    'Velká Británie', 'Itálie', 'Španělsko', 'Švédsko', 'Finsko', 'Norsko', 'Dánsko',
    'Nizozemsko', 'Belgie', 'Portugalsko', 'Řecko', 'Švýcarsko', 'Irsko', 'USA', 'Kanada', 'Austrálie'
  ].map((country) => ({ label: country, value: country }));

  const ErrorMessage = ({ children }) => (
    <motion.p
      className="text-red-500 text-sm"
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.p>
  );

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Objednávka</h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" onSubmit={handleSubmit}>
          {/* Jméno */}
          <div className="flex flex-col gap-2" ref={fieldRefs.name}>
            <label className="font-semibold">Jméno a příjmení</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              className={`border rounded px-4 py-2 ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          </div>

          {/* Země */}
          <div className="flex flex-col gap-2" ref={fieldRefs.country}>
            <label className="font-semibold">Země</label>
            <div className="w-full">
              <Select
                options={countryOptions}
                value={countryOptions.find(c => c.value === form.country)}
                onChange={(selected) => {
                  setForm({ ...form, country: selected ? selected.value : '' });
                  setErrors((prev) => ({ ...prev, country: '' }));
                }}
                placeholder="Vyberte zemi"
                className="text-sm w-full"
                noOptionsMessage={() => 'Žádná země nenalezena'}
                styles={{
                  control: (base, state) => ({
                    ...base,
                    borderColor: errors.country ? 'red' : state.isFocused ? '#3b82f6' : base.borderColor,
                    boxShadow: state.isFocused ? '0 0 0 1px #3b82f6' : base.boxShadow,
                    '&:hover': { borderColor: '#3b82f6' },
                  }),
                  menuList: (provided) => ({
                    ...provided,
                    maxHeight: 150,
                    overflowY: 'auto'
                  })
                }}
              />
            </div>
            {errors.country && <ErrorMessage>{errors.country}</ErrorMessage>}
          </div>

          {/* Adresa */}
          <div className="flex flex-col gap-2 md:col-span-2" ref={fieldRefs.address}>
            <label className="font-semibold">Adresa</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              autoComplete="street-address"
              className={`border rounded px-4 py-2 ${errors.address ? 'border-red-500' : ''}`}
            />
            {errors.address && <ErrorMessage>{errors.address}</ErrorMessage>}
          </div>

          {/* PSČ */}
          <div className="flex flex-col gap-2" ref={fieldRefs.zip}>
            <label className="font-semibold">PSČ</label>
            <input
              type="text"
              name="zip"
              value={form.zip}
              onChange={handleChange}
              autoComplete="postal-code"
              inputMode="numeric"
              className={`border rounded px-4 py-2 ${errors.zip ? 'border-red-500' : ''}`}
            />
            {errors.zip && <ErrorMessage>{errors.zip}</ErrorMessage>}
          </div>

          {/* Město */}
          <div className="flex flex-col gap-2" ref={fieldRefs.city}>
            <label className="font-semibold">Město</label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              autoComplete="address-level2"
              className={`border rounded px-4 py-2 ${errors.city ? 'border-red-500' : ''}`}
            />
            {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
          </div>

          {/* Poznámka */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="font-semibold">
              Poznámka k objednávce <span className="text-gray-500 text-sm">(volitelné)</span>
            </label>
            <textarea
              name="note"
              value={form.note}
              onChange={handleChange}
              className="border rounded px-4 py-2"
              rows={4}
            />
          </div>
        </form>

        {/* Shrnutí objednávky */}
        <h2 className="text-2xl font-bold mb-4">Shrnutí objednávky</h2>
        <ul className="divide-y divide-gray-200 mb-6">
          {cartItems.map((item) => (
            <li key={item._id || item.id} className="flex justify-between items-center py-3">
              <div className="flex items-center gap-4">
                <img
                  src={item.imagePath}
                  alt={item.name}
                  className="w-16 h-16 object-contain rounded border"
                />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.quantity}× {item.price} Kč
                  </p>
                </div>
              </div>
              <p className="text-right font-semibold">
                {item.quantity * item.price} Kč
              </p>
            </li>
          ))}
        </ul>

        <div className="flex justify-between items-center text-lg font-bold mb-6">
          <span>Celkem</span>
          <span>
            {new Intl.NumberFormat('cs-CZ', {
              style: 'currency',
              currency: 'CZK',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            }).format(totalPrice)}
          </span>
        </div>
        <div className="flex items-center gap-2 mb-4">
  <input
    type="checkbox"
    id="terms"
    checked={agreed}
    onChange={(e) => setAgreed(e.target.checked)}
    className="w-4 h-4"
  />
  <label htmlFor="terms" className="text-sm text-gray-700">
    Souhlasím s{" "}
    <a href="/obchodni-podminky" target="_blank" className="text-blue-600 underline">
      obchodními podmínkami
    </a>
  </label>
</div>

        <Button
          type="submit"
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 w-full text-base"
        >
          Přejít k placení
        </Button>
      </div>
      <Footer />
    </>
  );
}
