function Greetings({ lang, children }) {
  return lang === 'en' ? <p>Hello {children}</p> : <p>Bonjour {children}</p>;
}

export default Greetings;
