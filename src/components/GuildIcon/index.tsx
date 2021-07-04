import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

interface Props {
   
}

export function GuildIcon({ }: Props) {
    const uri = 'https://logosmarcas.net/wp-content/uploads/2020/12/Discord-Emblema.png';
    
    return (
        <Image 
            source={{uri}} 
            style={styles.image}
            resizeMode="cover"
        />
    );
}