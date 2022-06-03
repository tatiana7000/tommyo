namespace SpriteKind {
    export const block = SpriteKind.create()
    export const player2 = SpriteKind.create()
}
function Checkfordeath1stlevel_tommy () {
    if (Tommy.tileKindAt(TileDirection.Center, assets.tile`myTile7`)) {
        Tommy.sayText("Game over")
        game.over(false)
    }
    if (Tommy.tileKindAt(TileDirection.Center, assets.tile`myTile0`)) {
        Tommy.sayText("Game over")
        game.over(false)
    }
    if (Tommy.tileKindAt(TileDirection.Center, assets.tile`myTile11`)) {
        Tommy.sayText("Game over")
        game.over(false)
    }
    if (Tommy.tileKindAt(TileDirection.Center, assets.tile`myTile10`)) {
        Tommy.sayText("Game over")
        game.over(false)
    }
    if (Tommy.tileKindAt(TileDirection.Top, assets.tile`myTile14`)) {
        Tommy.sayText("Game over")
        game.over(false)
    }
    if (Tommy.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
        Tommy.sayText("Game over")
        game.over(false)
    }
    Tommy.setStayInScreen(true)
    jerry.setStayInScreen(true)
}
function Jerrymyman () {
    if (controller.player2.isPressed(ControllerButton.Down)) {
        jerry.y += 10
    }
    if (controller.player2.isPressed(ControllerButton.Up)) {
        gravity_for_jerry = -2
        pause(200)
        gravity_for_jerry = 1
    }
    if (controller.player2.isPressed(ControllerButton.Left)) {
        jerry.x += -10
    }
    if (controller.player2.isPressed(ControllerButton.Right)) {
        jerry.x += 10
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level5`)
    Tommy.setPosition(1, 5)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    up_down_force = -2
    pause(200)
    up_down_force = 1
})
function applyGravity () {
    Tommy.y += up_down_force
    jerry.y += gravity_for_jerry
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Tommy.x += -10
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Tommy.x += 10
})
function Checkfordeath1stlevel1_Jerry () {
    if (jerry.tileKindAt(TileDirection.Center, assets.tile`myTile7`)) {
        Tommy.sayText("Game over")
        game.over(false)
    }
    if (jerry.tileKindAt(TileDirection.Center, assets.tile`myTile0`)) {
        Tommy.sayText("Game over")
        game.over(false)
    }
    if (jerry.tileKindAt(TileDirection.Center, assets.tile`myTile11`)) {
        Tommy.sayText("Game over")
        game.over(false)
    }
    if (jerry.tileKindAt(TileDirection.Center, assets.tile`myTile10`)) {
        Tommy.sayText("Game over")
        game.over(false)
    }
    if (jerry.tileKindAt(TileDirection.Top, assets.tile`myTile14`)) {
        Tommy.sayText("Game over")
        game.over(false)
    }
    if (jerry.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
        Tommy.sayText("Game over")
        game.over(false)
    }
    Tommy.setStayInScreen(true)
}
function Checkfordeath2ndlevel () {
    if (Tommy.tileKindAt(TileDirection.Center, assets.tile`myTile21`)) {
        Tommy.sayText("Game over")
        game.over(false)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Tommy.y += 10
})
function set_up_score () {
    textSprite2 = textsprite.create(convertToText(score_counter))
    textSprite2.setPosition(scene.cameraProperty(CameraProperty.Left) + 15, scene.cameraProperty(CameraProperty.Top) + 15)
}
function updateCurrentScore () {
    textSprite2.setStayInScreen(true)
    score_counter += 1
    textSprite2.setText(convertToText(score_counter))
}
let score_counter = 0
let textSprite2: TextSprite = null
let up_down_force = 0
let jerry: Sprite = null
let Tommy: Sprite = null
let gravity_for_jerry = 0
tiles.setCurrentTilemap(tilemap`level1`)
let up_right_button = 1
gravity_for_jerry = 1
Tommy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . . . . 5 d d d . . . . . . 
    . . . . . . d f d f . . . . . . 
    . . . . . . d d d d . . . . . . 
    . . . . . . d d d 3 . . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . . 8 9 8 8 . . . . . . 
    . . . . . . 8 9 8 8 . . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . . . 9 9 . . . . . . . 
    . . . . . . . 9 9 . . . . . . . 
    . . . . . . . 9 9 . . . . . . . 
    . . . . . . . e e . . . . . . . 
    `, SpriteKind.Player)
Tommy.setPosition(10, 37)
jerry = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . . e d d d d . . . . . . 
    . . . . . . d 8 d 8 . . . . . . 
    . . . . . . d d d d . . . . . . 
    . . . . . . d d d 3 . . . . . . 
    . . . . . . 4 4 4 . . . . . . . 
    . . . . . . 4 3 4 . . . . . . . 
    . . . . . . 4 3 4 . . . . . . . 
    . . . . . . 4 4 4 . . . . . . . 
    . . . . . . a a a . . . . . . . 
    . . . . . . a a a . . . . . . . 
    . . . . . . a a a . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.player2)
jerry.setPosition(10, 37)
scene.cameraFollowSprite(Tommy)
scene.cameraFollowSprite(jerry)
Tommy.setStayInScreen(true)
set_up_score()
forever(function () {
    updateCurrentScore()
    applyGravity()
    Checkfordeath1stlevel_tommy()
    Checkfordeath2ndlevel()
    Jerrymyman()
    Checkfordeath1stlevel_tommy()
})
forever(function () {
	
})
