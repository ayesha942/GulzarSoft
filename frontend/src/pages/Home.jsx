
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Home.css"; 

// const categories = [
//     {
//       name: "Skid Steers",
//       img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1055.png?v=16",
//       link: "/listings/for-sale/skid-steers/1055",
//     },
//     {
//       name: "Mini Excavators",
//       img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1033.png?v=16",
//       link: "/listings/for-sale/mini-up-to-12000-lbs-excavators/1033",
//     },
//     {
//       name: "Excavators",
//       img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1031.png?v=16",
//       link: "/listings/for-sale/excavators/1031",
//     },
//     {
//       name: "Forklifts",
//       img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1036.png?v=16",
//       link: "/listings/for-sale/forklifts-lifts/1036",
//     },
//     {
//       name: "Lifts",
//       img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1040.png?v=16",
//       link: "/listings/for-sale/lifts/1040",
//     },
//     {
//       name: "Dozers",
//       img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1025.png?v=16",
//       link: "/listings/for-sale/dozers/1025",
//     },
//     {
//       name: "Trenchers / Cable Plows",
//       img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1058.png?v=16",
//       link: "/listings/for-sale/trenchers-slash-cable-plows/1058",
//     },
//     {
//       name: "Cranes",
//       img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1015.png?v=16",
//       link: "/listings/for-sale/cranes/1015",
//     },
//     {
//       name: "Loader Backhoes",
//       img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1046.png?v=16",
//       link: "/listings/for-sale/loader-backhoes/1046",
//     },
//     {
//       name: "Wheel Loaders",
//       img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1060.png?v=16",
//       link: "/listings/for-sale/wheel-loaders/1060",
//     },
//     {
//       name: "Forestry Equipment",
//       img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1035.png?v=16",
//       link: "/listings/for-sale/forestry-equipment/1035",
//     },
//     {
//       name: "Drills",
//       img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1028.png?v=16",
//       link: "/listings/for-sale/drills/1028",
//     },
//     {
//       name: "Motor Graders",
//       img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1048.png?v=16",
//       link: "/listings/for-sale/motor-graders/1048",
//     },
//     {
//       name: "Sweepers / Broom Equipment",
//       img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1057.png?v=16",
//       link: "/listings/for-sale/sweepers-slash-broom-equipment/1057",
//     },
//     {
//       name: "Aggregate Equipment",
//       img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1001.png?v=16",
//       link: "/listings/for-sale/aggregate-equipment/1001",
//     },
//     {
//       name: "Telehandlers",
//       img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1038.png?v=16",
//       link: "/listings/for-sale/telehandlers-lifts/1038",
//     },
//     {
//       name: "Off-Highway Trucks",
//       img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1049.png?v=16",
//       link: "/listings/for-sale/off-highway-trucks/1049",
//     },
//     {
//       name: "Asphalt / Pavers / Concrete Equipment",
//       img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1007.png?v=16",    },
//     {
//       name: "Construction Attachments",
//       img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_81.png?v=16",
//     },
//     {
//       name: "Dismantled Machines",
//       img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_400002.png?v=16",
//     },
//     {
//       name: "Parts",
//       img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_400003.png?v=16",
//     },
//   ];

// const manufacturersData = {
//   "Skid Steers": ["Bobcat", "Caterpillar"],
//   "Mini Excavators": ["Komatsu", "Hitachi"],
//   "Excavators": ["Volvo", "Hyundai"],
//   "Forklifts": ["Toyota", "Clark"],
//   "Lifts": ["Genie", "JLG"],
//   "Dozers": ["John Deere", "Liebherr"],
// };

// const Home = () => {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedManufacturers, setSelectedManufacturers] = useState([]);
//   const navigate = useNavigate();

//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//     setSelectedManufacturers([]); 
//   };

//   const handleManufacturerChange = (e) => {
//     const value = e.target.value;
//     if (selectedManufacturers.includes(value)) {
//       setSelectedManufacturers(selectedManufacturers.filter((m) => m !== value));
//     } else {
//       setSelectedManufacturers([...selectedManufacturers, value]);
//     }
//   };

//   const handleSearch = () => {
//     navigate("/search", {
//       state: {
//         category: selectedCategory,
//         manufacturers: selectedManufacturers,
//       },
//     });
//   };

//   return (
//     <div className="home-container">
    
//       <section className="categories">
//         <h2>New & Used Construction Equipment</h2>
//         <div className="grid">
//           {categories.map((cat) => (
//             <div
//               key={cat.name}
//               className="category-card"
//               onClick={() => window.open(cat.link, "_blank")}
//             >
//               <img src={cat.img} alt={cat.name} />
//               <p>{cat.name}</p>
//             </div>
//           ))}
//         </div>
//       </section>

     
// <section className="filters">

//   <select value={selectedCategory} onChange={handleCategoryChange}>
//     <option value="">All Categories</option>
//     {categories.map((cat) => (
//       <option key={cat.name} value={cat.name}>
//         {cat.name}
//       </option>
//     ))}
//   </select>

//   <select
//     value={selectedManufacturers[0] || ""} 
//     onChange={(e) => setSelectedManufacturers([e.target.value])}
//     disabled={!selectedCategory}
//   >
//     <option value="">All Manufacturers</option>
//     {selectedCategory &&
//       manufacturersData[selectedCategory]?.map((manu) => (
//         <option key={manu} value={manu}>
//           {manu}
//         </option>
//       ))}
//   </select>
//   <select disabled>
//     <option>All Models</option>
//   </select>

  
//   <button
//     disabled={!selectedCategory}
//     onClick={handleSearch}
//     className="search-btn"
//   >
//     Search
//   </button>
// </section>


//     </div>
//   );
// };

// export default Home;



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedManufacturers, setSelectedManufacturers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/categories"); // backend API
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedManufacturers([]);
  };

  const handleManufacturerChange = (e) => {
    const value = e.target.value;
    if (selectedManufacturers.includes(value)) {
      setSelectedManufacturers(selectedManufacturers.filter((m) => m !== value));
    } else {
      setSelectedManufacturers([...selectedManufacturers, value]);
    }
  };

  const handleSearch = () => {
    navigate("/search", {
      state: {
        category: selectedCategory,
        manufacturers: selectedManufacturers,
      },
    });
  };

  const currentManufacturers =
    categories.find((cat) => cat.name === selectedCategory)?.manufacturers || [];

  return (
    <div className="home-container">
      <section className="categories">
        <h2>New & Used Construction Equipment</h2>
        <div className="grid">
          {categories.map((cat) => (
            <div
              key={cat._id}
              className="category-card"
              onClick={() => window.open(cat.link, "_blank")}
            >
              <img src={cat.img} alt={cat.name} />
              <p>{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="filters">

        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
        <select
          value={selectedManufacturers[0] || ""}
          onChange={(e) => setSelectedManufacturers([e.target.value])}
          disabled={!selectedCategory}
        >
          <option value="">All Manufacturers</option>
          {currentManufacturers.map((manu) => (
            <option key={manu._id} value={manu.name}>
              {manu.name}
            </option>
          ))}
        </select>

        <select disabled>
          <option>All Models</option>
        </select>

        <button
          disabled={!selectedCategory}
          onClick={handleSearch}
          className="search-btn"
        >
          Search
        </button>
      </section>
    </div>
  );
};

export default Home;
