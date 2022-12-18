import React, { useState } from "react";
import Box from "../../Components/Box/Box";
import MyVerticallyCenteredModal from "../../Components/Modal/Modal";
import "./MainPage.css";
import { items } from "./utils";

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);

  const onClickBox = () => {
    setShowModal(true);
  };
  return (
    <div className="main-page">
      {items.map((item) => (
        <Box
          src={item.image}
          desc={item.description}
          title={item.title}
          onClickBox={onClickBox}
        />
      ))}

      <MyVerticallyCenteredModal
        show={showModal}
        onHide={() => setShowModal(false)}
      />
    </div>
  );
};

export default MainPage;
