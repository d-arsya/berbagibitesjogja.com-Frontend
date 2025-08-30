import { redirect } from "next/navigation";
export default function Page() {
  redirect(`${process.env.BACKEND_URL}/auth/google`);
}
