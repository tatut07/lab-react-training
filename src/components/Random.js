function Random({ min, max }) {
  const Random = Math.floor(Math.random() * (max - min) + min);
  return (
    <p>
      Random value between {min} and {max} {'=>'} {Random}
    </p>
  );
}

export default Random;
