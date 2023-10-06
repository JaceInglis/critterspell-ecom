import {
  Box,
  TextField,
  Tooltip,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  useTheme,
} from "@mui/material";
import React, { useState, useEffect } from "react";

const letters = {
  a: "/letters/Letters_small_A.png",
  b: {
    0: { name: "Purple", src: "/letters/Letters_small_B-Purple.png" },
    1: { name: "Pink", src: "/letters/Letters_small_B.png" },
  },
  c: "/letters/Letters_small_C.png",
  d: "/letters/Letters_small_D.png",
  e: {
    0: { name: "Brown", src: "/letters/Letters_small_E-Brown.png" },
    1: { name: "Yellow", src: "/letters/Letters_small_E.png" },
  },
  f: "/letters/Letters_small_F.png",
  g: "/letters/Letters_small_G.png",
  h: "/letters/Letters_small_H.png",
  i: {
    0: { name: "Brown", src: "/letters/Letters_small_I-Brown.png" },
    1: { name: "Green", src: "/letters/Letters_small_I.png" },
  },
  j: "/letters/Letters_small_J.png",
  k: "/letters/Letters_small_K.png",
  l: "/letters/Letters_small_L.png",
  m: "/letters/Letters_small_M.png",
  n: {
    0: { name: "Brown", src: "/letters/Letters_small_N-Brown.png" },
    1: { name: "Blue", src: "/letters/Letters_small_N.png" },
  },
  o: "/letters/Letters_small_O.png",
  p: "/letters/Letters_small_P.png",
  q: "/letters/Letters_small_Q.png",
  r: "/letters/Letters_small_R.png",
  s: "/letters/Letters_small_S.png",
  t: "/letters/Letters_small_T.png",
  u: "/letters/Letters_small_U.png",
  v: "/letters/Letters_small_V.png",
  w: "/letters/Letters_small_W.png",
  x: "/letters/Letters_small_X.png",
  y: "/letters/Letters_small_Y.png",
  z: "/letters/Letters_small_Z.png",
  " ": " ",
};

const TestName = () => {
  const [name, setName] = useState("Name");
  const [nameConfig, setNameConfig] = useState({
    n: { 0: { color: 0 } },
    e: { 3: { color: 0 } },
  });

  const theme = useTheme();

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    newName.split("").forEach((letter, index) => {
      if (letter === "b" || letter === "n" || letter === "e" || letter === "i") {
        handleAddConfig(letter, index);
      }
    });
  };

  const handleChangeColor = (letter, index) => (event) => {
    setNameConfig((prevState) => {
      const newConfig = { ...prevState[letter] };
      newConfig[index] = { color: event.target.value };
      return {
        ...prevState,
        [letter]: newConfig,
      };
    });
  };

  const handleAddConfig = (letter, index) => {
    setNameConfig((prevState) => ({
      ...prevState,
      [letter]: { ...prevState[letter], [index]: { color: 0 } },
    }));
  };

  useEffect(() => {
    console.log("config", nameConfig);
  }, [nameConfig]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      my={theme.spacing(8)}
    >
      <Typography variant="h1" gutterBottom>
        See how your childs name would look
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={handleNameChange}
      />
      <Box height={250} display="flex" justifyContent="center" mt={6}>
        {name
          .toLowerCase()
          .split("")
          .map((letter, index) => {
            if (letter === " ") {
              return <Box minWidthidth={50} width={50} key={index} />;
            } else if (letter === "b" || letter === "n" || letter === "e" || letter === "i") {
              return (
                <Box
                  key={index}
                  sx={{
                    width: "135px",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <FormControl
                    variant="standard"
                    fullWidth
                    sx={{
                      marginBottom: "-15px",
                      position: "absolute",
                      bottom: 0,
                      width: "60%",
                    }}
                  >
                    <InputLabel id={`select-label-${index}`}>Color</InputLabel>
                    <Select
                      labelId={`select-label-${index}`}
                      value={nameConfig[letter][index].color}
                      label="Color"
                      onChange={handleChangeColor(letter, index)}
                    >
                      <MenuItem value={0}>{letters[letter][0].name}</MenuItem>
                      <MenuItem value={1}>{letters[letter][1].name}</MenuItem>
                    </Select>
                  </FormControl>
                  <img
                    style={{
                      maxWidth: "210px",
                      maxHeight: "200px",
                    }}
                    src={letters[letter][nameConfig[letter][index].color].src}
                    alt={letter}
                  />
                </Box>
              );
            } else {
              return (
                <Box key={index}>
                  <img
                    style={{ maxWidth: "210px", maxHeight: "200px" }}
                    src={letters[letter]}
                    alt={letter}
                  />
                </Box>
              );
            }
          })}
      </Box>
    </Box>
  );
};

export default TestName;
