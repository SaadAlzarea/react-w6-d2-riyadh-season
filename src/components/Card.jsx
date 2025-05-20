import "./Card.css";

function card(props) {
  return (
    <section className="sec-image">
      <div className="card">
        <img className="" src={props.img} alt="" />
      </div>
    </section>
  );
}

export default card;
