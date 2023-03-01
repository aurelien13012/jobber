import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteParams } from '../navigation/navigation';
import { getItem } from "../utils/storage";
import jwt_decode from "jwt-decode";
import RecruiterTemplate from "../components/recruiterTemplate";
import TalentTemplate from "../components/talentTemplate";
import { fakeDataCompanies } from "../utils/fakeDataCompanies";
import StandardButton from "../components/standardButton";
import { View, StyleSheet } from "react-native";
import { DecodedToken } from "../utils/types";

// type DecodedToken = {
//     name?: string,
//     company?: string
// };

const MainScreen = () => {

    const [isTalent, setIsTalent] = useState<boolean>(false);
    const [isRecruiter, setIsRecruiter] = useState<boolean>(false);
    const [index, setIndex] = useState<number>(0);

    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

    useEffect(() => {
        const fetchToken = async () => {
            const token = await getItem("token");
            if (token) {
                const decodedToken: DecodedToken | null = jwt_decode(token);
                if (decodedToken && decodedToken.name) {
                    setIsTalent(true);
                    setIsRecruiter(false);
                }
                if (decodedToken && decodedToken.company) {
                    setIsRecruiter(true);
                    setIsTalent(false);
                }
                if (!decodedToken) {
                    navigation.navigate("ChoiceScreen");
                }
            }
        }
        fetchToken();
    }, [])


    const skip = (): void => {
        console.log("index", index)
        console.log("fakedatalenght", fakeDataCompanies.length)
        if (fakeDataCompanies.length - 1 === index) {
            setIndex(0);
            return
        }
        setIndex(prevIndex => prevIndex + 1)
    }
    //TODO On reprend ici regarder react-native-swipeable
    // TODO On doit faire appel a un useState qu'on doit faire varier quand on appuiera sur un bouton dans un premier temps
    if (isTalent) {
        return (
            <View style={styles.test}>
                <RecruiterTemplate
                    name={fakeDataCompanies[index].companyName}
                    fonction={fakeDataCompanies[index].poste}
                    desc={fakeDataCompanies[index].description}
                />
                {/* <StandardButton title={"Passer"} onPress={skip} /> */}
            </View>
        )
    }

    return (
        <TalentTemplate />
    )
};

const styles = StyleSheet.create({
    test: {
        flex: 1
    }
})

export default MainScreen;