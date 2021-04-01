import { Typography } from "@material-ui/core";
import { Card } from "@material-ui/core";
import React from "react";

const CardTrial = () => {
  const staticData = [
    {
      title: "sometitle",
      data: {
        value: "somevalue",
        Color: "red",
      },
      display: {
        fontName: "Maven Pro, sans-serif",
        fontSize: "10px",
      },
    },
    {
      title: "someothertitle",
      data: {
        value: "someothervalue",
        Color: "red",
      },
      display: {
        fontName: "Maven Pro, sans-serif",
        fontSize: "10px",
      },
    },
  ];

  const abcd = [0, 1, 2, 3, 4, 5];

  const { title } = staticData[0];
  const { value } = staticData[0].data;

  return (
    <div>
      <Card>
        <Typography
          style={{
            fontFamily: staticData[0].display.fontName,
          }}
        >
          {title}
        </Typography>
        <Typography style={{ color: staticData[0].data.Color }}>
          {value}
        </Typography>
      </Card>
      {staticData.map((a) => {
        return <Card>{a.title}</Card>;
      })}
    </div>
  );
};

/*
BoxDetail.defaultProps = {
  color: "#000000",
  font: "Maven Pro, sans-serif",
};
*/

export default CardTrial;
