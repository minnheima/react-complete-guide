import "./Card.css";

const Card = (props) => {
  const classes = `card ${props.className}`;
  // console.log(`this is card component + ${props.className}`);
  return <div className={classes}>{props.children}</div>;
};
export default Card;
