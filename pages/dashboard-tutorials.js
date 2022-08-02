import React from "react";
import ReactPlayer from "react-player";
import cs from "../styles/Tutorials.module.css";
import { links } from "../sections/tutorial-links";
import Link from "next/link";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
const Tutorials = () => {
  const [video, setVideo] = useState(0);
  const [collapse, setCollapse] = useState(false);

  const videoHandler = (e) => {
    setVideo(e.target.id);
  };
  return (
    <div className={cs.container}>
      <div className={cs.flexbox}>
        <div className={cs.vidcell}>
          <ReactPlayer
            // style={{ position: "absolute" }}
            className={cs.player}
            url={links[video].url}
            controls
            width='100%'
            height='100%'
            stopOnUnmount={true}
          />
        </div>
        <button
          className='absolute left-2/4 bottom-0'
          onClick={() => {
            setCollapse(false);
          }}
        >
          <img
            className='hover:scale-110 bg-black rounded-full opacity-75 '
            src='https://media0.giphy.com/media/h0uQb9D6xz1U6QAGyP/giphy.gif?cid=6c09b9524agwpwgl8rkskwl5zdywwo49f86pzl753ap0uyuo&rid=giphy.gif&ct=s'
            height={40}
            width='40px'
          />
        </button>
        <div className={collapse ? cs.bar_close : cs.bar_open}>
          <div className='flex justify-center '>
            <button
              onClick={() => {
                setCollapse(true);
              }}
            >
              <img
                className='rotate-180 hover:scale-110 bg-black rounded-full opacity-75 '
                src='https://media0.giphy.com/media/h0uQb9D6xz1U6QAGyP/giphy.gif?cid=6c09b9524agwpwgl8rkskwl5zdywwo49f86pzl753ap0uyuo&rid=giphy.gif&ct=s'
                height={40}
                width='40px'
              />
            </button>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2  gap-2 md:justify-items-start md:px-8'>
            {links.map((link) => (
              <button
                id={link.id}
                className={
                  video == link.id
                    ? "font-bold text-green-500 "
                    : "hover:font-bold"
                }
                key={link.id}
                onClick={(e) => videoHandler(e)}
              >
                {link.id + 1}. <span id={link.id}>{link.title} </span>
              </button>
            ))}

            <div className='flex items-center justify-center'>
              <Link href='/contact'>
                <a className='text-2xl  text-blue-500 hover:underline'>
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
