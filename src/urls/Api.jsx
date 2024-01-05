import { useState, useEffect } from 'react';

const urlPart = 'https://654ca14b77200d6ba8591faa.mockapi.io/';

export const apiCatalog = urlPart + 'catalog';
export const apiCatalogByCategory = apiCatalog + '?catid=';
export const apiSearch = apiCatalog + '?search=';
export const apiCategory = urlPart + 'category';
export const apiHotOffer = apiCatalog + '?hotoffer=yes';


export const useCurrencyRates = () => {
  const [currencyData, setCurrencyData] = useState({ EUR: 1, USD: 1 });

  useEffect(() => {
    fetch("https://v6.exchangerate-api.com/v6/64642e161f19cb31cf210149/latest/UAH")
      .then(response => response.json())
      .then(data => {
        const { conversion_rates } = data;
        setCurrencyData({ EUR: conversion_rates.EUR, USD: conversion_rates.USD });
      });
  }, []);

  return currencyData;
};

