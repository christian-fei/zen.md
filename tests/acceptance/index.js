module.exports = {
  beforeEach: function(browser){
    browser
      .url("http://localhost:9000?test")
      .waitForElementVisible('zen-editor', 1000)
  },
  "shows example text if no text to restore is found in the localStorage": function(browser){
    browser
      .pause(100)
      .assert.containsText('#rendered', 'Heading 1\nHeading 2')
      .end()
  },
  "renders markdown on the split window" : function(browser){
    browser
      .clearValue('textarea')
      .setValue('textarea', '# marked\n##down')
      .pause(100)
      .assert.containsText('#rendered', 'marked\ndown')
      .end()
  },
  "persists and restores the written text": function(browser){
    browser
      .clearValue('textarea')
      .setValue('textarea', '# marked\n##down')
      .pause(100)
      .assert.containsText('#rendered', 'marked\ndown')

      .url("http://localhost:9000?test")
      .waitForElementVisible('zen-editor', 1000)
      .pause(100)
      .assert.containsText('#rendered', 'marked\ndown')
      .end()
  }
}
