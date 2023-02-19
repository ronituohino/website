import axios from "axios";
import useSWR, { Key, Fetcher } from "swr";

type Data = {
  amount: number;
};

const fetcher: Fetcher<Data, string> = () =>
  axios.get("/api/db").then(res => res.data);

export default function Client() {
  const { data, error, isLoading } = useSWR("/api/db", fetcher);

  if (error) {
    return <p>Error: {error}</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <p>Fetched on client side: {data?.amount}</p>;
}
