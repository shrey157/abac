// add hearts
//load powerups
//sound
var score = 0
var life = 3
var gamestate = 1
var bubbleImage
var letter, alfabets;
var letter_array
var a, b, c, d, e, f, g, h, i, j;
var k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;
var arrow, bow, arrowgrp
var bubbles, bubble
var powerups, powerup
var bowI1
function preload() {
    powerup = loadAnimation('powerups/r1.png', 'powerups/r2.png', 'powerups/r3.png', 'powerups/r4.png', 'powerups/r5.png', 'powerups/r6.png')
    bubbleImage = loadAnimation('images/bubble/b0.png')
    bowI1 = loadAnimation('images/bow/0a.png', 'images/bow/1a.png', 'images/bow/2a.png', 'images/bow/2b.png', 'images/bow/1b.png')
    bowImg = loadAnimation('images/bow/0a.png')//image
    bubblepop = loadAnimation('images/bubble/b0.png', 'images/bubble/b0.png', 'images/bubble/b1.png', 'images/bubble/b1.png', 'images/bubble/b2.png', 'images/bubble/b2.png', 'images/bubble/b3.png', 'images/bubble/b3.png')
    Arrowimg = loadImage('images/bow/arrow1.png')
    heartimg = loadImage('images/heart.png')

    a = loadImage("images/letters/A.png")
    b = loadImage("images/letters/B.png")
    c = loadImage("images/letters/C.png")
    d = loadImage("images/letters/D.png")
    e = loadImage("images/letters/E.png")
    f = loadImage("images/letters/F.png")
    g = loadImage("images/letters/G.png")
    h = loadImage("images/letters/H.png")
    i = loadImage("images/letters/I.png")
    j = loadImage("images/letters/J.png")
    k = loadImage("images/letters/K.png")
    l = loadImage("images/letters/L.png")
    m = loadImage("images/letters/M.png")
    n = loadImage("images/letters/N.png")
    o = loadImage("images/letters/O.png")
    p = loadImage("images/letters/P.png")
    q = loadImage("images/letters/Q.png")
    r = loadImage("images/letters/R.png")
    s = loadImage("images/letters/S.png")
    t = loadImage("images/letters/T.png")
    u = loadImage("images/letters/U.png")
    v = loadImage("images/letters/V.png")
    w = loadImage("images/letters/W.png")
    x = loadImage("images/letters/X.png")
    y = loadImage("images/letters/Y.png")
    z = loadImage("images/letters/Z.png")

}

function setup() {
    canvas = createCanvas(windowWidth, 3300);
    bubbles = new Group();
    arrowgrp = new Group();
    alfabets = new Group();
    powerups = new Group();
    /*
        heart=createSprite(3312,408,20,20)
        heart.addImage(heartimg)
    
        heart1=createSprite(3252,408,20,20)
        heart1.addImage(heartimg)
    
        heart2=createSprite(3372,408,20,20)
        heart2.addImage(heartimg)
    
        heart3=createSprite(3392,408,20,20)
        heart3.addImage(heartimg)
    if(life=3){heart.visible=false}*/

    bow = createSprite(mouseX, height - 100, 20, 20)
    bow.addAnimation('Bimage', bowImg)
    bow.addAnimation('shoot', bowI1)
    bow.scale = 2;
    letter_array = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]

}

function draw() {
    background('lightblue')
    generator()
    generator2_0()
    generate_powerup()
    generate_powerup2()
    drawSprites()
    if (keyWentDown('space')) {
        shoot()
    }
    if (keyWentUp('space')) {
        bow.changeAnimation('Bimage', bowImg)
    }


    for (var i = 6762; i < 7220; i = i + 140) {
        heart = createSprite(i, 128, 20, 20)
        heart.addImage(heartimg)
    }

    bow.x = mouseX

    //score
    textSize(113);
    fill(50);
    text('score:' + score, 120, 120);
    
    arrowgrp.isTouching(bubbles, destroybubble)
    arrowgrp.isTouching(alfabets, destroyalphabet)
    arrowgrp.isTouching(powerups, destroyalphabet)
}


function destroybubble(sprite, group) {
    //sprite.remove()

    group.changeAnimation('pop', bubblepop)
    score++
    group.destroy()
}

function destroyalphabet(sprite, group) {
    //sprite.remove()

    group.destroy()
}

function destroyalphabet(sprite, group) {
    //sprite.remove()
    life++
    group.destroy()
}


function generator() {
    if (frameCount % 220 == 0) {
        bubble = createSprite(random(100, windowWidth), -10, 5, 5);
        bubble.addAnimation('bubble', bubbleImage )
        bubble.addAnimation('pop', bubblepop)
        rand = random(5, 9)
        bubble.velocityY = rand
        bubbles.add(bubble)
        var ltr = Math.floor(Math.random() * letter_array.length)

        letter = createSprite(bubble.x, bubble.y, 10, 10)
        letter.velocityY = rand
        letter.addImage(letter_array[ltr])
        letter.scale = 2
        alfabets.add(letter)
    }
}


function generator2_0() {

    if (frameCount % 200 == 0) {
        r = Math.round(random(1, 2))
        var ltr = Math.floor(Math.random() * letter_array.length)
        //left side
        if (r == 1) {
            bubble = createSprite(0, random(100, 1300 - 500), 15, 15);
            bubble.addAnimation('bubble', bubbleImage)
            bubble.addAnimation('pop', bubblepop)
            rand = random(5, 9)
            bubble.velocityX = rand
            bubbles.add(bubble)
            letter = createSprite(bubble.x, bubble.y, 10, 10)
            letter.velocityX = rand
            letter.addImage(letter_array[ltr])
            letter.scale = 2
            alfabets.add(letter)
        }//right one
        else {
            bubble = createSprite(width, random(100, 1300 - 500), 15, 15);
            bubble.addAnimation('bubble', bubbleImage)
            bubble.addAnimation('pop', bubblepop)
            rand = random(-5, -9)
            bubble.velocityX = rand
            bubbles.add(bubble)
            letter = createSprite(bubble.x, bubble.y, 10, 10)
            letter.velocityX = rand
            letter.addImage(letter_array[ltr])
            letter.scale = 2
            alfabets.add(letter)
            bubbles.add(bubble)

        }
    }
}


function generate_powerup() {
    if (frameCount % 420 == 0) {
        red_p = createSprite(random(100, windowWidth), -10, 5, 5);
        red_p.addAnimation('rotate', powerup)
        rand = random(8, 12)
        red_p.velocityY = rand
         powerups.add(red_p)

    }
}


function generate_powerup2() {

    if (frameCount % 400 == 0) {
        choose = Math.round(random(1, 2))

        //left side
        if (choose == 1) {
            red = createSprite(0, random(100, height), 15, 15);
            red.addAnimation('rotate', powerup)
            rand = random(8, 12)
            red.velocityX = rand
            powerups.add(red_p)


        }//right one
        else {
            red = createSprite(width, random(100,height), 15, 15);
            red.addAnimation('rotate', powerup)
            rand = random(-8, -12)
            red.velocityX = rand
            powerups.add(red_p)

            
        }
    }
}








function shoot() {
    console.log('working')
    bow.changeAnimation('shoot', bowI1)
    arrow = createSprite(bow.x, bow.y - 100, 10, 10)
    arrow.velocityY = -225
    arrow.scale = 2
    arrow.addImage(Arrowimg)
    arrowgrp.add(arrow)


}

