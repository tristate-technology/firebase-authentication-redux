import { Dimensions, Platform } from 'react-native';

export const isIPhoneX = () => {
    const { height, width } = Dimensions.get('window');
    return Platform.OS === 'ios' &&
        ((height === 812 && width === 375) ||
            (height === 375 && width === 812));
}