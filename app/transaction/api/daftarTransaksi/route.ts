import { getDateRange } from "@/general/lib/dateFn";
import { PrismaClient } from "@prisma/client";
import { request } from "https";
import moment from "moment";
import { NextRequest, NextResponse } from "next/server";

async function GET(req: NextRequest) {
  const userDate = Number(req.nextUrl.searchParams.get("month"));
  const date = new Date();

  console.log({ query: userDate, range: getDateRange(userDate) });
  const data = await new PrismaClient().userRecord.findMany({
    where: {
      createAt: {
        gte: getDateRange(userDate).start, // Mulai dari awal November
        lt: getDateRange(userDate).end, // Sebelum awal Desember
      },
    },
    select: {
      category: true,
      id: true,
      value: true,
      account: {
        select: {
          name: true,
        },
      },
      orderType: true,
      createAt: true,
    },
  });

  const formatedData = data.reduce(
    (acc: Record<string, (typeof data)[0][]>, curr) => {
      const byDate = moment(curr.createAt).format("YYYY MMM DD, dddd");
      if (!acc[byDate]) {
        acc[byDate] = [];
      }
      acc[byDate].push(curr);
      return acc;
    },
    {}
  );

  return NextResponse.json(formatedData);
}

async function POST(req: NextRequest) {
  const formData = await req.json();
  console.log(formData);
  return NextResponse.json({ formData });
}
export { GET, POST };
