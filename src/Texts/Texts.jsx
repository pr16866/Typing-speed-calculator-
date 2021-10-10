import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { makeStyles } from '@mui/styles'
import React from 'react'
const useStyle = makeStyles({
  box: {
    color: "white",
    textAlign: ["center", "!important"],
    // display:"none",
        width: "70%",
    margin:"auto",
    boxShadow: "0px 0px 12px rgb(255 255 255 / 37%) ",
    borderRadius: 10,
  },
  typo: {
   

    color: "rgb(205, 255, 212)",

    wordSpacing: "3px",

    display: "inline-block",
    userSelect: "none",
  },
});
export default function Texts({ para }) {
  
  const classes = useStyle();
 return(
   
   <div>
     {
       para && (
        <Box className={classes.box}>
       <h2 >**Write the given text**</h2>
     
        <Typography className={classes.typo}>
          {para}
        </Typography>
        <h3>**Good Luck**</h3>
      </Box>
       )
     }
      
    </div >
     
    );
}

