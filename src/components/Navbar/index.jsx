import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

function Navbar() {
  return (
    <header className="bg-color-black">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2 md:items-center">
        <Link href="/" className="text-2xl font-bold text-color-accent">
          NOW<span className="text-color-primary">LIST</span>ANIME
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
}
export default Navbar;
