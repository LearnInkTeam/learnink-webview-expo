# Learn.ink WebView demo for React Native (Expo)

This is an example app created with React Native for Expo showcasing how Learn.ink can be added as a WebView. Before integrating Learn.ink as a WebView, make sure you've read the [Learn.ink WebView documentation](https://learnink.notion.site/Learn-ink-WebView-integration-v1-0-0a9bd2d9e27c4f35b8b8860713517ce1?pvs=4) which outlines our suggested implementation.

React Native uses a third-party package called [react-native-webview](https://www.npmjs.com/package/react-native-webview) to generate WebView components. Full documentation on the properties and methods for the React Native WebView can be found in the [WebView API Reference](https://github.com/react-native-webview/react-native-webview/blob/master/docs/Reference.md).

### Implementing the WebView component

The WebView component can be found in `components/Training.js`

```jsx
// Training.js
import React from "react"
import { WebView } from "react-native-webview"

function Training({ orgId }) {
	return (
		<WebView
			source={{
				uri: `https://m.learn.ink/${orgId}/learning`,
			}}
			javaScriptEnabled
			domStorageEnabled
		/>
	)
}

export default Training
```

External links (e.g. links added inside lessons) should be handled in an external browser and not opened in the WebView. The React Native WebView component should handle external links in a separate browser as standard, however it is worth testing this behaviour before going live with your integration.

### Download the sample app

You can download and install this app as an APK here:
https://expo.dev/artifacts/eas/eAuW8w8c3jY7Ho2G4TvC8J.apk
