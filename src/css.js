const string=`/*首先来个背景*/
body {
  background: #db4d56;
  background-image: -webkit-radial-gradient(
    center,
    ellipse cover,
    #db4d56 0%,
    #6d0110 100%
  );
}
.container {
  max-width: 800px;
  margin: auto;
  height: 500px;
}
/*再画一个黑色的圆*/
.head {
  position: relative;
  top: 40%;
  transform: translateY(-50%);
  background-color: black;
  height: 200px;
  width: 190px;
  margin: auto;
  border-radius: 50%;
}
.head .ears {
  position: absolute;
  height: 120px;
  width: 110px;
  border-radius: 50%;
  background: #000;
  top: -70px;
}
/*左耳朵*/
.head .ears.left {
  left: -55px;
  transform: rotate(45deg);
}
/*右耳朵*/
.head .ears.right {
  right: -55px;
  transform: rotate(-45deg);
}
.ears .highlight {
  position: absolute;
  height: 85%;
  width: 80%;
  border-radius: 50%;
  overflow: hidden;
}
.left .highlight {
  top: 10px;
  left: 13px;
  box-shadow: -10px 0px 10px -5px rgba(255, 255, 255, 0.4);
}
.right .highlight {
  top: 10px;
  right: 13px;
  box-shadow: 0px -10px 10px -5px rgba(255, 255, 255, 0.4);
}
/*下部分的脸性*/
.head .mouth-border {
  position: absolute;
  width: 200px;
  left: 50%;
  margin-left: -100px;
  bottom: -10px;
  height: 150px;
  background: #000;
  border-radius: 50%;
  z-index: 2;
}
/*现在来画脸啦*/
.mouth-border .eye-patch {
  position: absolute;
  top: -40px;
  background-color: #f2e1cf;
  height: 140px;
  width: 90px;
  border-radius: 50%;
}
.mouth-border .eye-patch.left {
  left: 20px;
  transform: rotate(5deg);
  box-shadow: inset 5px 10px 15px -5px rgba(255, 255, 255, 0.5);
}
.mouth-border .eye-patch.right {
  right: 20px;
  transform: rotate(-5deg);
  box-shadow: inset 0px 10px 15px -5px rgba(255, 255, 255, 0.5);
}
/*这不难看出来是眼睛吧*/
.mouth-border .eye {
  position: absolute;
  top: -10px;
  background-color: white;
  border: 2px solid #444444;
  border-top: 4px solid #444444;
  height: 70px;
  width: 22px;
  border-radius: 50%;
  z-index: 26;
}
.mouth-border .eye.left {
  right: 70px;
  transform: rotate(2deg);
}
.mouth-border .eye.right {
  left: 70px;
  transform: rotate(-2deg);
}
/*两个小眼球*/
.mouth-border .eye .eyeball {
  position: absolute;
  bottom: 6px;
  height: 25px;
  width: 14px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #000000 0%, #444444 100%);
}
.mouth-border .eye.right .eyeball {
  right: 1px;
}
.mouth-border .eye .eyeball .highlight {
  position: relative;
  top: 7px;
  left: 4px;
  height: 2px;
  width: 0;
  border-radius: 50%;
  box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 0.75);
}

.mouth-border .nose-ridge {
  position: absolute;
  width: 70px;
  left: 50%;
  margin-left: -37px;
  top: 53px;
  height: 30px;
  border: 2px solid black;
  background-color: #f2e1cf;
  border-radius: 50%;
  z-index: 27;
  box-shadow: inset 0 2px 5px 1px rgba(255, 255, 255, 0.5),
    0px -4px 5px -2px rgba(0, 0, 0, 0.3);
}
/*这是脸的下部分*/
.mouth-border .mouth-patch {
  position: absolute;
  bottom: 10px;
  height: 75px;
  width: 135px;
  border-radius: 50%;
  z-index: 28;
  background: linear-gradient(to bottom, #f2e1cf 0%, #f2e1cf 60%, #c1b4a5 100%);
}
.mouth-border .mouth-patch.left {
  left: 2px;
  transform: rotate(25deg);
}
.mouth-border .mouth-patch.right {
  right: 2px;
  transform: rotate(-25deg);
}
.mouth-border .chin-white {
  position: absolute;
  bottom: -10px;
  width: 80px;
  left: 50%;
  margin-left: -40px;
  height: 80px;
  border-radius: 50%;
  background-color: #c1b4a5;
}
/*这是小鼻子*/
.head .nose {
  position: absolute;
  top: 120px;
  width: 65px;
  left: 50%;
  margin-left: -32.5px;
  height: 35px;
  border-radius: 50%;
  background: black;
  z-index: 32;
  overflow: hidden;
  box-shadow: 8px 8px 5px 1px rgba(0, 0, 0, 0.2);
}
.head .nose::before {
  content: "";
  position: absolute;
  top: 15px;
  left: 15px;
  height: 0px;
  width: 10px;
  background-color: white;
  border-radius: 50%;
  overflow: hidden;
  transform: rotate(-15deg);
}
/*怎么能少了微笑*/
.head .lips {
  position: absolute;
  top: 93px;
  width: 150px;
  left: 50%;
  margin-left: -75px;
  height: 90px;
  border-radius: 50%;
  border-bottom: 5px solid black;
  z-index: 25;
}
.head .corners {
  position: absolute;
  top: 138px;
  height: 15px;
  width: 20px;
  border-radius: 50%;
  border-top: 2px solid black;
  z-index: 30;
  box-shadow: inset 0px 5px 8px -5px rgba(0, 0, 0, 0.75),
    0px -9px 10px 0px rgba(255, 255, 255, 0.5);
}
.head .corners.left {
  left: 15px;
  transform: rotate(-45deg);
}
.head .corners.right {
  right: 15px;
  transform: rotate(45deg);
}
/*再来个大嘴巴差不多要画完咯*/
.head .mouth {
  position: absolute;
  top: 155px;
  width: 55px;
  left: 50%;
  margin-left: -27.5px;
  height: 58px;
  background: black;
  border-radius: 50%;
  z-index: 30;
}
.head .mouth::before,
.head .mouth::after {
  position: absolute;
  top: 23px;
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
}
.head .mouth::before {
  left: -20px;
  border-width: 0 28px 15px 0;
  border-color: transparent black transparent transparent;
  transform: rotate(20deg);
}
.head .mouth::after {
  right: -20px;
  border-width: 15px 28px 0 0;
  border-color: black transparent transparent transparent;
  transform: rotate(-20deg);
}
.mouth .hole {
  position: absolute;
  bottom: 0;
  border: 3px solid black;
  height: 50px;
  width: 49px;
  border-radius: 50%;
  overflow: hidden;
}
/*还有舌头别忘了*/
.hole .tongue {
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  bottom: -10px;
  background: linear-gradient(
    to bottom,
    #6d0019 0%,
    #6d0019 20%,
    #c66c76 50%,
    #c66c76 99%
  );
}
.hole .tongue.left {
  left: 5px;
}
.hole .tongue.right {
  right: 5px;
  border-top: 5px solid black;
}
/*挡住大大的嘴巴*/
.mouth-hider {
  position: relative;
  top: 144px;
  width: 100px;
  left: 50%;
  margin-left: -50px;
  height: 35px;
  border-radius: 50%;
  z-index: 31;
  background-color: #f2e1cf;
  box-shadow: inset 0px -5px 5px -5px rgba(0, 0, 0, 0.75);
}
/*再完善一下*/
.head .chin-border {
  position: absolute;
  bottom: -24px;
  width: 90px;
  left: 50%;
  margin-left: -45px;
  background: black;
  height: 90px;
  border-radius: 50%;
}
/*终于画完啦~~*/
`
export default string