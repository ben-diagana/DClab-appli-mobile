import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



export default function ArticleCard(props) {

    //console.log("ArticleCard.js props.article", props.article)
    return (
        <View style={styles.container}>
            <Text style={styles.articleTitre}>{props.article.title}</Text>
            <Text>{props.article.content}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        margin: 10,
        padding: 10,
        elevation: 20,
        shadowColor: "#00263E",
        shadowOpacity: 5,
        shadowRadius: 15,
    },
    articleTitre: {
        
    },
})