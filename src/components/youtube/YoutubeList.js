import React from "react";
import YoutubeItem from "./YoutubeItem";
import { YoutubeData } from "../../data";

const YoutubeList = () => {
  return (
    <div className="youtube-list">
      {YoutubeData.map((item, index) => {
        // let newClass = "";
        // if (index === 1) {
        //   newClass = "okook";
        // }
        const newClass = index === 1 ? "vaicabiu" : "prolayer";

        return (
          <YoutubeItem
            key={item.id}
            image={
              item.img ||
              "https://cdnphoto.dantri.com.vn/ozvc95HIDvN36oHepMq5XpS8Cpc=/thumb_w/960/2020/12/16/ngam-dan-hot-girl-xinh-dep-noi-bat-nhat-nam-2020-docx-1608126693063.jpeg"
            }
            avt={item.avt || item.img}
            title={item.title || "Khong co title hay them vo di cha"}
            author={item.author}
            className={newClass}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
