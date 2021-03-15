import pygame

win = pygame.display.set_mode((500, 480))
pygame.display.set_caption("MiniGame.pygame")
pygame.init()

def button(msg, img, x, y, width, height, action):
    pygame.font.init()
    
    mouse = pygame.mouse.get_pos()
    click = pygame.mouse.get_pressed()
    
    img = pygame.image.load(str(img))
    win.blit(img, (x, y))
    
    if x + width > mouse[0] > x and y + height > mouse[1] > y:
        if action == 'Quit':
            pygame.quit()
            quit()
        if click[0] == 1 and action != None and action != 'Quit':
            action()
        # pygame.draw.rect(win, i, (x, y, width, height))
    # pygame.image.load('Game\\R1.png')
    smallText = pygame.font.Font('freesansbold.ttf', 20)
    textSurf, textRect = text_objects(str(msg), smallText)
    textRect.center = ( (x+(width/2)), (y+(height/0.8)) )
    win.blit(textSurf, textRect)
 
def text_objects(text, font):
    textSurface = font.render(text, True, (0, 0, 0))
    return textSurface, textSurface.get_rect()




import MiniGame.soccer as MGS
import MiniGame.energised as MGE
import MiniGame.Pong as MGP
import MiniGame.iss as MGI


def home_loop():
    clock = pygame.time.Clock()
    home = True
    while home:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit() 

        win.fill((255, 255, 0))
        
        largeText = pygame.font.Font('freesansbold.ttf', 30)
        TextSurf, TextRect = text_objects("MiniBoard", largeText)
        TextRect.center = ((500/2),(480/8))
        win.blit(TextSurf, TextRect)
        
        button('Energised', 'Game\\standing.png', 40, 100, 64, 64, MGE.game_intro)
        button('Soccer', 'Game\\R2.png', 140, 100, 64, 64, MGS.game_intro)
        button('Pong Game', 'Game\\paddle.png', 250, 100, 64, 64, MGP.game_intro)
        button('ISS location', 'Game\\R2.png', 400, 100, 64, 64, MGI.game_intro)
        
        
        pygame.display.update()
        clock.tick(60)




