"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

const FooterMenuBar = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-11 bg-white border-b  border-teal-100 shadow-xl">
      <div className="flex justify-between items-center py-2 ">
        {/* Flat/Home List */}
        <Link href="/" className="flex-1 text-center">
          <FontAwesomeIcon
            icon={faHome}
            className={`text-lg  mx-auto ${
              pathname === "/" ? "text-teal-600" : "text-gray-500"
            }`}
          />
          <span className="block text-xs mt-1">Home </span>
        </Link>
      </div>
    </div>
  );
};

export default FooterMenuBar;
