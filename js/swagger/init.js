window.onload = function() {
    var swagger_url = null;
    if (result != null) {
        swagger_url = result['file'];
    } else {
        swagger_url = 'swagger.json';
    }

    const ui = SwaggerUIBundle({
        url: swagger_url,
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
            SwaggerUIBundle.presets.apis,
            SwaggerUIStandalonePreset
        ],
        plugins: [
            SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout"
    })
    window.ui = ui
}
