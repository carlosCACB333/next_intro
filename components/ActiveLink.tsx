import React, { CSSProperties } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  href: string;
  text: string;
}

const style: CSSProperties = { color: "#0070f3" };

const ActiveLink = ({ href, text }: Props) => {
  const { asPath } = useRouter();
  return (
    <Link href={href} passHref>
      <a style={asPath == href ? style : undefined}>{text}</a>
    </Link>
  );
};

export default ActiveLink;
