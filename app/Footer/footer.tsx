import React from 'react'
import logo from '@/public/logo.png'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#fefbf5] mt-14 text-gray-700 px-6 md:px-12 py-12 relative lg:px-60">
      <div className="absolute top-6 right-6 text-sm border border-gray-300 rounded px-3 py-1 lg:mx-60 bg-white flex items-center gap-1">
       
      <select className=" px-3 py-1 rounded">
  <option value="NG">🇳🇬 Nigeria</option>
  <option value="GH">🇬🇭 Ghana</option>
</select>


      </div>
          

      <div className="flex flex-wrap gap-12 border-b border-gray-200 pb-10">
        <div className="min-w-[150px]">
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">FAQ's</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Press & Media Kit</a></li>
            <li><a href="#">Our Investors</a></li>
            <li><a href="#">Partner with us</a></li>
            <li><a href="#">Migration</a></li>
          </ul>
        </div>
        <div className="min-w-[150px]">
          <h4 className="font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Stocks</a></li>
            <li><a href="#">Fixed Returns</a></li>
            <li><a href="#">For Institutions</a></li>
            <li><a href="#">Vault</a></li>
          </ul>
        </div>
        <div className="min-w-[150px]">
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Fixed Returns</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Agreements and Disclosures</a></li>
            <li><a href="#">Third Party Agreements and Disclosures</a></li>
          </ul>
        </div>
        <div className="min-w-[180px]">
          <h4 className="font-semibold mb-4">Contact us</h4>
          <p className="text-sm mb-3">support@investbamboo.com</p>
          <div className="flex gap-3">
            {[
              "https://cdn-icons-png.flaticon.com/24/733/733547.png", // Twitter
              "https://cdn-icons-png.flaticon.com/24/733/733558.png", // Facebook
              "https://cdn-icons-png.flaticon.com/24/2111/2111463.png", // Instagram
              "https://cdn-icons-png.flaticon.com/24/1384/1384060.png", // YouTube
              "https://cdn-icons-png.flaticon.com/24/2111/2111646.png", // Telegram
            ].map((src, idx) => (
              <img key={idx} src={src} alt="icon" className="w-5 h-5" />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center mt-10 mb-6">
       <Image src={logo} alt='LOGO' />
      </div>

      <div className="flex flex-wrap justify-between gap-12 mb-8 text-sm">
        <div>
          <h4 className="font-semibold mb-1">Lagos</h4>
          <p>Plot 1, Block 22, Babatunde Anjous Ave, Lekki Phase 1, Lagos, Nigeria.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">San Francisco</h4>
          <p>
            490 Post Street, Ste. 526<br />
            San Francisco, CA 94102
          </p>
        </div>
      </div>

      <div className="text-xs text-gray-600 leading-relaxed">
        <p>
          Bamboo Systems Technology Limited (“Bamboo”) is a company duly licensed by the Securities and Exchange Commission, Nigeria. Bamboo does not provide investment advice and individual investors should make their own decisions to seek independent advice. The value of investments can go up as well as down and you may receive back less than your original investment.
        </p>
        <p className="mt-3">
          US-traded securities, including fractional trading are provided to Lambeth Capital Limited (“Lambeth Capital”) by DriveWealth LLC, a regulated member of <strong>FINRA/SIPC</strong>. DriveWealth, LLC is a registered broker dealer, member of <strong>FINRA</strong> and <strong>SIPC</strong>. Nigerian account traded securities are facilitated by Lambeth Capital, a broker-dealer registered with the Securities and Exchange Commission, Nigeria and a Trading License Holder of the Nigerian Exchange Group.
        </p>
        <p className="mt-3">
          Lambeth Capital does not make any personal recommendations to buy, sell, or otherwise deal in investments. Investors make their own investment decisions. The services and securities provided by Lambeth Capital may not be suitable for all customers and, if you have any doubts, you should seek advice from an independent financial adviser.
        </p>
        <p className="mt-4 text-gray-500">&copy; Copyright <strong>2025</strong> - Bamboo. All rights reserved.</p>
      </div>
    </footer>
  );
};


export default Footer
