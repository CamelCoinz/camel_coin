import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <span className="text-9xl flex underline my-5 text-brown_34">
        4
        <Image
          src="/Logos/coin-logo.webp"
          alt="header_logo"
          width={150}
          height={150}
          className="  animate-spin_infinite "
        />
        4
      </span>
      <p>Could not find Page</p>
      <Link
        href="/"
        className="text-white bg-txt_brown border-0 py-2 px-6 hover:bg-txt_brown/90 duration-300 rounded text-sm mt-2
      "
      >
        back to Main Page
      </Link>
    </div>
  );
}
