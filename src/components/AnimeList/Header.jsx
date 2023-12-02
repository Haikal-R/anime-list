import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className=" flex justify-between items-center p-2 m-2 mt-4 mb-3 bg-color-navbar border-b-4 border-color-accent">
      <h1 className="font-bold text-color-primary text-xl">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-md text-sm font-bold text-color-primary transition-all border-none bg-color-button p-2"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
