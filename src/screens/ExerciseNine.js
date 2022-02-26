import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const Item = ({name}) => (
  <View style={style.item}>
    <Text>
      {name.title} {name.first} {name.last}
    </Text>
  </View>
);

export const ExerciseNine = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://randomuser.me/api/?results=100&inc=name',
      );
      const data = await response.json();
      console.log(data);
      const {results} = data || [];
      setUsers(results);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const renderItem = ({item}) => <Item name={item.name} />;

  if (loading) {
    return <Text style={style.loading}>Loading ... </Text>;
  }

  if (error) {
    return <Text style={style.error}>Something is wrong: {error} </Text>;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => `${item?.name?.first}-${item?.name?.last}`}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  item: {
    padding: 20,
    borderColor: 'black',
    borderWidth: 0.2,
  },
  error: {
    color: 'red',
    padding: 10,
    fontSize: 16,
  },
  loading: {
    padding: 10,
    fontSize: 16,
  },
});
