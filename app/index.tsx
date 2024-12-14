import fetcher from "@/api/fetcher";
import FipeScreen from "@/components/FipeScreen";
import { FipeItem, Marca } from "@/models";
import { Text, View } from "react-native";
import useSWR from 'swr'
import { router } from 'expo-router';

export default function Index() {
  const { data, error, isLoading } = useSWR<Marca[]>('/carros/marcas', fetcher)

  if (error) {
    return (<Text>{error.message}</Text>)
  }

  const handlePress = (item: FipeItem) => {
    const { codigo, nome } = item;
    router.push({ pathname: '/modelos', params: { codigoMarca: codigo } })
  }


  return (
    <FipeScreen data={data} handlePress={handlePress} />
  );
}
