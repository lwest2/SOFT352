QUnit.test("Check Height of Thumbnail Content", function(assert) {
  assert.equal(
    $('#recentContent').css('height'), "96px",
    "dotdotdot.js correctly changed the height of content"
  );
});