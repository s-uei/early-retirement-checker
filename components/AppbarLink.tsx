import React from "react";
import Link from "next/link";

function AppbarLink(props: { href: string; children?: React.ReactNode }) {
  const { href, children } = props;
  return (
    <Link href={href}>
      <a className="flex w-32 h-12 select-none cursor-pointer hover:bg-gray-500 border-r border-white justify-center items-center">
        {children}
      </a>
    </Link>
  );
}

export default AppbarLink;
