module.exports = {
  "renders markdown on the split window" : function(browser){
    browser
      .url("http://localhost:9000/src")
      .waitForElementVisible('zen-editor', 2000)
      .setValue('textarea', '# marked\n##down')
      .pause(100)
      .assert.containsText('#rendered', 'marked\ndown')
      .end()
  },
  /*
  "persists and restores the written text": function(browser){
    browser
      .url("http://localhost:9000/src")
      .waitForElementVisible('zen-editor', 2000)
      .pause(100)
      .assert.containsText('#rendered', 'marked\ndown')
      .end()
  }
  */
}
