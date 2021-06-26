import React from 'react';
import { Text, Image, ScrollView } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';
import { Category } from '../Category';
import { categories } from '../../utils/categories';

interface Props {
    categorySelected: string;
}

export function CategorySelect({categorySelected}: Props){
    return(
        <ScrollView 
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingRight: 40}}
        >
            {
                categories.map(category => (
                    <Category 
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === categorySelected}
                    />
                ))
            }
        </ScrollView>
    );
}