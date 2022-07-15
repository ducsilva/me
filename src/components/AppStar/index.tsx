import _ from "lodash";
import StarRatings from "react-star-ratings";

type StarProps = {
  star?: string;
  changeRating?: any;
  numberOfStar?: number;
  name?: string;
  color?: string;
};

const AppStar = ({
  star,
  changeRating,
  numberOfStar,
  name,
  color,
}: StarProps) => {
  return (
    <StarRatings
      rating={_.toNumber(star) || 5}
      starRatedColor={color || "blue"}
      changeRating={changeRating}
      numberOfStars={numberOfStar || 5}
      name={name || "rating"}
    />
  );
};

export default AppStar;
