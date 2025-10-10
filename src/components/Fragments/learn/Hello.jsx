import { useEffect } from "react";

export default function Hello() {
  useEffect(() => {
    console.log("Komponen dirender!");
  });

  return <h1>Hello World!</h1>;
}
