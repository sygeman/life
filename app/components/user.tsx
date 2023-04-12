"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export const User = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex flex-col justify-center items-center w-full h-screen">
        {session.user.image ? (
          <Image
            className="rounded-full"
            src={session.user.image}
            width={100}
            height={100}
            alt=""
            priority
          />
        ) : null}
        <div className="mt-2 font-bold text-lg">{session.user.name}</div>
        <button className="text-white/50" onClick={() => signOut()}>
          Logut
        </button>
      </div>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("github")}>Sign in</button>
    </>
  );
};
