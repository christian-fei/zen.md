module.exports = {
  "shows example text if no text to restore is found in the localStorage": function(browser){
    browser
      .url("http://localhost:9000")
      .pause(100)
      .assert.containsText('#rendered', 'Heading 1\nHeading 2')
      .end()
  },
  "renders markdown on the split window" : function(browser){
    browser
      .url("http://localhost:9000")
      .clearValue('textarea')
      .setValue('textarea', '# marked\n##down')
      .pause(100)
      .assert.containsText('#rendered', 'marked\ndown')
      .end()
  },
  /*
  "persists and restores the written text": function(browser){
    browser
      .url("http://localhost:9000")
      .waitForElementVisible('zen-editor', 2000)
      .pause(100)
      .assert.containsText('#rendered', 'marked\ndown')
      .end()
  }
  */
}
