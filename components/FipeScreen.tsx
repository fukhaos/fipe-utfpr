import { Colors } from '@/constants/Colors';
import styles from '@/styles';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { FlashList } from '@shopify/flash-list'
import { useEffect, useState } from 'react';
import { FipeItem } from '@/models';

interface FipeScreenProps {
    data?: Array<FipeItem>,
    handlePress: (item: FipeItem) => void
}

interface renderItemProps {
    item: FipeItem
}

const FipeScreen = (props: FipeScreenProps) => {
    const { data, handlePress } = props;

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredData, setFilteredData] = useState<Array<FipeItem>>([])

    useEffect(() => {
        if (!data) return;
        const result = data.filter(item => item.nome.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
        setFilteredData(result)
    }, [data, searchTerm])

    const renderItem = (props: renderItemProps) => {
        return (
            <TouchableOpacity style={styles.item} onPress={() => handlePress(props.item)}>
                <Text>{props.item.nome}</Text>
            </TouchableOpacity>
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