// import { FaCartPlus } from "react-icons/fa";

// const products = [
//   {
//     name: "Gearbox Custom",
//     image: "/images/gearbox.jpg",
//     description:
//       "Gearbox berkualitas tinggi untuk alat berat dan mesin industri.",
//     price: 1500000,
//   },
//   {
//     name: "Sprocket Baja",
//     image: "/images/sprocket.jpg",
//     description: "Sprocket tahan lama untuk kebutuhan industri.",
//     price: 750000,
//   },
//   {
//     name: "Komponen Mesin",
//     image: "/images/mesin.jpg",
//     description: "Komponen mesin custom untuk kebutuhan pabrik.",
//     price: 950000,
//   },
// ];

// const formatRupiah = (number) =>
//   new Intl.NumberFormat("id-ID", {
//     style: "currency",
//     currency: "IDR",
//     minimumFractionDigits: 0,
//   }).format(number);

// const ProductList = () => {
//   return (
//     <section className="bg-gray-50 py-20 px-4">
//       <div className="max-w-screen-xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12">
//           Produk yang Bisa Kami Buatkan
//         </h2>

//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//           {products.map((product, idx) => (
//             <div
//               key={idx}
//               className="bg-white shadow-md hover:shadow-lg transition rounded-xl overflow-hidden"
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-5">
//                 <h3 className="text-xl font-semibold text-primary mb-2">
//                   {product.name}
//                 </h3>
//                 <p className="text-sm text-gray-600 mb-4">
//                   {product.description}
//                 </p>
//                 <div className="flex justify-between items-center">
//                   <span className="text-lg font-bold text-gray-800">
//                     {formatRupiah(product.price)}
//                   </span>
//                   <button className="bg-primary text-white p-2 rounded-full hover:bg-opacity-90 transition">
//                     <FaCartPlus />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductList;
