import pygame
import os, random
import pandas as pd
import plotly.express as px
import time
try:
    from MiniGame import win, home_loop
except:
    import MiniGame
pygame.init()


def get_pos():
	url = "http://api.open-notify.org/iss-now.json"
	df = pd.read_json(url)

	df['latitude'] = df.loc['latitude', 'iss_position']
	df['longitude'] = df.loc['longitude', 'iss_position']

	df.reset_index(inplace=True)
	df = df.drop(['index', 'message'], axis=1)

	fig = px.scatter_geo(df, lat='latitude', lon='longitude')
	return fig


clock = pygame.time.Clock()

def text_objects(text, font):
    textSurface = font.render(text, True, (0, 0, 0))
    return textSurface, textSurface.get_rect()

def button(msg, x, y, width, height, i, a, action, ac=False):
    pygame.font.init()
    
    mouse = pygame.mouse.get_pos()
    click = pygame.mouse.get_pressed()
    
    if x + width > mouse[0] > x and y + height > mouse[1] > y:
        pygame.draw.rect(win, a, (x, y, width, height))
        if click[0] == 1 and action == 'Quit':
            pygame.quit()
            quit()
        elif click[0] == 1 and ac == True:
        	d = action()
        	d.show()
        	time.sleep(10)
        elif click[0] == 1 and action != None and action != 'Quit':
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
        largeText = pygame.font.Font('freesansbold.ttf', 70)
        TextSurf, TextRect = text_objects("ISS Position!", largeText)
        TextRect.center = ((500/2),(480/4))
        win.blit(TextSurf, TextRect)

        largeText = pygame.font.Font('freesansbold.ttf', 20)
        TextSurf, TextRect = text_objects("It might be slow :(", largeText)
        TextRect.center = ((500/2),(480/2))
        win.blit(TextSurf, TextRect)
        
        button("Show", 190, 350, 100, 50, (0, 200, 0), (0, 255, 0), get_pos, ac=True)
        button("Go Home", 190, 410, 100, 50, (0, 200, 0), (0, 255, 0), MiniGame.home_loop)

        
        pygame.display.update()
        clock.tick(15)