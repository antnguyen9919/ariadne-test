import React from "react";
import ReactPlayer from "react-player";
import cs from "../styles/Tutorials.module.css";
import { links } from "../sections/tutorial-links";
import Link from "next/link";
import { useState } from "react";
const Tutorials = () => {
  const [video, setVideo] = useState(0);

  const videoHandler = (e) => {
    setVideo(e.target.id);
  };
  return (
    <div className={cs.container}>
      <div className='flex items-center justify-center'>
        <Link href='/contact'>
          <a className='text-2xl  text-blue-600 hover:underline'>Contact</a>
        </Link>
      </div>
      <div className={cs.flexbox}>
        <div className={cs.vidcell}>
          <ReactPlayer
            // style={{ position: "absolute" }}
            url={links[video].url}
            controls
            width='100%'
            height='100%'
            stopOnUnmount={true}
          />
        </div>

        <div className={cs.bar}>
          <div className='drop-shadow-md'>
            <h1 className='text-center mb-2'>Dashboard Tutorial</h1>
          </div>
          <ol type='1'>
            {links.map((link) => (
              <li
                className={
                  video == link.id
                    ? "bg-slate-200 font-bold"
                    : "hover:bg-slate-200"
                }
                key={link.id}
              >
                {link.id + 1}. <span> </span>
                <button onClick={(e) => videoHandler(e)}>
                  <p id={link.id}> {link.title}</p>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
