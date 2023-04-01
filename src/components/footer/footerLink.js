import React from "react";
import Link from "next/link";

const FooterLink = ({ linkName }) => {
  return (
    <li>
      <Link scroll={false} aria-label={linkName} className="btn__outline" href="/">
        {linkName}
      </Link>
    </li>
  );
};

export default FooterLink;
