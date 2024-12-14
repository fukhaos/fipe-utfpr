import { Colors } from '@/constants/Colors';
import styles from '@/styles';
import { View, Text, TextInput } from 'react-native'
import { FlashList } from '@shopify/flash-list'
import { useEffect, useState } from 'react';
import { Marca } from '@/models';

interface FipeScreenProps {
    data: Array<Marca>
}

const FipeScreen = (props: FipeScreenProps) => {
    const { data } = props;

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredData, setFilteredData] = useState<Array<Marca>>(data)

    useEffect(() => {
        if (!data || !searchTerm) return;
        const result = data.filter(item => item.nome.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
        setFilteredData(result)
    }, [searchTerm])

    const renderItem = (props) => {
        return (
            <View style={styles.item}>
                <Text>{props.item.nome}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholderTextColor={Colors.text}
                style={styles.input}
                placeholder='Buscar ...'
                value={searchTerm}
                onChangeText={setSearchTerm}
            />

            <FlashList
                data={filteredData}
                renderItem={renderItem} />
        </View>
    );
}

export default FipeScreen;