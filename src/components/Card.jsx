import "./Card.css";

function card(props) {
  return (
    <section className="sec-image">
      <div className="card" style={{border: props.new ? "2px green solid":""}}>
        <img className="" src={props.img} alt="" />
      </div>
    </section>
  );
}

export default card;
