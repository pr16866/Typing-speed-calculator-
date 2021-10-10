import React from 'react'
import { Box } from '@mui/system';
import { TextareaAutosize,Button } from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  TextareaAutosize: {
    width: "100%",
    color: "white",
    background: "black",
    outline: "none",
    border: "none",
    fontSize: 21,
    boxShadow: "0px 0px 12px rgb(255 255 255 / 37%) ",
    borderRadius: 10,
  },
    main_box: {
        width: "60%",
    marginTop: 50,
    margin:"auto"
  },
  button: {
    width: "100%",
    display: "flex",
    alignItems: "center",
      justifyContent: "space-around",
    marginTop:20,
  },
});
export default function TextaAea({min}) {
    const classes = useStyle();

    return (
      <div>
        <Box className={classes.main_box} >
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Please start writing...."
            minRows={8}
                    className={classes.TextareaAutosize}
                    onChange={min.textarea}
                    value={min.flag?min.textarea_value:""}
          />
          <Box className={classes.button}>
            <Button variant="contained" onClick={min.min1}>
              Start 1Min test
            </Button>
            <Button variant="contained" onClick={min.min3}>
              Start 3Min test
            </Button>
            
          </Box>
        </Box>
      </div>
    );
}
