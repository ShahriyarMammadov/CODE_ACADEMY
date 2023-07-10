import React from "react";
import "./index.scss";
import { NavLink, Link } from "react-router-dom";
import { Button, Dropdown } from "antd";

const HeaderComp = () => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Shop Category
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Product Details
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Product Checkout
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Confirmation
        </a>
      ),
    },
    {
      key: "5",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Shopping Cart
        </a>
      ),
    },
  ];

  return (
    <header>
      <div className="logo">
        <Link to={"/"}>
          <img
            src="https://preview.colorlib.com/theme/aroma/img/logo.png"
            alt=""
          />
        </Link>
      </div>

      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft"
        >
          <Button>Shop</Button>
        </Dropdown>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft"
        >
          <Button>Blog</Button>
        </Dropdown>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft"
        >
          <Button>Pages</Button>
        </Dropdown>
        <NavLink to={"/addProductPage"}>Contact</NavLink>
      </nav>

      <div className="components">
        <i className="fa-solid fa-magnifying-glass"></i>

        <Link to={"/wishListPage"}>
          {" "}
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        <button>Buy Now</button>
      </div>
      <i class="fa-solid fa-bars"></i>
    </header>
  );
};

export default HeaderComp;
