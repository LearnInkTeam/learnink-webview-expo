import React, { useState } from "react"
import { ThemeProvider } from "react-native-elements"
import { StatusBar } from "expo-status-bar"
import { View, TextInput, Text, TouchableOpacity } from "react-native"

import { container, card, titleText, textInputBox, buttonStyle, buttonText, paragraphText } from "./styles"
import RootNavigation from "./Navigation"

export default function App() {
	const [textInput, setTextInput] = useState(undefined)
	const [orgId, setOrgId] = useState(undefined)

	return (
		<ThemeProvider>
			<StatusBar backgroundColor="dodgerblue" style="light" />
			{orgId ? (
				<RootNavigation orgId={orgId} clearOrgId={() => setOrgId(undefined)} />
			) : (
				<View style={container}>
					<View style={card}>
						<Text style={titleText}>Enter your org id</Text>
						<Text style={paragraphText}>Enter your org id to see a demo with your web integration</Text>
						<TextInput
							editable
							numberOfLines={1}
							onChangeText={(text) => setTextInput(text)}
							value={textInput}
							style={textInputBox}
						/>
						<TouchableOpacity onPress={() => setOrgId(textInput)} title="Set org id" style={buttonStyle}>
							<Text style={buttonText}>Set org id</Text>
						</TouchableOpacity>
					</View>
				</View>
			)}
		</ThemeProvider>
	)
}
