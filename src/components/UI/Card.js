import "./Card.css";

function Card(props) {
  const classes = `card ${props.className}`;
  console.log(`this is card component + ${props.className}`);
  return <div className={classes}>{props.children}</div>;
}
export default Card;
