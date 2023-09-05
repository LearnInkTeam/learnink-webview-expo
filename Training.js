import React from "react"
import { WebView } from "react-native-webview"

function Training({ orgId }) {
	return (
		<WebView
			source={{
				uri: `https://m.learn.ink/${orgId}/learning`,
			}}
			style={{ marginTop: 30 }}
			javaScriptEnabled
			domStorageEnabled
		/>
	)
}

export default Training
