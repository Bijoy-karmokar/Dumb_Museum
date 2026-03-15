import React from "react";
import Marquee from "react-fast-marquee";
import { FaEye, FaRegStar } from "react-icons/fa";
import { useLoaderData } from "react-router";
import {
  addunWantedIdea,
  addWantedIdea,
  isunWantedIdeas,
  isWantedIdeas,
} from "../utility/localStorage";
import Notiflix, { Confirm } from "notiflix";

const MuseumDetails = () => {
  const data = useLoaderData();
  const {
    id,
    image,
    views,
    rating,
    short_details,
    name,
    created_date,
    key_feature,
    long_details,
    quote,
  } = data || {};

  const handleWantedIdea = (id) => {
    if (isWantedIdeas(id)) {
      Notiflix.Notify.failure("Wanted idea alreay exist.");
      return;
    }
    if (isunWantedIdeas(id)) {
      Notiflix.Notify.failure("UnWanted idea already exist.");
      return;
    }

    Confirm.show(
      "Wanted Confirm",
      "Do you agree with me?",
      "Yes",
      "No",

      () => {
        addWantedIdea(id);
        Notiflix.Notify.success("anted idea added successfully.");
      },
    );
  };
  const handleunWantedIdea = (id) => {
    if (isWantedIdeas(id)) {
      Notiflix.Notify.failure("Wanted idea alreay exist.");
      return;
    }
    if (isunWantedIdeas(id)) {
      Notiflix.Notify.failure("UnWanted idea already exist.");
      return;
    }
    Confirm.show(
      "Unwanted Confirm",
      "Do you agree with me?",
      "Yes",
      "No",

      () => {
        addunWantedIdea(id);
        Notiflix.Notify.success("Unwanted idea added successfully.");
      },
    );
  };
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center p-6 mx-auto py-10  lg:flex-row">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-80">
          <img
            src={image}
            alt=""
            className="object-contain rounded-3xl h-72 sm:h-80 lg:h-96 xl:h-136"
          />
        </div>
        <div className="flex flex-1 space-y-5 flex-col  justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-4xl lg:text-left">
          <h1 className="text-4xl font-bold leading-none">{name}</h1>
          <p className="text-lg sm:mb-12">{short_details}</p>
          <div className="flex justify-between gap-5">
            <div className="shadow-sm p-5 bg-base-200 rounded-2xl w-full">
              <h3 className="uppercase">Rating</h3>
              <p className="flex items-center gap-1 text-lg">
                <FaRegStar />
                <span>{rating}</span>{" "}
              </p>
            </div>
            <div className="shadow-sm p-5 bg-base-200 rounded-2xl w-full">
              <h3 className="uppercase">Views</h3>
              <p className="flex items-center gap-1 text-lg">
                <FaEye />
                <span>
                  {new Intl.NumberFormat("en-US", {
                    notation: "compact",
                  }).format(views)}
                </span>{" "}
              </p>
            </div>
            <div className="shadow-sm p-5 bg-base-200 rounded-2xl w-full">
              <h3 className="uppercase">Created</h3>
              <p className="flex items-center gap-1 text-lg">
                <span>{created_date}</span>{" "}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium">Why it is iconics.</h3>
            <p>{long_details}</p>
            <p>
              <span className="font-medium text-lg">Key Feature:</span>
              {key_feature}
            </p>
          </div>

          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button
              onClick={() => handleWantedIdea(id)}
              className="btn btn-secondary"
            >
              I actually Want this!
            </button>
            <button
              onClick={() => handleunWantedIdea(id)}
              className="btn btn-secondary btn-outline"
            >
              I don't Want this!
            </button>
          </div>

          <div className="rounded-2xl bg-base-300 text-base-content p-4">
            <aside>
              <Marquee>{quote}</Marquee>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MuseumDetails;
