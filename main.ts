controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    MOTHER_DUCK,
    assets.animation`ANIMATION MOTHER DUCK`,
    500,
    false
    )
})
function level () {
    if (CURRENT_LEVEL == 0) {
        tiles.setCurrentTilemap(tilemap`level3`)
    } else if (CURRENT_LEVEL == 1) {
        tiles.setCurrentTilemap(tilemap`level3`)
        tiles.placeOnTile(MOTHER_DUCK, tiles.getTileLocation(7, 11))
        tiles.placeOnTile(DOGGY, tiles.getTileLocation(1, 11))
        tiles.placeOnTile(DUCKY_0, tiles.getTileLocation(19, 7))
    } else if (CURRENT_LEVEL == 2) {
        tiles.setCurrentTilemap(tilemap`level3`)
    } else if (CURRENT_LEVEL == 3) {
        tiles.setCurrentTilemap(tilemap`level3`)
    }
    info.setScore(0)
    info.setLife(5)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    DOGGY,
    assets.animation`DOGGY`,
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
let CURRENT_LEVEL = 0
let DUCKY_0: Sprite = null
let DOGGY: Sprite = null
let MOTHER_DUCK: Sprite = null
music.play(music.createSoundEffect(WaveShape.Triangle, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("- - - - - - - - ", 5), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundImage(assets.image`BACKGROUND 1`)
MOTHER_DUCK = sprites.create(assets.image`MOTHER DUCK0`, SpriteKind.Player)
DOGGY = sprites.create(assets.image`DOG 6`, SpriteKind.Enemy)
let DUCKY1 = sprites.create(assets.image`DUCKILING 3`, SpriteKind.Food)
DUCKY_0 = sprites.create(assets.image`DUCKILING 0`, SpriteKind.Food)
let DUCKY3 = sprites.create(assets.image`DUCKILING 1`, SpriteKind.Food)
let DUCKY4 = sprites.create(assets.image`DUCKILING 4`, SpriteKind.Food)
let DUCKY5 = sprites.create(assets.image`DUCKILING 5`, SpriteKind.Food)
let DUCKY6 = sprites.create(assets.image`DUCKILING 6`, SpriteKind.Food)
MOTHER_DUCK.ay = 200
story.startCutscene(function () {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(MOTHER_DUCK, tiles.getTileLocation(17, 10))
    tiles.placeOnTile(DOGGY, tiles.getTileLocation(4, 10))
    tiles.placeOnTile(DUCKY_0, tiles.getTileLocation(16, 10))
    tiles.placeOnTile(DUCKY1, tiles.getTileLocation(15, 10))
    tiles.placeOnTile(DUCKY3, tiles.getTileLocation(14, 10))
    tiles.placeOnTile(DUCKY4, tiles.getTileLocation(13, 10))
    tiles.placeOnTile(DUCKY5, tiles.getTileLocation(12, 10))
    tiles.placeOnTile(DUCKY6, tiles.getTileLocation(11, 10))
    pause(100)
    MOTHER_DUCK.vx = 50
})
controller.moveSprite(MOTHER_DUCK, 100, 100)
DOGGY.follow(MOTHER_DUCK, 70)
CURRENT_LEVEL = 0
scene.cameraFollowSprite(MOTHER_DUCK)
level()
