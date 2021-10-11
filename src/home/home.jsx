import React,{useState} from 'react'
import Card from "../card/Card";
import { onemin, threemin } from "../constant/constant";
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TimerIcon from "@mui/icons-material/Timer";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import TimerOffIcon from "@mui/icons-material/TimerOff";

import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import TextaAea from '../TextArea/TextaAea';
import Texts from '../Texts/Texts';

const usestyle = makeStyles({
  box: {
    textAlign:"center"
  }
});
;
export default function Home() {
  const classes = usestyle();
  const [para, setpara] = useState();
  const [textarea_val, settextarea_val] = useState();
  const [flag, setflag] = useState();
  const [wpm1, setwpm1] = useState({
    icon: <AvTimerIcon />,

    val: "00",
    des: "Wpm",
  });
  const [wpm2, setwpm2] = useState({
    icon: <AvTimerIcon />,
    val: "00",
    des: "Cpm",
  });
  const [wpm3, setwpm3] = useState({
    icon: <AvTimerIcon />,
    val: "0%",
    des: "Accuaracy",
  });
  const [wpm4, setwpm4] = useState({
    icon: <TimerOffIcon />,
    val: "00",
    des: "Time Left",
  });

  // |||||||||||||||| for 1 min test  ||||||||||||
  const min1 = () => {
    setwpm1({ icon: <AvTimerIcon />, val: "00", des: "Wpm" });
    setwpm2({ icon: <AvTimerIcon />, val: "00", des: "Cpm" });
    setwpm3({ icon: <AvTimerIcon />, val: "0%", des: "Accuaracy" });
    setpara(onemin[Math.floor(Math.random() * onemin.length)]);
    fun_for_1min_timer();
  };

  const fun_for_1min_timer = () => {
    let data = 60;
    let var1 = setInterval(() => {
      if (data >= 0) {
        setwpm4({ ...wpm4, val: data>=10?data:`0${data}`, icon: <TimerIcon /> });
        setflag(true);
      } else {
        setwpm4({ ...wpm4, val: "00", icon: <TimerOffIcon /> });

        setflag(false);
        clearInterval(var1);
        //  wpm_length(textarea_val);
      }
      data = data - 1;
    }, 1000);
  };
  const wpm_length = (data) => {
    let wpm = data.match(/[a-z]+/gi).length;

    let cpm = data.match(/[a-z]/gi).length;

    let accuracy1 = accuracy();
    console.log(accuracy1);
    setwpm3({ ...wpm3, val: `${accuracy1}%`, icon: <FileDownloadDoneIcon /> });
    setwpm2({
      ...wpm2,
      val: cpm >= 10 ? cpm : `0${cpm}`,
      icon: <FileDownloadDoneIcon />,
    });
    setwpm1({
      ...wpm1,
      val: wpm >= 10 ? wpm : `0${wpm}`,
      icon: <FileDownloadDoneIcon />,
    });
    
    setflag("");
    setpara("");
    settextarea_val("");
  };
  const accuracy = () => {
    let correct = 0;
   
    let var1 = Array.from(textarea_val.match(/[a-z]+/gi));
    let var2 = Array.from(para.match(/[a-z]+/gi));
    
    for (let i = 0; i < var1.length; i++) {
      if (var1[i] === var2[i]) {
        correct++;
      }
    }
    
    let percentage = (correct / var1.length) * 100;
    return Math.floor(percentage);
  };
  if (flag === false && textarea_val) {
    wpm_length(textarea_val);
  }

  //|||||||||| for 1 min test end|||||||||||||

  //||||||||||  3 min test start|||||||||||||
  const min3 = () => {
    setwpm1({ icon: <AvTimerIcon />, val: "00", des: "Wpm" });
    setwpm2({ icon: <AvTimerIcon />, val: "00", des: "Cpm" });
    setwpm3({ icon: <AvTimerIcon />, val: "0%", des: "Accuaracy" });
    setpara(threemin[Math.floor(Math.random() * onemin.length)]);
    fun_for_3min_timer();
  };

  const fun_for_3min_timer = () => {
    let seconds = 60;
    let minutes = 3;
    let var1 = setInterval(() => {
      if (minutes >= 0) {
        setwpm4({
          ...wpm4,
          val: `0${minutes}:${seconds >= 10 ? seconds : "0" + seconds}`,
          icon: <TimerIcon />,
        });
        setflag(true);
      } else {
        setwpm4({ ...wpm4, val: "00", icon: <TimerOffIcon /> });

        setflag(false);
        clearInterval(var1);
        //  wpm_length(textarea_val);
      }
      seconds = seconds === 0 ? 60 : seconds - 1;
      minutes = seconds === 0 ? minutes - 1 : minutes;
    }, 1000);
  };

  //|||||||||| 3 min test end|||||||||||||

  
  const textarea = (e) => {
    if (flag) {
      settextarea_val(e.target.value);
    }
  };
  const min = {
    min1: min1,
    min3: min3,
   
    textarea: textarea,
    flag: flag,
    textarea_value: textarea_val,
  };


//   const fun1 = () => {
//   //  let var1 = Array.from(textarea_val);
//     let var2 = Array.from(onemin[0].match(/[a-z ,+`]+/gi));
//     console.log(var2);
// }
  //  fun1();
  return (
    <div>
      <Box className={classes.box}>
        <h1 style={{color:"white",paddingBottom:10}}>Typing Cpeed Calculator</h1>
        <Card wpm={wpm1} style={{ display: "inline-block" }} />
        <Card wpm={wpm2} style={{ display: "inline-block" }} />
        <Card wpm={wpm3} style={{ display: "inline-block" }} />
        <Card wpm={wpm4} style={{ display: "inline-block" }} />
      </Box>
      <Texts para={para} />
      <Box>
        <TextaAea min={min} />
      </Box>
    </div>
  );
}
