import { redirect } from "next/navigation";

export default function Page() {
  redirect("https://bbj.disyfa.cloud/login"); // redirect ke halaman /target
  return null;
}
