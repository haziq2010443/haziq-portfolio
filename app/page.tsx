import Navbar from "@/components/navbar"
import Profile from "@/components/profile"

export default function Home() {
  return (
    <div className="min-h-screen  bg-gray-900">
      <Navbar />
      <Profile />
    </div>
  );
}