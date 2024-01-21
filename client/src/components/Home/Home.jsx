import Layout from "../../Layout/Layout";
import { FaAngleLeft, FaAngleRight, FaSearch, FaUser } from "react-icons/fa";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import SongBar from "../MasterBar/SongBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { userActor } from "../../states/Actors/UserActor";
import Navbar from "../Navbar";
import { useGlobalContext } from "../../states/Contet";
import Footer from "../Footer/Footer";

export const songs = [
  {
    id: Math.random() * Date.now(),
    title: "Celebration of varisu",
    artist: "Sachin Tyagi and Eijaz Khan",
    mp3: new Audio("/assets/mp3/Celebration-Of-varisu.mp3"),
    img: "/assets/celebration.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Pathu-Thala",
    artist: "A.R rahuman",
    mp3: new Audio("/assets/mp3/Pathu.mp3"),
    img: "/assets/Pathu-Thala.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "kavane.mp3",
    artist: "Sooraj Santhosh",
    mp3: new Audio("/assets/mp3/Kanave.mp3"),
    img: "/assets/Kanave.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Tum-Tum",
    artist: "visal",
    mp3: new Audio("/assets/mp3/Tum-Tum-Video-Song.mp3"),
    img: "/assets/Tum-Tum.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Varisu",
    artist: "Sachin Tyagi and Eijaz Khan",
    mp3: new Audio("/assets/mp3/Varisu.mp3"),
    img: "/assets/Varisu.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "VIKRAM-Porkand",
    artist: "kamal hassan",
    mp3: new Audio("/assets/mp3/VIKRAM-Porkanda.mp3"),
    img: "/assets/VIKRAM-Porkand.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Chalmaar-Devi",
    artist: "Tamannaah",
    mp3: new Audio("/assets/mp3/Chalmaar-Devi.mp3"),
    img: "/assets/Chalmaar - Devi .jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "LEO-Naa-Ready",
    artist: "Thalapathy-Vijay",
    mp3: new Audio("/assets/mp3/LEO-Naa-Ready.mp3 "),
    img: "/assets/LEO-Naa-Ready.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Naan-Gaali",
    artist: "Manikandan_Meetha-Raghunath",
    mp3: new Audio("/assets/mp3/Naan-Gaali.mp3"),
    img: "/assets/Naan Gaali .jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Railin-Oligal",
    artist: "Ashok-Selvan_Keerthi",
    mp3: new Audio("/assets/mp3/Railin-Oligal.mp3"),
    img: "/assets/Railin Oligal .jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title:
      "Selfie-Pulla-_-Full-Video-Song-_-Kaththi-_-Vijay_-Samantha-Ruth-Prabhu",
    artist: "Vijay_Samantha",
    mp3: new Audio("/assets/mp3/Selfie-Pulla.mp3"),
    img: "/assets/Selfie Pulla .jpeg",
  },
];

const Home = () => {
  const { getUser } = useGlobalContext();

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Layout>
      <Navbar />

      <div className="tertiary_bg ml-2 px-4 py-4 home ">
        <div className="flex justify-between mb-4 pt-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Focus
          </span>
          <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songs.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} />;
          })}
        </div>
        <div className="flex justify-between my-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Spotify List
          </span>
          <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songs.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} />;
          })}
        </div>
      </div>
      <Footer />
      <SongBar />
    </Layout>
  );
};

export default Home;
