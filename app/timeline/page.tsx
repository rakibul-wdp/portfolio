import { timelines } from "@/constants/timeline";
import { TiArrowUpThick } from "react-icons/ti";

const Timeline = () => {
  return (
    <div>
      {timelines.map((timeline) => (
        <>
          <div
            className={`flex flex-col text-white ${
              timeline.id === 1 ? "mb-5" : "my-5"
            } p-5 border-[0.01px] rounded-sm border-gray-500`}
            key={timeline.id}
          >
            <div className="flex items-center justify-between">
              <div className="w-full flex items-center justify-between">
                <div className="h-[70px] flex flex-col justify-between">
                  <h1 className="text-2xl">{timeline.title}</h1>
                </div>
                <div className="h-[70px] flex flex-col items-center justify-between">
                  <p>{timeline.end}</p>
                  <TiArrowUpThick />
                  <p>{timeline.start}</p>
                </div>
              </div>
            </div>
            <ul className="mt-7 list-disc list-inside">
              {timeline.descriptions.map((des) => (
                <li key={des.id}>{des.des}</li>
              ))}
            </ul>
          </div>
          {timeline.id === 3 ? "" : <hr className="rotate-90 w-10 mx-auto" />}
        </>
      ))}
    </div>
  );
};

export default Timeline;
