import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import FontAwesome from "@expo/vector-icons/FontAwesome"

import HomeScreen from "./Home"
import TrainingScreen from "./Training"

const Tab = createBottomTabNavigator()

export const linking = {
	config: {
		screens: {
			Home: {
				path: "/",
			},
			Training: {
				path: "training",
			},
			NotFound: "*",
		},
	},
}

export default function Navigation({ orgId, clearOrgId }) {
	return (
		<NavigationContainer linking={linking}>
			<Tab.Navigator labeled={false} initialRouteName="Home">
				<Tab.Screen
					name="Home"
					options={{
						tabBarIcon: ({ color, size }) => <FontAwesome name="home" color={color} size={26} />,
						headerShown: false,
					}}
				>
					{(props) => <HomeScreen {...props} orgId={orgId} clearOrgId={clearOrgId} />}
				</Tab.Screen>
				<Tab.Screen
					name="Training"
					options={{
						tabBarIcon: ({ color, size }) => <FontAwesome name="question-circle" color={color} size={26} />,
						headerShown: false,
					}}
				>
					{(props) => <TrainingScreen {...props} orgId={orgId} />}
				</Tab.Screen>
			</Tab.Navigator>
		</NavigationContainer>
	)
}
