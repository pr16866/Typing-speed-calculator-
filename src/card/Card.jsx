import { makeStyles } from "@mui/styles";

// import AvTimerIcon from "@mui/icons-material/AvTimer";

import { Typography,Box } from "@mui/material";
const usestyle = makeStyles({
  card: {
    width: 250,
    height: 220,
    boxShadow: "0px 0px 12px rgb(255 255 255 / 48%)",
    background: "black",
    display: "inline-block",
    margin: "26px 49px 25px 19px",
    transitionDuration: "0.5s",
    borderRadius: 10,
    "&:hover": {
      transform: "scale(1.04)",
    },
  },
  card_inner: {
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",

    height: "100%",
  },
  timer: {
    color: "white",
    fontSize: [70, "!important"],
    padding: 0,
  },
  icon: {
    // fontSize: [45, "!important"],
    lineHeight: [0, "!important"],
    transform: "scale(1.9)",

    color: "white",

    boxShadow: "0px 0px 5px rgb(255, 255, 255,0.8)",
    marginTop: [17, "!important"],
  },
  wpm: {
    fontSize: 20,
    color: "rgb(215, 248, 233)",
    width: "100px",
    padding: " 8px",
    boxShadow: "0px 0px 5px rgb(255 255 255 / 70%)",
    marginBottom: [10, "!important"],
  },
});

export default function Speed_Card({wpm}) {
  const classes = usestyle();

    return (
      <>
        <Box className={classes.card}>
          <Box className={classes.card_inner}>
           <Typography className={classes.icon} style={{fontSize:45}}>
{wpm.icon}
             </Typography>
             
            <Typography className={classes.timer}>{wpm.val}</Typography>
            <Typography className={classes.wpm}>
              {wpm.des}
            </Typography>
          </Box>
        </Box>
      </>
    );
}
