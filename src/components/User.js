const User = (props) => {
  const { name, location } = props;

  return (
    <div className="about">
      <h1>Name: {props.name}</h1>
      <h2>Location: {props.location}</h2>
      <h3>Email: abc@gmail.com</h3>
    </div>
  );
};

export default User;
