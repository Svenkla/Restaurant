import Link from "next/link";
import HranaCard from "./HranaCard";
import CardSkeleton from "./CardSkeleton";

const HranaNaPage = ({ data, isLoading }) => {
  return (
    <div className="prikazHrane">
      {isLoading && <CardSkeleton cards={10} />}
      {data &&
        data.hints.map((item, i) => (
          <Link
            key={i}
            href={`/infohrana/${item.food.foodId}`}
            className="LinkDoHrane"
          >
            <HranaCard key={i} item={item} />
          </Link>
        ))}
    </div>
  );
};

export default HranaNaPage;
