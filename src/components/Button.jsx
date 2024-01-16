const Button = (props) => {
  return (
    <button className={props.isOutline ? "outline_btn" : "Btn"}>
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;
