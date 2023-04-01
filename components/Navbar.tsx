import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
function Navbar(props: any) {
  const { data: session } = useSession();

  const links = [
    { title: "Home", url: "/" },
    { title: "Features", url: "/#features" },
    { title: "How it Works", url: "/#how-it-works" },
    { title: "Contact us ", url: "/contact" },
  ];

  return (
    <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        {/* TODO: Fix name and logo */}
        <Link href="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Guidr Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            Guidr
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4  rounded-lg border  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
            {links.map((link, idx) => (
              <li key={idx}>
                {link === props.active ? (
                  <a
                    href={link.url}
                    className="block py-2 pr-4 pl-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 text-white"
                    aria-current="page"
                  >
                    {link.title}
                  </a>
                ) : (
                  <a
                    href={link.url}
                    className="block py-2 pr-4 pl-3  rounded md:border-0  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                  >
                    {link.title}
                  </a>
                )}
              </li>
            ))}
            <li key={99}>
              {!session ? (
                <a
                  className="cursor-pointer block py-2 pr-4 pl-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 text-white"
                  aria-current="page"
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                >
                  Login
                </a>
              ) : (
                <>
                  <a
                    className="cursor-pointer block py-2 pr-4 pl-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      signOut();
                    }}
                  >
                    Logout
                  </a>
                </>
              )}
            </li>
            {session ? (
              <li>
                <Link href="/profile">
                  <img src={session.user?.image!} className="h-6" />
                </Link>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
