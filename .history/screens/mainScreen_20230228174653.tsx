import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteParams } from '../navigation/navigation';
import { getItem } from "../utils/storage";
import jwt_decode from "jwt-decode";
import RecruiterTemplate from "../components/recruiterTemplate";
import TalentTemplate from "../components/talentTemplate";

type DecodedToken = {
    name?: string,
    company?: string
};

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

    if (isTalent) {
        return (
            <RecruiterTemplate />
        )
    }

    return (
        <TalentTemplate />
    )
};

export default MainScreen;