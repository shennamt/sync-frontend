import { Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

// import "emoji-mart/css/emoji-mart.css";

const EmojiPicker = (props) => {
  const [selectedEmoji, setSelectedEmoji] = useState();
  const [isShowPicker, setIsShowPicker] = useState(false);

  useEffect(() => {
    setSelectedEmoji(props.icon);
  }, [props.icon]);

  const selectEmoji = (e) => {
    const sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    const emoji = String.fromCodePoint(...codesArray);
    setSelectedEmoji(e.native);
    setIsShowPicker(false);
    props.onChange(emoji);
  };

  const showPicker = () => setIsShowPicker(!isShowPicker);

  return (
    <Box sx={{ position: "relative", width: "max-content" }}>
      <Button
        sx={{
          width: "150px"
        }}
        onClick={showPicker}
      >
        {!isShowPicker ? "Show Symbol" : "Hide Symbol"}
      </Button>
      {!isShowPicker && props.icon !== null ? selectedEmoji : ""}
      <Box
        sx={{
          display: isShowPicker ? "block" : "none",
          position: "absolute",
          top: "100%",
          zIndex: "9999"
        }}
      >
        <Picker
          data={data}
          theme="dark"
          onEmojiSelect={selectEmoji}
          previewPosition="none"
        />
      </Box>
    </Box>
  );
};

export default EmojiPicker;
