import type { NextPageContext } from "next";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type SSRProps = {
  count: number;
};

export default function SSR({ count }: SSRProps) {
  return (
    <>
      <main>
        <p>SSR, with user amount: {count}</p>
      </main>
    </>
  );
}

// This is run on the server, and the props are passed to the component above
export async function getServerSideProps({ req }: NextPageContext) {
  const userCount = await prisma.user.count();
  return {
    props: {
      count: userCount,
    },
  };
}
