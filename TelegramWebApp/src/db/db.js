import KitKatImg from "../assets/OvoKitKat.jpg"
import FerreroImg from "..assets/OvoFerreroRocher.jpg"
import MaracujaImg from "../assets/OvoMaracuja.jpg"
import KinderImg from "../assets/OvoKinderBueno.jpg"

export function getData(){
  return[
    {title: "KitKat", price:30.00, Image:KitKatImg},
    {title:"Ferrero",price:32.20, Image:FerreroImg},
    {title:"Maracuja", price:40.20, Image:MaracujaImg},
    {title:"Kinder", price:50.80, Image:KinderImg}
  ]
}