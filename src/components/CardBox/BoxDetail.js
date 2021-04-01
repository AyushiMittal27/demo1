import { Typography } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import React from "react";

const BoxDetail = ({ details, color, font }) => {
  const { title } = details;
  const { value } = details.data;
  const { fontSize } = details.display.fontSize;

  return (
    <Card>
      <CardContent style={{ padding: "0px" }}>
        <Typography
          style={{
            fontFamily: font,
            backgroundColor: " #e6e6ff",
          }}
        >
          {title}
        </Typography>
      </CardContent>
      <CardContent style={{ padding: "25px" }}>
        <Typography style={{ color: color, fontSize: fontSize }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

BoxDetail.defaultProps = {
  color: "#000000",
  font: "Maven Pro, sans-serif",
};

export default BoxDetail;
