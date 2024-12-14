import fetcher from "@/api/fetcher";
import FipeScreen from "@/components/FipeScreen";
import { Ano, FipeItem, ListaModelos } from "@/models";
import { Text, View } from "react-native";
import useSWR from 'swr'
import { router, useLocalSearchParams } from 'expo-router';

export default function Anos() {
  const { codigoMarca, codigoModelo } = useLocalSearchParams();
  const { data, error, isLoading } = useSWR<Ano[]>(`/carros/marcas/${codigoMarca}/modelos/${codigoModelo}/anos`, fetcher)

  if (error) {
    return (<Text>{error.message}</Text>)
  }

  const handlePress = (item: FipeItem) => {
    const { codigo } = item;
    router.push({ pathname: '/anos', params: { codigoMarca: codigoMarca, codigoModelo: codigo } })
  }

  return (
    <FipeScreen data={data} handlePress={handlePress} />
  );
}
