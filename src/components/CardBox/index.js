import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import BoxDetail from "./BoxDetail";

const CardBox = () => {
  const staticData = [
    {
      title: "sometitle",
      data: {
        value: "somevalue",
        Color: "#ffgghh",
      },
      display: {
        fontName: "Maven Pro, sans-serif",
        fontSize: "10px",
      },
    },
    {
      title: "someOthertitle",
      data: {
        value: "someOthervalue",
        Color: "#ffcccc",
      },
      display: {
        fontName: "Maven Pro, sans-serif",
        fontSize: "15px",
      },
    },
  ];

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {staticData.map((obj, i) => {
          return (
            <BoxDetail
              key={i}
              color={obj.data.Color}
              font={obj.display.fontName}
              details={obj}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default CardBox;
