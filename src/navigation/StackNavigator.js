import React from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate('TweetsDetails', {id: 1})}
    />
  );
};

const Tweets = ({navigation}) => {
  return (
    <View>
      <Text>Tweets</Text>
      <Link />
    </View>
  );
};

const TweetsDetails = ({route}) => {
  return (
    <View>
      <Text>{route.params.id}</Text>
    </View>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'dodgerblue'},
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name="Tweets"
        component={Tweets}
        options={{
          headerStyle: {backgroundColor: 'tomato'},
          headerTintColor: 'white',
          /* headerShown: false, */
        }}
      />
      <Stack.Screen
        name="TweetsDetails"
        component={TweetsDetails}
        options={({route}) => ({title: `Tweet Details: ${route.params.id}`})}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
