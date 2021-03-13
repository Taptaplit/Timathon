import pygame
import os, random
try:
    from MiniGame import win, home_loop
except:
    import MiniGame

pygame.init()
clock = pygame.time.Clock()

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
    

def game_intro():
    intro = True
    
    
    while intro:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()
        win.fill((255, 205, 155))
        largeText = pygame.font.Font('freesansbold.ttf', 90)
        TextSurf, TextRect = text_objects("2D Soccer!", largeText)
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
        
        TextSurf, TextRect = text_objects("W, A, S, D", sText)
        TextRect.center = ((500/2),(480/3.3))
        win.blit(TextSurf, TextRect)
        
        
        TextSurf, TextRect = text_objects("Player 2", mText)
        TextRect.center = ((500/2),(480/2))
        win.blit(TextSurf, TextRect)
        
        TextSurf, TextRect = text_objects("Arrow Keys", sText)
        TextRect.center = ((500/2),(480/1.8))
        win.blit(TextSurf, TextRect)
        
        button("Play!", 149, 350, 200, 50, (0, 200, 0), (0, 255, 0), game_loop)
        
        
        pygame.display.update()
        clock.tick(15)
        
def game_score(text):
    score = True
    
    while score:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()
        win.fill((255, 255, 255))
        largeText = pygame.font.Font('freesansbold.ttf', 20)
        TextSurf, TextRect = text_objects(f"{text}", largeText)
        TextRect.center = ((500/2),(480/2))
        win.blit(TextSurf, TextRect)
        
        button("Go Home", 190, 400, 100, 50, (0, 200, 0), (0, 255, 0), MiniGame.home_loop)

        
        pygame.display.update()
        clock.tick(15)
        

def game_loop():
    pygame.display.update()
