const customerList = [
  {
    id: 1,
    name: "John Doe",
    balance: "20",
    date: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
  },
  {
    id: 2,
    name: "Alan",
    balance: "50",
    date: new Date(),
  },
  {
    id: 3,
    name: "Victor",
    balance: "40",
    date: new Date(new Date().setMonth(11, 1)),
  },
];

export async function GET() {
  return Response.json(customerList);
}

export async function POST() {}
