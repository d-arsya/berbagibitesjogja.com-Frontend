import { redirect } from "next/navigation";

export default function Page() {
  redirect(`https://news-api.berbagibitesjogja.com/wp-login.php`); // redirect ke halaman /target
  return null;
}
