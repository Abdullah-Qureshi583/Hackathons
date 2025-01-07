import Link from "next/link";
import PinkButton from "./PinkButton";

export default function Login() {
  return (
    <div className="flex items-center  justify-center ">
      <div className=" p-14 rounded-md gap-9 flex flex-col shadow-lg max-w-[544px] w-full">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-center text-black    ">
            Login
          </h1>
          <p className="text-center text-subText ">
            Please login using account details below.
          </p>
        </div>
        <form>
          <div className="mb-4">
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pPink"
            />
          </div>
          <div className="mb-4">
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pPink"
            />
          </div>
          <div className="text-left text-base mb-4">
            <Link href="#" className="text-sm text-subText hover:underline">
              Forgot your password?
            </Link>
          </div>

          <PinkButton wFull>Sign In</PinkButton>
        </form>
        <p className="text-center text-subText ">
          Don’t have an Account?{" "}
          <a href="#" className=" hover:underline">
            Create account
          </a>
        </p>
      </div>
    </div>
  );
}
