import Image from "next/image";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className=" h-screen flex flex-col items-center justify-center gap-1">
      <Image
        src="/Logos/coin-logo.webp"
        alt="header_logo"
        width={150}
        height={150}
        className="w-[50px] animate-spin_infinite "
      />
      <div>
        Loading
        <span className="after:animate-dots after:inline-block after:w-3 after"></span>
      </div>
    </div>
  );
}
