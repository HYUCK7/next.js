import axios from "axios";
import React, { useCallback } from 'react';
import Image from "next/image";

const Button = ({ onClick }) => (
  <button onClick={onClick}>현재 시간</button>
);

export default function Home() {
  const onClick = useCallback(() => {
    axios.get("http://localhost:5000/api/now").then((res) => {
      alert(JSON.stringify(res.data))
      var data = res.data;
      document.getElementById("timeZone").innerHTML = '<h1>시간: '+data.시간+'<h1>'
    });
  });
  return (<>
    <h1>HOME</h1>
    <Button onClick={onClick} />
    <div id="timeZone"></div>
    <body>
      <Image src={"/user/mm.gif"} width={300} height={300}/>
    </body>
    </>
  )
}