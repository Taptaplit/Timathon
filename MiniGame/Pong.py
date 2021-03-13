import pygame
import os, random
try:
    from MiniGame import win, home_loop
except:
    import MiniGame

pygame.init()

white = (255,255,255)
grey = (130, 130, 130)

def text_objects(text, font):
    textSurface = font.render(text, True, (0, 0, 0))
    return textSurface, textSurface.get_rect()

def button(msg, x, y, width, height, i, a, action):
    pygame.font.init()
    
    mouse = pygame.mouse.get_pos()
    click = pygame.mouse.get_pressed()
    
    if x + width > mouse[0] > x and y + height > mouse[1] > y:
        pygame.draw.rect(win, a, (x, y, width, height))
        if action == 'Quit':
            pygame.quit()
            quit()
        if click[0] == 1 and action != None and action != 'Quit':
            action()
    else:
        pygame.draw.rect(win, i, (x, y, width, height))
    
    smallText = pygame.font.Font('freesansbold.ttf', 20)
    textSurf, textRect = text_objects(str(msg), smallText)
    textRect.center = ( (x+(width/2)), (y+(height/2)) )
    win.blit(textSurf, textRect)
    
clock = pygame.time.Clock()

def game_intro():
    intro = True
    
    
    while intro:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()
                
        win.fill((255, 205, 155))
        largeText = pygame.font.Font('freesansbold.ttf', 90)
        TextSurf, TextRect = text_objects("Pong Game", largeText)
        TextRect.center = ((500/2),(480/2))
        win.blit(TextSurf, TextRect)
        
        button("Start", 190, 350, 100, 50, (0, 200, 0), (0, 255, 0), game_loop)
        button("Controls", 190, 410, 100, 50, (0, 200, 0), (0, 255, 0), game_controls)

        
        pygame.display.update()
        clock.tick(15)
        
def game_controls():
    controls = True
    while controls:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                
        win.fill((0, 255, 255))
        largeText = pygame.font.Font('freesansbold.ttf', 50)
        mText = pygame.font.Font('freesansbold.ttf', 20)
        sText = pygame.font.Font('freesansbold.ttf', 15)
        TextSurf, TextRect = text_objects("Controls", largeText)
        TextRect.center = ((500/2),(480/8))
        win.blit(TextSurf, TextRect)
        
        TextSurf, TextRect = text_objects("Player 1", mText)
        TextRect.center = ((500/2),(480/4))
        win.blit(TextSurf, TextRect)
        
        TextSurf, TextRect = text_objects("W, S", sText)
        TextRect.center = ((500/2),(480/3.3))
        win.blit(TextSurf, TextRect)
        
        
        TextSurf, TextRect = text_objects("Player 2", mText)
        TextRect.center = ((500/2),(480/2))
        win.blit(TextSurf, TextRect)
        
        TextSurf, TextRect = text_objects("Up Arrow Key, Down Arrow Key", sText)
        TextRect.center = ((500/2),(480/1.8))
        win.blit(TextSurf, TextRect)
        
        button("Play!", 149, 350, 200, 50, (0, 200, 0), (0, 255, 0), game_loop)
        
        
        pygame.display.update()
        clock.tick(15)

def game_score(winner):
    score = True

    
    while score:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()
                
        win.fill((0, 255, 0))
        largeText = pygame.font.Font('freesansbold.ttf', 20)
        TextSurf, TextRect = text_objects(f"Player {winner} won!!", largeText)
        TextRect.center = ((500/2),(480/2))
        win.blit(TextSurf, TextRect)
        
        button("Go Home", 190, 400, 100, 50, (0, 200, 0), (0, 255, 0), MiniGame.home_loop)

        
        pygame.display.update()
        clock.tick(15)

class Paddle(pygame.sprite.Sprite):
  def __init__(self):
    pygame.sprite.Sprite.__init__(self)
    self.image = pygame.Surface([10,75])
    self.image.fill(white)
    self.rect = self.image.get_rect()
    self.points = 0 

class Ball(pygame.sprite.Sprite):
  def __init__(self):
    pygame.sprite.Sprite.__init__(self)
    self.image = pygame.Surface([15,15])
    self.image.fill(white)
    self.rect = self.image.get_rect()
    self.dirx = 1
    self.diry = 1   

paddle1 = Paddle()
paddle1.rect.x = 25
paddle1.rect.y = 250

paddle2 = Paddle()
paddle2.rect.x=460
paddle2.rect.y=250  

ball = Ball() 
ball.rect.x = 250
ball.rect.y = 240

all_sprites = pygame.sprite.Group()
all_sprites.add(paddle1,paddle2,ball)

def redraw():
  win.fill(grey)

  font = pygame.font.SysFont('Ariel',30)
  text = font.render("PONG", False, white)
  textRect = text.get_rect()
  textRect.center = (250,25)
  win.blit(text,textRect)

  p1_score = text = font.render(str(paddle1.points), False, white)
  p1Rect = p1_score.get_rect()
  p1Rect.center = (50, 50)
  win.blit(p1_score, p1Rect)
  
  p2_score = text = font.render(str(paddle2.points), False, white)
  p2Rect = p2_score.get_rect()
  p2Rect.center = (470,50)
  win.blit(p2_score, p2Rect)
  
  if int(paddle1.points) == 21:
      game_score('1')
  if int(paddle2.points) == 21:
      game_score('2')




  all_sprites.draw(win)
  pygame.display.update()


def game_loop():
    run = True
    # # if fighter.rect.colliderect(ball.rect):
        #ball.rect.x -= 1
    while run:
        pygame.time.delay(100)

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                run = False
                quit()
                
        key = pygame.key.get_pressed()
        if key[pygame.K_w]:
            paddle1.rect.y -= 10
        if key[pygame.K_s]:
            paddle1.rect.y += 10

        if key[pygame.K_UP]:
            paddle2.rect.y -= 10
        if key[pygame.K_DOWN]:
            paddle2.rect.y += 10

        ball.rect.x += 10 * ball.dirx 
        ball.rect.y += 10 * ball.diry 

        if ball.rect.y > 470:
            ball.diry = -1
        if ball.rect.y < 0:
            ball.diry = 1
        
        if ball.rect.x > 490:
            paddle1.points += 1
            ball.dirx = -1
            ball.rect.x, ball.rect.y = 240, 250

        if ball.rect.x < 0:
            paddle2.points += 1 
            ball.dirx = 1
            ball.rect.x, ball.rect.y = 240, 250
        
        if paddle1.rect.colliderect(ball.rect):
            ball.dirx = 1
        if paddle2.rect.colliderect(ball.rect):
            ball.dirx = -1

        redraw()
            
    