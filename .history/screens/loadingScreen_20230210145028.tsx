
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from "react-native";

interface laodingPageProps {
    time: number
};

const LoadingScreen = ({ time }: laodingPageProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            
        }, time)
    }, []);

    if(isLoading) {
        return (
            <View style={styles.container}>
                <Text>Page de chargement</Text>
            </View>
        )
    };

    return null;
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    }
})

export default LoadingScreen;