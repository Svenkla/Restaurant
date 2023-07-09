const HranaCard = ({ item, i }) => {
  return (
    <div className="HranaCard" key={i}>
      <div>
        <p className="naslovCard">{item.food.label}</p>
      </div>

      <div>
        <img src={item.food.image} width={200} height={200} alt="slika" />
      </div>

      <div>
        <p className="opisCard">{item.food.category}</p>
        <p className="opisCard">{item.food.nutrients.ENERC_KCAL} kcal</p>
      </div>
    </div>
  );
};

export default HranaCard;
