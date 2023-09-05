# Learn.ink WebView demo for React Native (Expo)

This is an example app created with React Native for Expo showcasing how Learn.ink can be added as a WebView. Before integrating Learn.ink as a WebView, make sure you've read the [Learn.ink WebView documentation](https://learnink.notion.site/Learn-ink-WebView-integration-v1-0-0a9bd2d9e27c4f35b8b8860713517ce1?pvs=4) which outlines our suggested implementation.

Full documentation on the properties and methods for the React Native WebView can be found in the [WebView API Reference](https://github.com/react-native-webview/react-native-webview/blob/master/docs/Reference.md).

### Don't forget...

You should enable both Javascript and DOM storage on the WebView to ensure it runs as expected.

```jsx
<WebView
	source={{
		uri: url,
	}}
	javaScriptEnabled
	domStorageEnabled
/>
```

External links (e.g. links added inside lessons) should be handled in an external browser and not opened in the WebView. The React Native WebView component should handle external links in a separate browser as standard, however it is worth testing this behaviour before going live with your integration.
