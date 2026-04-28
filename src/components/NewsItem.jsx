import React from "react";

function NewsItem({ imgUrl, title, desc, url }) {
  const [visible, setVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const divRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative w-80 h-96 rounded-xl p-0.5 bg-white backdrop-blur-md text-gray-800 overflow-hidden shadow-lg m-2"
    >
      {visible && (
        <div
          className="pointer-events-none blur-xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 size-60 absolute z-0 transition-opacity duration-300"
          style={{ top: position.y - 120, left: position.x - 120 }}
        />
      )}

      <div className="relative z-10 bg-white p-6 mb-1.5 h-full w-full rounded-[10px] flex flex-col items-center justify-center text-center">
        <img
          src={
            imgUrl
              ? imgUrl
              : "https://image.cnbcfm.com/api/v1/image/108297154-1777062115103-gettyimages-2272297273-AFP_A8WW982.jpeg?v=1777062217&w=1920&h=1080"
          }
          alt="Profile Avatar"
          className="w-24 h-24 rounded-full shadow-md my-4"
        />
        <h2 className="text-2xl font-bold text-gray-600 mb-1">{title}...</h2>
        <p className="text-sm text-gray-500 mb-4 px-4">{desc}...</p>
        <a href={url} target="_blank">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
