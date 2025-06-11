/* eslint-disable react/prop-types */
const CardProduct = ({ image, title, description, type }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-10 rounded-xl bg-white shadow-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="p-5">
          {/* Judul dengan ukuran responsif */}
          <h3 className="min-h-[24px] mb-2 text-lg sm:text-xl md:text-2xl font-semibold text-primary">
            {title}
          </h3>

          {/* Type dengan font responsif */}
          <span className="mb-2 inline-block rounded-full px-3 py-1 text-xs sm:text-sm md:text-base bg-primary text-white font-medium">
            {type}
          </span>

          {/* Deskripsi dengan ukuran dinamis */}
          <p className="text-primary text-xs sm:text-sm md:text-base text-justify mt-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
