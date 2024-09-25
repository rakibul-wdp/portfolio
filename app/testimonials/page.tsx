import { reviews } from "@/constants/reviews";
import Image from "next/image";
import { RxDividerVertical } from "react-icons/rx";
import { TiStar } from "react-icons/ti";

const Testimonials = () => {
  return (
    <div>
      {reviews.map((review) => (
        <div
          className="flex flex-col mb-10 text-white p-5 border-[0.01px] rounded-sm border-gray-500"
          key={review.id}
        >
          <div className="flex items-center justify-start gap-5">
            <Image
              src={review.avatar}
              alt=""
              className="w-[50px] h-[50px] rounded-full"
            />
            <div className="flex flex-col items-start justify-between gap-2">
              <h3 className="text-lg font-semibold">{review.reviewer}</h3>
              <p className="">{review.country}</p>
            </div>
          </div>
          <div className="my-5 flex items-center justify-start gap-1">
            <div className="flex items-center justify-center">
              {Array.from(Array(review.rating).keys()).map((el) => (
                <TiStar />
              ))}
              {review.rating < 5 &&
                Array.from(Array(5 - review.rating).keys()).map((el) => (
                  <TiStar />
                ))}
              <p className="text-sm font-medium ml-0.5">{review.rating}</p>
            </div>
            <RxDividerVertical />
            <p className="text-sm font-medium">{review.date}</p>
          </div>
          <p className="text-justify">{review.review}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
