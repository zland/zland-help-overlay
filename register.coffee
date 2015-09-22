require 'helpOverlay/sass/style'

playground = require 'map/views/playground'
Overlay = require 'helpOverlay/view/Overlay'

module.exports = ->
  playground.on 'render', ->
    overlay = new Overlay()
    overlay.render()

    playground.getCanvasWrapper().$el.append overlay.$el
    playground.addChild overlay
