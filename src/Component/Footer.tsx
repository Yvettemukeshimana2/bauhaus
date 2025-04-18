  import React from "react";
  import { Link } from "react-router-dom";

  interface FooterProps {
    companyName: string;
    year: number;
  }

  const Footer: React.FC<FooterProps> = ({ companyName, year }) => {
    const links = [
      { href: "/", label: "Home", category: "Useful Links" },
      { href: "/aboutus1", label: "About", category: "Useful Links" },
      { href: "/contactus", label: "Contact", category: "Useful Links" },
      // {
      //   href: "/material",
      //   label: "Event Cattering",
      //   category: "Services",
      // },
      {
        href: "/venue",
        label: "Event Planning",
        category: "Services",
      },
      {
        href: "/venue",
        label: "Event Staffing",
        category: "Services",
      },
      {
        href: "/venue",
        label: "Event Catering",
        category: "Services",
      },
      // {
      //   href: "/venue",
      //   label: "Concierge",
      //   category: "Services",
      // },
      {
        href: "/venue",
        label: "Our Brands",
        category: "Brand",
      },
      {
        href: "/venue",
        label: "More Information",
        category: "Brand",
      },
    ];

    const categories = ["Brand","Useful Links", "Services",];

    return (
      <footer className="bg-gradient-to-b from-yellow-800 to-yellow-500  text-white py-8">
        <div className=" mx-auto px-4 ">
          <div className="grid grid-cols-4 sm:grid-cols-5  mb-6">
            {/* Company Info */}
            {/* <div>
              <h2 className="text-xl text-yellow-500 font-bold">
                {companyName}
              </h2>
              <p className="text-white text-md">
                Providing quality services since {year}
              </p>
            </div> */}

            {/* Links and Services */}
            {categories.map((category) => (
              <div
                key={category}
                className="flex font-normal ml-8 flex-col mb-6"
              >
                <span className="text-yellow-500  font-bold text-xl mb-3">
                  {category}
                </span>
                <div className="   flex flex-col">
                  {links
                    .filter((link) => link.category === category)
                    .map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="hover:text-white text-white text-sm"
                      >
                        {link.label}
                      </a>
                    ))}
                </div>
              </div>
            ))}

            {/* Location Info */}
            <div className="flex font-normal flex-col mb-6 ">
              <span className="text-yellow-500 font-bold ml-8 mb-3 text-xl">
                Contact Us
              </span>
              <div className=" text-white ml-8 text-sm">
                <p>Phone: +250788501009</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@muheservices.com"
                    className="hover:text-yellow-400"
                  >
                    info@muheservices.com
                  </a>
                </p>
                <p>Address:KG 17 Ave, Kigali-Rwanda</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col  ">
              <div className="flex  mt-6 md:mt-0 ml-10">
                {/* Removed Twitter - not in use */}
                <a
                  href="https://www.facebook.com/muheto.company/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white w-16 h-16"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M22 12a10 10 0 10-11.77 9.92v-7h-2v-2.92h2v-2.24a3.3 3.3 0 013.55-3.45h1.65v2.86h-1.17c-.81 0-1 .39-1 1v2h2.75L14 14.92h-2v7A10 10 0 0022 12z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/muhe_services?igsh=ZjN6ZTFrMXNyNGZs&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white w-16 h-16"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm8.5 1.5h-8.5a4.25 4.25 0 00-4.25 4.25v8.5a4.25 4.25 0 004.25 4.25h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25zm-4.25 3.75a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm5.25-.5a1 1 0 111 1 1 1 0 01-1-1z" />
                  </svg>
                </a>
              </div>

              <Link to="/venue">
                <button className="lg:block hidden justify-end ml-9 text-sm mt-12 font-bold rounded-full bg-yellow-500 text-yellow-100  px-10 py-2">
                  Work With Us
                </button>
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center">
            <p className="text-white text-md font-semibold">
              © {year} {companyName}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  export default Footer;
