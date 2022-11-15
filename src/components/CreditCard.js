function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    height: '200px',
    borderRadius: '6px',
    padding: '5px',
    margin: '5px',
  };
  let cardImg = '';
  if (type === 'Visa') {
    cardImg = './assets/images/visa.png';
  } else if (type === 'Master Card') {
    cardImg = './assets/images/master-card.svg';
  }
  const year = expirationYear.toString();
  const expYear = year.slice(-2);
  const expirationDate = `${expirationMonth} / ${expYear}`;
  const cardNumber = number.toString().split('').slice(-4).join('');

  return (
    <div style={cardStyle}>
      <div
        className="cardLogo"
        style={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <img
          src={cardImg}
          alt="cardBank"
          style={{ width: '50px', height: '25px', padding: '5px' }}
        />
      </div>
      <div className="num">
        <h3>**** **** **** {cardNumber}</h3>
      </div>
      <div
        className="cardTxt"
        style={{ textAlign: 'left', paddingTop: '15px', paddingBottom: '0' }}
      >
        <p>
          Expires {expirationDate} {bank}
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
