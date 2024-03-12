/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import Dropdown from "./Dropdown";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { selectItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      {/* Top Nav*/}
      <div className="flex items-center bg-amazon_blue p-2 flex-grow py-2 ">
        <div className="mt-3 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={110}
            height={20}
            objectFit="contain"
            className="cursor-pointer ml-4 mr-6"
          />
        </div>

        {/* Search Bar*/}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <Dropdown />
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink "
            placeholder="Search Amazon"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Navbar Right*/}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={!session ? signIn : signOut} className="link">
            <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div onClick={() => router.push("/orders")} className="link hidden md:block">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div onClick={() => router.push("/checkout")} className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Nav*/}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link" ><a href="https://www.primevideo.com/collection/IncludedwithPrime">Prime Video</a></p>
        <p className="link"><a href="https://business.amazon.com/">Amazon Business</a></p>
        <p className="link"><a href="https://www.amazon.com/gp/goldbox">Today&apos;s Deals</a></p>
        <p className="link hidden lg:inline-flex"><a href="https://www.amazon.com/electronics-store/b?ie=UTF8&node=172282">Electronics</a></p>
        <p className="link hidden lg:inline-flex"><a href="https://www.amazon.com/s?k=food+and+grocery&ref=nb_sb_ss_ts-doa-p_2_16">Food & Grocery</a></p>
        <p className="link hidden lg:inline-flex"><a href="https://www.amazon.com/b?ie=UTF8&node=15247183011">Prime</a></p>
        <p className="link hidden lg:inline-flex"><a href="https://www.amazon.co.uk/health-beauty-haircare-wellbeing-dentalcare-shaving-hairremoval/b?ie=UTF8&node=65801031">Health & Personal Care</a></p>
      </div>
    </header>
  );
}

export default Header;
