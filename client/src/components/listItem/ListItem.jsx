import "./listItem.css";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import image from "../../images/slider-image.jpg"

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://youtu.be/U4JYAx5rNRA?si=XH2UhRqIcEJ0T4ZB";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>8 Episodes</span>
              <span className="limit">+16</span>
              <span>2024</span>
            </div>
            <div className="desc">
            In Bridgerton, high society's glamorous world unfolds through the scandalous and romantic lives of the Bridgerton family. Set in Regency-era London, the series explores love, intrigue, and social ambition amid sumptuous period drama.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
