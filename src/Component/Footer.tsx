import React from "react";

interface FooterProps {
  companyName: string;
  year: number;
}

const Footer: React.FC<FooterProps> = ({ companyName, year }) => {
  return (
    <footer className="bg-customGreen-960 py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">{companyName}</h2>
          <p className="text-gray-400">Premium Entertainment Experience</p>
        </div>

        <div className="mb-8">
          <p className="text-gray-300">
            KG 17 Ave, Kigali - Rwanda | +250 788 888 889 | info@bauhaus.com
          </p>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-500">
            © {year} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;