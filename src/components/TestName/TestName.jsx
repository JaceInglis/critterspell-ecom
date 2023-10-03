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
} from "@mui/material";
import React, { useState } from "react";

const letters = {
  a: "/letters/Letters_small_A.png",
  b: {
    1: "/letters/Letters_small_B-Purple.png",
    2: "/letters/Letters_small_B.png",
  },
  c: "/letters/Letters_small_C.png",
  d: "/letters/Letters_small_D.png",
  e: "/letters/Letters_small_E.png",
  f: "/letters/Letters_small_F.png",
  g: "/letters/Letters_small_G.png",
  h: "/letters/Letters_small_H.png",
  i: "/letters/Letters_small_I.png",
  j: "/letters/Letters_small_J.png",
  k: "/letters/Letters_small_K.png",
  l: "/letters/Letters_small_L.png",
  m: "/letters/Letters_small_M.png",
  n: "/letters/Letters_small_N.png",
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
    b: [{ color: 1 }],
  });

  console.log(nameConfig);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleChangeColor = (letter, index) => (event) => {
    setNameConfig((prevState) => {
      const newConfig = [...prevState[letter]]; // Copy the array for the specific letter
      newConfig[index] = { color: event.target.value }; // Update the color at the specified index
      return {
        ...prevState,
        [letter]: newConfig,
      };
    });
  };

  console.log(nameConfig)

  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%">
      <Typography variant="h1" gutterBottom>
        See how your childs name would look
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={handleNameChange}
      />
      <Box height={200} display="flex" justifyContent="center" mt={6}>
        {name
          .toLowerCase()
          .split("")
          .map((letter, index) => {
            if (letter === " ") {
              return <Box minWidthidth={50} width={50} />;
            } else if (letter === "b") {
              return (
                <Box
                  sx={{
                    width: "135px",
                    position: "relative",
                  }}
                >
                  <FormControl
                    fullWidth
                    sx={{
                      marginBottom: "-70px",
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                    }}
                  >
                    <InputLabel id={`select-label-${index}`}>Color</InputLabel>
                    <Select
                      labelId={`select-label-${index}`}
                      value={nameConfig[letter] && nameConfig[letter][index] ? nameConfig[letter][index].color : 1}
                      label="Color"
                      onChange={handleChangeColor(letter)}
                    >
                      <MenuItem value={1}>Purple</MenuItem>
                      <MenuItem value={2}>Pink</MenuItem>
                    </Select>
                  </FormControl>

                  <img
                    style={{
                      maxWidth: "210px",
                      maxHeight: "200px",
                    }}
                    src={
                      letters[letter][nameConfig[letter][index]['color']]
                    }
                    alt={letter}
                  />
                </Box>
              );
            } else {
              return (
                <Box>
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
