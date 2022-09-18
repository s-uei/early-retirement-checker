import React from "react";
import {
  FaTwitter as TwitterIcon,
  FaFacebook as FacebookIcon,
} from "react-icons/fa";
import Link from "next/link";

function Sharebar(props: { message: string; url: string }) {
  const message = encodeURIComponent(props.message);
  const url = encodeURIComponent(props.url);
  return (
    <div className="flex w-96 h-8 bg-black text-white">
      <Link href={`http://twitter.com/share?url=${url}&text=${message}`}>
        <a className="flex w-full h-full justify-center items-center border-white border-r">
          <TwitterIcon />
        </a>
      </Link>
      <Link href={`https://www.facebook.com/share.php?u=${url}`}>
        <a className="flex w-full h-full justify-center items-center border-white">
          <FacebookIcon />
        </a>
      </Link>
    </div>
  );
}

export default Sharebar;
