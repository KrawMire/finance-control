import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HomeScreen } from './screens/home-screen/home-screen';
import { StatisticsScreen } from './screens/statistics-screen/statistics-screen';
import { AddTransactionScreen } from './screens/add-transaction-screen/add-transaction-screen';
import { HistoryScreen } from './screens/history-screen/history-screen';
import { SettingsScreen } from './screens/settings-screen/settings-screen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({
        headerShown: false,
        })
      }>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused, size}) => (
              <Ionicons name={focused ? "home-sharp" : "home-outline"} size={size} color={"#424242"} />
            )
          }}
        />
        <Tab.Screen
          name="Statistics"
          component={StatisticsScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused, size}) => (
              <Ionicons name={focused ? "stats-chart-sharp" : "stats-chart-outline"} size={size} color={"#424242"} />
            )
          }}
        />
        <Tab.Screen
          name="Add transaction"
          component={AddTransactionScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused, size}) => (
              <Ionicons name="add-circle-sharp" size={size*2} color={focused ? "#4EBC7A" : "#5BE090"} />
            )
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused, size}) => (
              <Ionicons name={focused ? "settings-sharp" : "settings-outline"} size={size} color={"#424242"} />
            )
          }}
        />
        <Tab.Screen
          name="Profiles"
          component={HistoryScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused, size}) => (
              <Ionicons name={focused ? "cash-sharp" : "cash-outline"} size={size} color={"#424242"} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
