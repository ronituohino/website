import type { NextPageContext } from "next";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type SSGProps = {
  count: number;
};

export default function SSG({ count }: SSGProps) {
  return (
    <>
      <main>
        <p>SSG, with user amount: {count}</p>
      </main>
    </>
  );
}

// This is run on the server, and the props are passed to the component above
export async function getStaticProps({ req }: NextPageContext) {
  const userCount = await prisma.user.count();
  return {
    props: {
      count: userCount,
    },
  };
}
