

function doGet(e) {
  return HtmlService
    .createTemplateFromFile('index')
    .evaluate()
    .addMetaTag("viewport", "width=device-width, initial-scale=1")
    .setSandboxMode(HtmlService.SandboxMode.IFRAME).setTitle('TASER')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);

}


function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}
