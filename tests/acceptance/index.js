module.exports = {
  beforeEach: function(browser){
    browser
      .url("http://localhost:9000?test")
      .waitForElementVisible('zen-editor', 1000)
  },

  "As a user\
  I want to see an example of markdown text\
  so I can play with the editor right away": function(browser){
    browser
      .pause(100)
      .assert.containsText('#rendered', 'Heading 1\nHeading 2')
      .end()
  },

  "As a user\
  I want to see the rendered markdown as html": function(browser){
    browser
      .clearValue('textarea')
      .setValue('textarea', '# marked\n##down')
      .pause(100)
      .assert.containsText('#rendered', 'marked\ndown')
      .end()
  },

  "As a user\
  I want to be able to continue editing the text\
  That I was writing during the session before": function(browser){
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
