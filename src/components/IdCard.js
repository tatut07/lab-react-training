function IdCard(props) {
  return (
    <div>
      <img className="photo" src={props.picture} alt="profile" />
      <div>
        <p>First name: {props.firstName}</p>
        <p>Last name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth.toDateString()},</p>
      </div>
    </div>
  );
}

export default IdCard;
