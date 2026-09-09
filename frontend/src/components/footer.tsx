import { Info, CalendarDays, Mail, Share2, House, FileQuestionMark, UserCog, ShoppingCart, Star, Headset, RotateCcw, Gavel, Shield, FileText } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#f8f9fa] text-[#212529] h-80">
      <div className='mt-120 flex justify-between m-5  mb-14'>
        <div className="mt-10">
          <h1 className="text-2xl font-bold">A propos</h1>
          <ul className="mt-3 space-y-2">
            <li className="flex ">
              <Info />
              Qui sommes nous
            </li>
            <li className="flex ">
              <CalendarDays />Tous les evenements</li>
            <li className="flex">
              <Mail />
              Nous contacter
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <h1 className="text-2xl font-bold">Communaute</h1>
          <ul className="mt-3 space-y-2">
            <li className="flex">
              <Share2 />
              Nos reseaux sociaux
            </li>
            <li className="flex">
              <House />
              Point de vente physique
            </li>
            <li className="flex">
              <FileQuestionMark />
              FAQ
            </li>
          </ul>

        </div>
        <div className="mt-10">
          <h1 className="text-2xl font-bold">Organisateurs</h1>
          <ul className="mt-3 space-y-2">
            <li className="flex">
              <UserCog />
              devenir Organisateurs
            </li>
            <li className="flex">
              <ShoppingCart />
              Places de marche

            </li>
            <li className="flex">
              <Star />
              Nos references
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <h1 className="text-2xl font-bold">Assistance</h1>
          <ul className="mt-3 space-y-2">
            <li className="flex">
              <Headset />
              Service client
            </li>
            <li className="flex">
              <RotateCcw />
              Politique de remboursement
            </li>
            <li className="flex">
              <Gavel />
              Mention legal
            </li>
          </ul>
        </div>

      </div>
      <hr className="border my-3" />
      <div className="flex justify-between text-[#212529] mt-4">

        <ul className="flex ml-14 gap-5">
          <li className="flex">
            <Shield />
            Politique de confidentialite</li>
          <li className="flex">
            <FileText />
            Conditions general de vente
          </li>
          <li className="flex"> © 2026 TIKERAMA</li>
        </ul>
        <ul className='flex gap-3 mx-6 mt-3'>
          <FaFacebook />
          <FaInstagram />
          <FaTiktok />
          <FaLinkedin />
        </ul>
      </div>
    </div>
  )
}
