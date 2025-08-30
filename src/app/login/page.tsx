import { redirect } from "next/navigation";

export default function Page() {
  redirect(`${process.env.APP_URL}/login`); // redirect ke halaman /target
  return null;
}
