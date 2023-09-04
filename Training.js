import React, { useState, useEffect } from "react"
import { WebView } from "react-native-webview"

const defaultPath = "/acme/learning"

function Training({ route }) {
	const [path, setPath] = useState(defaultPath)

	useEffect(() => {
		if (route && route.params && route.params.path && route.params.path !== path) {
			setPath(route.params.path)
		} else {
			setPath(defaultPath)
		}
	}, [route])

	return (
		<WebView
			source={{
				uri: `https://m.learn.ink${path}`,
			}}
			style={{ marginTop: 30 }}
			javaScriptEnabled
			domStorageEnabled
		/>
	)
}

export default Training
