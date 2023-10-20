import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="footer px-20 py-10 pt-10 bg-blue-600 dark:bg-gray-700 text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img className='w-1/2' src="/Logo.png" alt="" />
            <p className="mt-4">Your source for the latest technology and electronics trends.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Categories</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#">Smartphones</a>
              </li>
              <li>
                <a href="#">Laptops</a>
              </li>
              <li>
                <a href="#">Headphones</a>
              </li>
              <li>
                <a href="#">Cameras</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p className="mt-4">123 Tech Street, Tech City</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Email: info@techgeeks.com</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Follow Us</h2>
            <div className="mt-4 space-x-4 text-2xl flex">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-blue-600 dark:bg-gray-500 text-center py-6 text-white">
        <p>&copy; {new Date().getFullYear()} Brand Shop || All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
