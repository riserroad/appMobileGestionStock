import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

type Props = {
  route: any;
  navigation: any;
};

export default function DetailsScreen({ route, navigation }: Props) {
 // const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.reference}</Text>
      <Text style={styles.subtitle}>{item.category}</Text>
      

      <View style={styles.item}>
        <Text style={styles.label}>Description rapid:</Text>
        <Text style={styles.value}>{item.description}</Text>
      </View>
     
      <View style={styles.item}>
        <Text style={styles.label}>Model:</Text>
        <Text style={styles.value}>{item.model}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Lieu de stockage:</Text>
        <Text style={styles.value}>{item.lieu}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>dureté de la lame:</Text>
        <Text style={styles.value}>{item.poids}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Etat:</Text>
        <Text style={styles.value}>{item.etat}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Derniere Verification Date:</Text>
        <Text style={styles.value}>{item.lastVerificationDate}</Text>
      </View>
      
      <Button title="Modify" onPress={() => navigation.navigate('Modify', { item })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 8,
  },
  value: {},
});
