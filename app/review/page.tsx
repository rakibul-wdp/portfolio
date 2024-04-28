import { reviews } from "@/constants/reviews";
import Image from "next/image";

const Review = () => {
  return (
    <div className="w-[85%] text-white">
      {reviews.map((review) => (
        <div key={review.id}>
          <Image src={review.avatar} alt="" />
          <h3>{review.reviewer}</h3>
          <p>{review.country}</p>
          <div>
            <p>{review.rating}</p>
            <p>{review.date}</p>
          </div>
          <p>{review.review}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
