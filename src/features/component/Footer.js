import { Typography } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full bg-blue-950 text-white pt-10">
      <div className="mx-auto max-w-7xl px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Logo or Brand */}
          <Typography variant="h5" className="text-white font-bold">
            Material Tailwind
          </Typography>

          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {LINKS.map(({ title, items }) => (
              <div key={title}>
                <Typography
                  variant="small"
                  className="mb-3 font-semibold text-white"
                >
                  {title}
                </Typography>
                <ul>
                  {items.map((link) => (
                    <li key={link}>
                      <a
                        href="rey"
                        className="py-1.5 block font-normal text-white hover:text-blue-300 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-blue-800 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <Typography className="text-white text-center md:text-left mb-2 md:mb-0">
            &copy; {currentYear} <a href="https://material-tailwind.com/">Material Tailwind</a>. All Rights Reserved.
          </Typography>

          <div className="flex gap-4">
            {/* Social Icons */}
            {["facebook", "instagram", "twitter", "github"].map((icon, index) => (
              <a
                href="my"
                key={index}
                className="hover:text-blue-300 transition-colors text-white text-lg"
              >
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
