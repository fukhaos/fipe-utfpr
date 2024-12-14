import fetcher from "@/api/fetcher";
import FipeScreen from "@/components/FipeScreen";
import { Text, View } from "react-native";
import useSWR from 'swr'

export default function Index() {
  const { data, error, isLoading } = useSWR('https://parallelum.com.br/fipe/api/v1/carros/marcas', fetcher)

  if (error) {
    return (<Text>{error.message}</Text>)
  }

  return (
    <FipeScreen data={data} />
  );
}
