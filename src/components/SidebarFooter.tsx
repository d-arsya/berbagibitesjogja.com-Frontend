import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function SidebarFooter() {
  return (
    <footer className="p-4 transition-[width,height] ease-linear bg-tosca rounded-t-md text-white flex justify-center md:justify-between flex-row flex-wrap gap-y-3">
      <div className="text-center md:text-start">
        <p>© 2025 Berbagi Bites Jogja</p>
        <p className="ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:hidden hidden md:block">
          Menyelamatkan makanan, membagikan kebaikan
        </p>
      </div>
      <div className="flex justify-between gap-x-5 items-center">
        <Link href={"https://instagram.com/berbagibitesjogja"}>
          <Instagram />
        </Link>
        <Link href={"https://wa.me/628986950700"}>
          <Phone />
        </Link>
        <Link href={"mailto:berbagibitesjogja@gmail.com"}>
          <Mail />
        </Link>
        <Link href={"http://linkedin.com/company/berbagibitesjogja"}>
          <Linkedin />
        </Link>
      </div>
    </footer>
  );
}
