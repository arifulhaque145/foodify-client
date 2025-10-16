import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandTwitter,
} from "react-icons/tb";
import { Link } from "react-router-dom";
import logo from "../../assets/foodify_icon.png";

function LinkItem({ link }) {
  return (
    <Link
      key={link.id}
      className="font-medium text-gray-500 transition duration-300 hover:text-red-400 block mb-2"
    >
      {link.title}
    </Link>
  );
}

function Logo({ Icon }) {
  return (
    <div className="rounded-full bg-red-600 hover:bg-red-400 cursor-pointer p-2">
      <Icon className="text-white text-xl" />
    </div>
  );
}

export default function Footer() {
  return (
    <section className="bg-base-200">
      <footer className="grid grid-cols-5 gap-4 py-20 px-16 text-base-content mt-16">
        <div className="col-span-2">
          <img
            src={logo}
            alt="logo"
            className="w-16 p-2 rounded-full border-2 border-red-600 cursor-pointer hover:border-red-400"
          />
          <p className="text-gray-600 font-light text-xl my-4">
            Meanwhile, food delivery platforms <br /> revolutionized the way
            people enjoy <br /> meals by bringing freshly prepared
          </p>
          <div className="flex gap-4">
            <Logo Icon={TbBrandFacebook} />
            <Logo Icon={TbBrandTwitter} />
            <Logo Icon={TbBrandInstagram} />
            <Logo Icon={TbBrandLinkedin} />
          </div>
        </div>
        <div>
          <p className="font-extrabold text-2xl mb-3">Services</p>
          {data.quickLinks.map((link) => (
            <LinkItem link={link} />
          ))}
        </div>
        <div>
          <p className="font-extrabold text-2xl mb-3">Our Menu</p>
          {data.ourMenu.map((link) => (
            <LinkItem link={link} />
          ))}
        </div>
        <div>
          <p className="font-extrabold text-2xl mb-3">Contact Us</p>
          {data.contactUs.map((link) => (
            <div className="mb-2">
              <p className="font-bold text-xl">{link.title}</p>
              <Link clclassName="font-medium text-gray-500 transition duration-300 hover:text-red-400 block">
                {link.subtitle}
              </Link>
            </div>
          ))}
        </div>
      </footer>
      <div className="divider" />
    </section>
  );
}

const data = {
  quickLinks: [
    { id: 1, title: "Home" },
    { id: 2, title: "About Us" },
    { id: 3, title: "Menu" },
    { id: 4, title: "Blog" },
    { id: 5, title: "Contact Us" },
  ],
  ourMenu: [
    { id: 1, title: "Italian Chines" },
    { id: 2, title: "Chicken Meal" },
    { id: 3, title: "Chicken Ball" },
    { id: 4, title: "Burger Kings" },
    { id: 5, title: "Maxican Food" },
  ],
  contactUs: [
    {
      id: 1,
      title: "Address:",
      subtitle: "123 Main Street, Suite 500, New York",
    },
    {
      id: 2,
      title: "Phone:",
      subtitle: "+123 456 789",
    },
    { id: 3, title: "Email:", subtitle: "info@foodify.com" },
  ],
};
