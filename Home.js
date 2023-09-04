import React from "react"
import { View, Text, TouchableOpacity } from "react-native"

import { container, card, buttonStyle, buttonText, titleText, paragraphText } from "./styles"

function Home({ orgId, clearOrgId }) {
	return (
		<View style={container}>
			<View style={card}>
				<Text style={titleText}>Welcome to the {orgId} app!</Text>
				<Text style={paragraphText}>Press on the training tab below to test the webview integration</Text>
				<TouchableOpacity onPress={clearOrgId} title="Set org id" style={buttonStyle}>
					<Text style={buttonText}>Clear org id</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Home
