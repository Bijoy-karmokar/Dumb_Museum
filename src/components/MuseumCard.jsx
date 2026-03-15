import React from "react";
import { Link } from "react-router";

const MuseumCard = ({ museum }) => {
//   console.log(museum);
const {id,image,views,rating,short_details,name, created_date}= museum;

  return (
    <div className="card  shadow-sm p-2">
      <figure className="bg-base-100">
        <img
          src={image}
          alt="Museums"
          className="w-96 h-72 hover:scale-105 hover:-rotate-6 object-cover rounded-2xl"
        />
      </figure>
      <div className="card-body space-y-2">
        <div className="flex items-center justify-between">
        <h2 className="card-title">{name}</h2>
        <h4 className="badge badge-accent">{created_date}</h4>
        </div>
        <p>
       {short_details}
        </p>
        <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Views:{new Intl.NumberFormat('en-US',{notation:'compact'}).format(views)}</h3>
            <h5 className="text-lg font-medium">Ratings:{rating}</h5>
        </div>
        <div className="card-actions">
          <Link to={`/museums/${id}`}><button className="btn btn-primary btn-outline">Buy Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default MuseumCard;
