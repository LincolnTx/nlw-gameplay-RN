import React from 'react';
import { 
    View,
    Text,
    Image
 } from 'react-native';

import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';

export function SingIn() {
    return(
        <View style={styles.container}>           
            <Image source={IllustrationImg} 
                style={styles.image}
                resizeMode='stretch'
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se{'\n'} e organizae suas {'\n'} jogatinas
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games{'\n'}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon title="Entrar com Discord"  activeOpacity={0.7}/>
            </View>
        </View>
    );
}