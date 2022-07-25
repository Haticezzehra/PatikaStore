import React  from "react";
import {View,Text} from 'react-native';
import styles from './patika_style'
 
const Patika =({store})=>{
    return (
        <View style={styles.container}>
        <Image style={styles.image} source={{uri:store.imgURL}} />
        <View style={styles.inner_container}>
        <Text style={styles.title}>{store.title}</Text>
        <Text style={styles.price}>{store.price}</Text>
        <Text style={styles.inStock}>{store.inStock}</Text>
        </View>
      </View>
    )


}
 
        export default Patika;
    
 