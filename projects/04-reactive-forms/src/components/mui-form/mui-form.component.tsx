import { Box, TextField } from "@mui/material";

export const MuiForm = () => {
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <>
        <TextField
          id="outlined-name"
          label="Name"
        />
      </>
    </Box>
  );
};
