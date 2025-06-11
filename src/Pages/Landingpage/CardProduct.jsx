/* eslint-disable react/prop-types */
// CardProduct.jsx
const CardProduct = ({ image, title, description, type }) => {
  return (
    <div className="mb-10 rounded-xl bg-white shadow-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="p-5">
        <h3 className="mb-2 text-xl font-semibold text-primary">{title}</h3>
        <span className="mb-2 inline-block rounded-full px-3 py-1 text-sm text-white font-medium bg-primary">
          {type}
        </span>
        <p className="text-primary text-sm text-justify mt-2">{description}</p>
      </div>
    </div>
  );
};

export default CardProduct;
