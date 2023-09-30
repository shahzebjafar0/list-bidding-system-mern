import { Image } from "cloudinary-react";

const ShowList = ({
  id,
  title,
  description,
  price,
  seller,
  onUpdate,
  onDelete,
  isSingle,
  image,
  isNew
}) => {
  // Check if the user ID from localStorage matches the seller's ID

  const isSeller =
    seller && seller._id == JSON.parse(localStorage.getItem("user"))?.id;

  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          {image ? (
            <Image
              className={"default-image"}
              cloudName="dkqw9xa0d"
              publicId={image}
            />
          ) : (
            <img src="https://placekitten.com/640/360" alt="Shoes" />
          )}
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{isNew ?"NEW":"SOLD" }</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${price}</div>
            {seller && (
              <div className="badge badge-outline">
                <p className="text-gray-700 text-sm">
                  Seller:{" "}
                  <span className="text-blue-500">{seller?.fullName}</span>
                </p>
              </div>
            )}
            {isSeller && isSingle && (
              <div className="flex space-x-2">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
                  onClick={() => onUpdate(id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
                  onClick={() => onDelete(id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowList;
