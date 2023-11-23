import {
  Box,
  TextField,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  useTheme,
  CircularProgress,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";

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

const TestName = ({ onAddToCart, cartLoading, products }) => {
  const [name, setName] = useState("Name");
  const [nameConfig, setNameConfig] = useState({
    n: { 0: { color: 0 } },
    e: { 3: { color: 0 } },
  });

  const theme = useTheme();

  const imgStyle = {
    height: "auto",
    maxHeight: "200px",
    maxWidth: "100%",
  };

  const product = products[0];

  const handleNameChange = (event) => {
    const newName = event.target.value.replace(/[^a-zA-Z\s]/g, "");
    setName(newName);
    newName
      .toLowerCase()
      .split("")
      .forEach((letter, index) => {
        if (["b", "n", "e", "i"].includes(letter)) {
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

  const handleAddToCart = () => {
    onAddToCart(product.id, 1, { name: name, nameConfig: nameConfig });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      my={theme.spacing(8)}
    >
      <Typography variant="h1" gutterBottom textAlign={"center"}>
        Create your childs name art
      </Typography>
      <TextField
        label="Name"
        name="name"
        variant="outlined"
        value={name}
        onChange={handleNameChange}
      />
      <Box display="flex" justifyContent="center" mt={4} mb={2}>
        {name
          .toLowerCase()
          .split("")
          .map((letter, index) => {
            if (letter === " ") {
              return <Box minWidthidth={50} width={50} key={index} />;
            } else if (["b", "n", "e", "i"].includes(letter)) {
              return (
                <Box
                  key={index}
                  sx={{
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
                      position: "absolute",
                      bottom: 0,
                      marginBottom: "-50px",
                      width: "90%",
                    }}
                  >
                    <InputLabel id={`select-label-${index}`}>Color</InputLabel>
                    <Select
                      name="color"
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
                    style={imgStyle}
                    src={letters[letter][nameConfig[letter][index].color].src}
                    alt={letter}
                  />
                </Box>
              );
            } else {
              return (
                <Box key={index}>
                  <img style={imgStyle} src={letters[letter]} alt={letter} />
                </Box>
              );
            }
          })}
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mt: 8 }}>
        <Box display="flex" justifyContent="center" alignItems="center">
          {cartLoading ? (
            <CircularProgress />
          ) : (
            <Button onClick={handleAddToCart} variant="contained" size="large">
              Add to Cart
            </Button>
          )}
        </Box>
        {cartLoading !== null && cartLoading !== true ? (
          <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
            <Typography mr={1}>
              Item added to{" "}
              <Typography
                component={Link}
                to="/cart"
                color="primary"
                sx={{
                  textDecoration: "none",
                  ":hover": { textDecoration: "underline" },
                }}
              >
                your cart
              </Typography>
            </Typography>{" "}
            <CheckIcon color="success" />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default TestName;
