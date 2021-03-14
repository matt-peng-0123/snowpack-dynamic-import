import React, { useState, useEffect } from 'react';

type Translations = {
  [key: string]: string;
};

function App() {
  const [translations, setTranslations] = useState<Translations | null>(null);

  useEffect(() => {
    const loadTranslations = async () => {
      const langCode = 'en';
      const translationsModule = await import(`./${langCode}.json`);
      setTranslations(translationsModule.default);
    };

    loadTranslations();
  }, []);

  return <></>;
}

export default App;
