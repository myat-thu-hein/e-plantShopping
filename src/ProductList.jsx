import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import CartItem from "./CartItem";
import "./ProductList.css";

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart?.items ?? []
  );

  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          id: 1,
          name: "Snake Plant",
          image:
            "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description:
            "Produces oxygen at night and improves indoor air quality.",
          cost: "$15",
        },
        {
          id: 2,
          name: "Spider Plant",
          image:
            "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description:
            "Filters formaldehyde and xylene from the air.",
          cost: "$12",
        },
        {
          id: 3,
          name: "Peace Lily",
          image:
            "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
          description:
            "Removes mold spores and helps purify indoor air.",
          cost: "$18",
        },
        {
          id: 4,
          name: "Boston Fern",
          image:
            "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
          description:
            "Adds humidity and helps remove toxins from the air.",
          cost: "$20",
        },
        {
          id: 5,
          name: "Rubber Plant",
          image:
            "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
          description:
            "An easy-care plant that helps remove airborne toxins.",
          cost: "$17",
        },
        {
          id: 6,
          name: "Aloe Vera",
          image:
            "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
          description:
            "Purifies the air and provides soothing gel for skin.",
          cost: "$14",
        },
      ],
    },
    {
      category: "Aromatic Plants",
      plants: [
        {
          id: 7,
          name: "Lavender",
          image:
            "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop",
          description:
            "A calming aromatic plant commonly used in aromatherapy.",
          cost: "$20",
        },
        {
          id: 8,
          name: "Jasmine",
          image:
            "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop",
          description:
            "Produces a sweet fragrance that promotes relaxation.",
          cost: "$18",
        },
        {
          id: 9,
          name: "Rosemary",
          image:
            "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
          description:
            "An invigorating aromatic herb often used in cooking.",
          cost: "$15",
        },
        {
          id: 10,
          name: "Mint",
          image:
            "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
          description:
            "Has a refreshing aroma and is commonly used in drinks.",
          cost: "$12",
        },
        {
          id: 11,
          name: "Lemon Balm",
          image:
            "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
          description:
            "Its citrus scent may help reduce stress and promote sleep.",
          cost: "$14",
        },
        {
          id: 12,
          name: "Hyacinth",
          image:
            "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
          description:
            "A colorful flowering plant with a powerful fragrance.",
          cost: "$22",
        },
      ],
    },
    {
      category: "Medicinal Plants",
      plants: [
        {
          id: 13,
          name: "Echinacea",
          image:
            "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
          description:
            "Traditionally used to support the immune system.",
          cost: "$16",
        },
        {
          id: 14,
          name: "Peppermint",
          image:
            "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
          description:
            "Commonly used to relieve digestive discomfort.",
          cost: "$13",
        },
        {
          id: 15,
          name: "Chamomile",
          image:
            "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
          description:
            "A soothing herb commonly used to support restful sleep.",
          cost: "$15",
        },
        {
          id: 16,
          name: "Calendula",
          image:
            "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
          description:
            "Traditionally used to soothe minor skin irritation.",
          cost: "$12",
        },
        {
          id: 17,
          name: "Basil",
          image:
            "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
          description:
            "A useful culinary herb with a pleasant aroma.",
          cost: "$9",
        },
        {
          id: 18,
          name: "Oregano",
          image:
            "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
          description:
            "An aromatic herb commonly used in cooking.",
          cost: "$10",
        },
      ],
    },
  ];

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));

    setAddedToCart((previousState) => ({
      ...previousState,
      [plant.id]: true,
    }));
  };

  const handleHomeClick = (event) => {
    event.preventDefault();

    if (onHomeClick) {
      onHomeClick();
    }
  };

  const handlePlantsClick = (event) => {
    event.preventDefault();
    setShowCart(false);
  };

  const handleCartClick = (event) => {
    event.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = (event) => {
    if (event) {
      event.preventDefault();
    }

    setShowCart(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="luxury">
          <img
            src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
            alt="Paradise Nursery logo"
          />

          <a href="/" onClick={handleHomeClick}>
            <div>
              <h3>Paradise Nursery</h3>
              <i>Where Green Meets Serenity</i>
            </div>
          </a>
        </div>

        <div className="nav-links">
          <a href="/" onClick={handleHomeClick}>
            Home
          </a>

          <a href="#plants" onClick={handlePlantsClick}>
            Plants
          </a>

          <a
            href="#cart"
            onClick={handleCartClick}
            className="cart-link"
            aria-label={`Shopping cart with ${totalQuantity} plants`}
          >
            <div className="cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                height="68"
                width="68"
                aria-hidden="true"
              >
                <rect
                  width="256"
                  height="256"
                  fill="none"
                />

                <circle cx="80" cy="216" r="12" />
                <circle cx="184" cy="216" r="12" />

                <path
                  d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                  fill="none"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8"
                />
              </svg>

              <span className="cart-count">
                {totalQuantity}
              </span>
            </div>
          </a>
        </div>
      </nav>

      {!showCart ? (
        <main className="product-grid" id="plants">
          {plantsArray.map((category) => (
            <section
              className="plant-category"
              key={category.category}
            >
              <h1 className="category-title">
                {category.category}
              </h1>

              <div className="product-list">
                {category.plants.map((plant) => {
                  const productIsInCart = cartItems.some(
                    (item) => item.name === plant.name
                  );

                  const buttonIsDisabled =
                    Boolean(addedToCart[plant.id]) &&
                    productIsInCart;

                  return (
                    <article
                      className="product-card"
                      key={plant.id}
                    >
                      <img
                        className="product-image"
                        src={plant.image}
                        alt={plant.name}
                      />

                      <h2 className="product-title">
                        {plant.name}
                      </h2>

                      <p className="product-description">
                        {plant.description}
                      </p>

                      <p className="product-cost">
                        {plant.cost}
                      </p>

                      <button
                        type="button"
                        className="product-button"
                        onClick={() =>
                          handleAddToCart(plant)
                        }
                        disabled={buttonIsDisabled}
                      >
                        {buttonIsDisabled
                          ? "Added to Cart"
                          : "Add to Cart"}
                      </button>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </main>
      ) : (
        <CartItem
          onContinueShopping={handleContinueShopping}
        />
      )}
    </div>
  );
}

export default ProductList;
