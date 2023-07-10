import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavoritesAction } from "../../redux/action/favorites.actions";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { Table, Button, Input, Space } from "antd";

const CustomerList = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const [customers, setCustomers] = useState([]);
  const favorites = useSelector((state) => state.favoritesReducer);

  const dispatch = useDispatch();

  const getData = async () => {
    const response = await axios("https://northwind.vercel.app/api/customers");
    setCustomers(await response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAddToFavorites = (customer) => {
    if (!favorites.find((q) => q.id === customer.id)) {
      dispatch(addToFavoritesAction(customer));
    } else {
      window.alert("Already Favorited");
    }
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "CompanyName",
      dataIndex: "companyName",
      sorter: (a, b) => (a.companyName > b.companyName ? 1 : -1),
      ...getColumnSearchProps("companyName"),
    },
    {
      title: "Contact Title",
      dataIndex: "contactTitle",
      ...getColumnSearchProps("contactTitle"),
    },
    {
      title: "Adress",
      dataIndex: "address",
      render: (el) => `${el.city}, ${el.country}`,
    },
    {
      title: "Add To Favorites",
      render: (obj) => (
        <Button
          type={!favorites.find((q) => q.id === obj.id) ? "ghost " : "primary"}
          onClick={() => handleAddToFavorites(obj)}
        >
          {!favorites.find((q) => q.id === obj.id)
            ? "Add to Favorites"
            : "Favorited Already"}
        </Button>
      ),
    },
  ];

  return <Table columns={columns} dataSource={customers} rowKey={"id"} />;
};

export default CustomerList;
