function BoxColor({ r, g, b }) {
  let rgb = [r, g, b];
  const styles = {
    margin: '20px',
    width: '100vw',
    height: '250px',
    backgroundColor: `rgb(${rgb})`,
    display: 'inline-block',
    border: '2px',
    borderColor: 'black',
  };
  return (
    <div style={styles}>
      <p>
        rgb({r}, {g}, {b})
      </p>
    </div>
  );
}

export default BoxColor;
