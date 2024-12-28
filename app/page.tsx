import LoginButton from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="absolute -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]">
        </div>
      </div>

      <main className="flex h-full flex-col justify-center z-1">
        <div className="space-y-6 text-center">
          <h1 className="text-6xl font-semibold drop-shadow-md text-[#00A6ED]">
            🛅Auth Kit
          </h1>
          <p className="">
            Nextjs Authentication Kit by{" "}
            <Link
              href="https://github.com/arunydvv"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-[#00A6ED] "
            >
              Arun
            </Link>
          </p>
          <div>
            <LoginButton>
              <Button variant={"secondary"} size="lg">
                Login
              </Button>
            </LoginButton>
          </div>
        </div>
      </main>
    </>
  );
}
