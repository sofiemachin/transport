namespace SpriteKind {
    export const NPC1 = SpriteKind.create()
    export const færdig = SpriteKind.create()
    export const spørgsmål = SpriteKind.create()
}
function spg12 () {
    game.showLongText("Hvor meget koster en gennemsnitlig billet til offentlig transport i Danmark", DialogLayout.Bottom)
    story.showPlayerChoices("23 kr", "24 kr", "25 kr", "26 kr")
    if (story.checkLastAnswer("23 kr")) {
        info.changeScoreBy(-1)
    } else if (story.checkLastAnswer("24 kr")) {
        info.changeScoreBy(1)
    } else if (story.checkLastAnswer("25 kr")) {
        info.changeScoreBy(-1)
    } else {
        info.changeScoreBy(-1)
    }
    spørgs1 += 1
}
function spg2 () {
    game.showLongText("Hvor mange medlemslande har forpligtet sig til FN's verdensmål", DialogLayout.Bottom)
    story.showPlayerChoices("193", "194", "195", "196")
    if (story.checkLastAnswer("194")) {
        info.changeScoreBy(-1)
    } else if (story.checkLastAnswer("195")) {
        info.changeScoreBy(-1)
    } else if (story.checkLastAnswer("193")) {
        info.changeScoreBy(1)
    } else {
        info.changeScoreBy(-1)
    }
    spørgs1 += 1
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.spørgsmål, function (sprite, otherSprite) {
    if (spørgs1 == 1) {
        spg1()
        otherSprite.setKind(SpriteKind.færdig)
    } else if (spørgs1 == 2) {
        spg2()
        otherSprite.setKind(SpriteKind.færdig)
    } else if (spørgs1 == 3) {
        spg3()
        otherSprite.setKind(SpriteKind.færdig)
    } else if (spørgs1 == 4) {
        spg4()
        otherSprite.setKind(SpriteKind.færdig)
    } else if (spørgs1 == 5) {
        spg5()
        otherSprite.setKind(SpriteKind.færdig)
    } else if (spørgs1 == 6) {
        spg6()
        otherSprite.setKind(SpriteKind.færdig)
    } else if (spørgs1 == 7) {
        spg7()
        otherSprite.setKind(SpriteKind.færdig)
    } else if (spørgs1 == 8) {
        spg8()
        otherSprite.setKind(SpriteKind.færdig)
    } else if (spørgs1 == 9) {
        spg9()
        otherSprite.setKind(SpriteKind.færdig)
    } else if (spørgs1 == 10) {
        spg10()
        otherSprite.setKind(SpriteKind.færdig)
    } else if (spørgs1 == 11) {
        spg11()
        otherSprite.setKind(SpriteKind.færdig)
    } else if (spørgs1 == 12) {
        spg12()
        otherSprite.setKind(SpriteKind.færdig)
    } else if (spørgs1 == 13) {
        spg13()
        otherSprite.setKind(SpriteKind.færdig)
    } else if (spørgs1 == 14) {
        spg14()
        otherSprite.setKind(SpriteKind.færdig)
    } else if (spørgs1 == 15) {
        spg15()
        otherSprite.setKind(SpriteKind.færdig)
    } else {
    	
    }
})
function spg7 () {
    game.showLongText("Hvor meget CO2e udleder en personbil i gennemsnittet om året?  ", DialogLayout.Bottom)
    story.showPlayerChoices("6,9 mio. Ton CO2e ", "7,2 mio. Ton CO2e ", "8,1 mio. Ton CO2e ", "9,4 mio. Ton CO2e ")
    if (story.checkLastAnswer("6,9 mio. Ton CO2e ")) {
        info.changeScoreBy(-1)
    } else if (story.checkLastAnswer("7,2 mio. Ton CO2e ")) {
        info.changeScoreBy(1)
    } else if (story.checkLastAnswer("8,1 mio. Ton CO2e ")) {
        info.changeScoreBy(-1)
    } else {
        info.changeScoreBy(-1)
    }
    spørgs1 += 1
}
function spg6 () {
    game.showLongText("Hvad står CO2e for?  ", DialogLayout.Bottom)
    story.showPlayerChoices("kuldioxid", "CO2 emissioner", "CO2 ækvivalenter ", "Drivhusgasser")
    if (story.checkLastAnswer("kuldioxid")) {
        info.changeScoreBy(-1)
    } else if (story.checkLastAnswer("CO2 ækvivalenter ")) {
        info.changeScoreBy(1)
    } else if (story.checkLastAnswer("CO2 emissioner")) {
        info.changeScoreBy(-1)
    } else {
        info.changeScoreBy(-1)
    }
    spørgs1 += 1
}
function spg5 () {
    game.showLongText("Hvor mange grader skal den globale opvarmning begrænses til?", DialogLayout.Bottom)
    story.showPlayerChoices("1", "1,5", "2", "2,5")
    if (story.checkLastAnswer("1")) {
        info.changeScoreBy(-1)
    } else if (story.checkLastAnswer("1,5")) {
        info.changeScoreBy(1)
    } else if (story.checkLastAnswer("2")) {
        info.changeScoreBy(-1)
    } else {
        info.changeScoreBy(-1)
    }
    spørgs1 += 1
}
function spg3 () {
    game.showLongText("Hvornår blev Parisaftalen underskrevet?", DialogLayout.Bottom)
    story.showPlayerChoices("2010", "2011", "2015", "2016")
    if (story.checkLastAnswer("2010")) {
        info.changeScoreBy(-1)
    } else if (story.checkLastAnswer("2011")) {
        info.changeScoreBy(-1)
    } else if (story.checkLastAnswer("2015")) {
        info.changeScoreBy(1)
    } else {
        info.changeScoreBy(-1)
    }
    spørgs1 += 1
}
function spg14 () {
    game.showLongText("Hvilket land i Europa har gratis transport med tog?", DialogLayout.Bottom)
    story.showPlayerChoices("Tyskland", "London", "Spanien", "Sverige")
    if (story.checkLastAnswer("Tyskland")) {
        info.changeScoreBy(-1)
    } else if (story.checkLastAnswer("London")) {
        info.changeScoreBy(-1)
    } else if (story.checkLastAnswer("Spanien")) {
        info.changeScoreBy(1)
    } else {
        info.changeScoreBy(-1)
    }
    spørgs1 += 1
}
function spg4 () {
    game.showLongText("Hvad handler Parisaftalen om?", DialogLayout.Bottom)
    story.showPlayerChoices("En global aftale om reduktion i udledning af drivhusgasser  ", "En globalaftale om en forøgelse i udledning af CO2  ", "En juridisk bindende aftale om reduktion af udledning af CO2 ", "En juridisk bindende aftale om en forøgelse af CO2 ")
    if (story.checkLastAnswer("En juridisk bindende aftale om reduktion af udledning af CO2 ")) {
        info.changeScoreBy(-1)
    } else if (story.checkLastAnswer("En globalaftale om en forøgelse i udledning af CO2  ")) {
        info.changeScoreBy(-1)
    } else if (story.checkLastAnswer("En global aftale om reduktion i udledning af drivhusgasser  ")) {
        info.changeScoreBy(1)
    } else {
        info.changeScoreBy(-1)
    }
    spørgs1 += 1
}
function spg1 () {
    game.showLongText("Hvor mange FN's verdensmål er der i alt?", DialogLayout.Bottom)
    story.showPlayerChoices("16", "17", "18", "19")
    if (story.checkLastAnswer("16")) {
        info.changeScoreBy(-1)
    } else if (story.checkLastAnswer("18")) {
        info.changeScoreBy(-1)
    } else if (story.checkLastAnswer("17")) {
        info.changeScoreBy(1)
    } else {
        info.changeScoreBy(-1)
    }
    spørgs1 += 1
}
function spg10 () {
    game.showLongText("Hvor meget CO2e udleder busser i gennemsnittet om året  ", DialogLayout.Bottom)
    story.showPlayerChoices("0,4 mio. Ton CO2e ", "0,6 mio. Ton CO2e ", "0,8 mio. Ton CO2e ", "0,9 mio. Ton CO2e ")
    if (story.checkLastAnswer("0,4 mio. Ton CO2e ")) {
        info.changeScoreBy(-1)
    } else if (story.checkLastAnswer("0,6 mio. Ton CO2e ")) {
        info.changeScoreBy(1)
    } else if (story.checkLastAnswer("0,8 mio. Ton CO2e ")) {
        info.changeScoreBy(-1)
    }
    spørgs1 += 1
}
function spg15 () {
    game.showLongText("Hvor meget stiger priserne fra 2024 for rejsende over Storebælt? ", DialogLayout.Bottom)
    story.showPlayerChoices("8%", "8,5%", "9%", "9,5%")
    if (story.checkLastAnswer("8%")) {
        info.changeScoreBy(-1)
    } else if (story.checkLastAnswer("8,5%")) {
        info.changeScoreBy(-1)
    } else if (story.checkLastAnswer("9,5%")) {
        info.changeScoreBy(1)
    } else {
        info.changeScoreBy(-1)
    }
    spørgs1 += 1
}
function spg11 () {
    game.showLongText("Hvor mange over 18 år, har adgang til offentlig transport i Danmark?", DialogLayout.Bottom)
    story.showPlayerChoices("300.000 ", "320.000 ", "360.000 ", "380.000 ")
    if (story.checkLastAnswer("300.000 ")) {
        info.changeScoreBy(-1)
    } else if (story.checkLastAnswer("320.000 ")) {
        info.changeScoreBy(-1)
    } else if (story.checkLastAnswer("360.000 ")) {
        info.changeScoreBy(1)
    }
    spørgs1 += 1
}
function spg13 () {
    game.showLongText("Hvor mange zoner er Sjælland opdelt i med hensyn til deres transportsystem? ", DialogLayout.Bottom)
    story.showPlayerChoices("220", "221", "222", "223")
    if (story.checkLastAnswer("220")) {
        info.changeScoreBy(-1)
    } else if (story.checkLastAnswer("221")) {
        info.changeScoreBy(1)
    } else if (story.checkLastAnswer("222")) {
        info.changeScoreBy(-1)
    } else {
        info.changeScoreBy(-1)
    }
    spørgs1 += 1
}
function spg8 () {
    game.showLongText("Hvilet transportmiddel er den mest bæredygtig transportmetode ", DialogLayout.Bottom)
    story.showPlayerChoices("Cykel", "Bil", "Bus", "Motorcykel")
    if (story.checkLastAnswer("Cykel")) {
        info.changeScoreBy(1)
    } else if (story.checkLastAnswer("Bil")) {
        info.changeScoreBy(-1)
    } else if (story.checkLastAnswer("Bus")) {
        info.changeScoreBy(-1)
    } else {
        info.changeScoreBy(-1)
    }
    spørgs1 += 1
}
function spg9 () {
    game.showLongText("Bliver der tillagt moms på billetter til offentlig transport i Danmark?", DialogLayout.Bottom)
    story.showPlayerChoices("Ja ", "Nej")
    if (story.checkLastAnswer("Nej")) {
        info.changeScoreBy(1)
    } else if (story.checkLastAnswer("Ja")) {
        info.changeScoreBy(-1)
    }
    spørgs1 += 1
}
let spørgs1 = 0
let træ1: Sprite = null
let mySprite: Sprite = null
let text_list = ""
let spil = 1
if (spil == 1) {
    text_list = game.askForString("Indtast din start lokation og tidspunkt")
}
spil += 1
if (spil == 2) {
    scene.setBackgroundColor(9)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
        5 5 9 9 5 9 9 5 9 9 5 9 9 . . . 
        5 5 9 9 5 9 9 5 9 9 5 9 9 . . . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 f f 5 5 5 5 5 5 f f 5 5 5 5 
        . . f f . . . . . . f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite.changeScale(3, ScaleAnchor.Middle)
    mySprite.setPosition(35, 175)
    controller.moveSprite(mySprite, 100, 100)
    tiles.setCurrentTilemap(tilemap`level3`)
    scene.cameraFollowSprite(mySprite)
    for (let value of tiles.getTilesByType(sprites.builtin.forestTiles0)) {
        træ1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 7 7 7 7 7 7 . . . . 
            . . . 7 7 7 7 7 7 7 7 7 7 . . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
            . . 7 7 7 7 e e e 7 7 7 . . . . 
            . . . . . 7 e e e 7 . . . . . . 
            . . . . . . e e e . . . . . . . 
            . . . . . . e e e . . . . . . . 
            . . . . . . e e e . . . . . . . 
            . . . . . . e e e . . . . . . . 
            `, SpriteKind.spørgsmål)
        tiles.placeOnTile(træ1, value)
        tiles.setTileAt(value, sprites.builtin.forestTiles0)
        træ1.setScale(4, ScaleAnchor.Middle)
    }
    game.splash("Velkommen til Klima Quizzen")
    game.splash("Påbegynd din rejse ved at køre hen til træerne ")
    game.splash("Ved hvert træ vil der komme et spørgsmål")
    game.splash("For hvert svar du får korrekt, får du et point")
    spørgs1 = 1
    info.setScore(0)
}
forever(function () {
    music.play(music.createSong(hex`0078000408060100001c00010a006400f401640000040000000000000000000000000005000004140104000800011b08000c00011b0c001000011b10001400011b14001800011b18001c00011d1c002000011e20002400012024002800012228002c0001222c003000011e30003400011b34003800011b38003c00011d3c004000011d40004400011944004800011948004c0001224c005000012250005400011e54005800011e58005c00011b5c006000011b64006800011b68006c00011b6c007000011b70007400011b74007800011b78007c00011d7c008000011e80008400012084008800012288008c0001228c009000011e90009400011b94009800011b98009c00011d9c00a000011da000a4000120a400a8000120a800ac00011eac00b000011eb000b400011db400b800011db800bc00011bbc00c000011b`), music.PlaybackMode.UntilDone)
    if (info.score() == 100) {
        game.splash("Tillykke du har nu vundet 50% rabat på din næste billet ")
        game.gameOver(true)
    }
})
