import pygame
import os, random
try:
    from MiniGame import win, home_loop
except:
    import MiniGame

pygame.init()

walkRight = []
walkLeft = []

for fn in os.listdir('./Game'):
	if fn.endswith('.png'):
		if fn == 'L1.png':
			left = True
		else:
			left = False

		if left == False:
			walkRight.append(pygame.image.load(f'Game\\{fn}'))
		elif left == True:
			walkLeft.append(pygame.image.load(f'Game\\{fn}'))


bg = pygame.image.load(f'Game\\bg.jpg')
char = pygame.image.load('Game\\standing.png')

walkRight = [pygame.image.load('Game\\R1.png'), pygame.image.load('Game\\R2.png'), pygame.image.load('Game\\R3.png'), pygame.image.load('Game\\R4.png'), pygame.image.load('Game\\R5.png'), pygame.image.load('Game\\R6.png'), pygame.image.load('Game\\R7.png'), pygame.image.load('Game\\R8.png'), pygame.image.load('Game\\R9.png')]
walkLeft = [pygame.image.load('Game\\L1.png'), pygame.image.load('Game\\L2.png'), pygame.image.load('Game\\L3.png'), pygame.image.load('Game\\L4.png'), pygame.image.load('Game\\L5.png'), pygame.image.load('Game\\L6.png'), pygame.image.load('Game\\L7.png'), pygame.image.load('Game\\L8.png'), pygame.image.load('Game\\L9.png')]


clock = pygame.time.Clock()



class Bean():
    
    def __init__(self, x, y, raduis):
        self.x = x
        self.y = y
        self.raduis = raduis
        self.color = (210,105,30)
        # self.hitbox = (self.x + 14, self.y + 14, 14, 14)
        # self.vel = 8
        
    def draw(self, win):
        # self.hitbox = (self.x - 10, self.y - 10, 14, 14)
        # pygame.draw.rect(win, (255,0,0), self.hitbox,2)
        # BeanImg = pygame.image.load('Game\\Coffee-Bean.png')
        # win.blit(BeanImg, (self.y, self.x))
        pygame.draw.circle(win, self.color, (self.x, self.y), self.raduis)

class player(object):
	def __init__(self, x, y, width, height):
            self.x = x
            self.y = y
            self.width = width
            self.height = height
            self.vel = 3
            self.isJump = False
            self.jumpCount = 10
            self.left = False
            self.right = False
            self.walkCount = 0
            self.standing = True
            self.hitbox = (self.x + 17, self.y + 2, 31, 57)
            

	def draw(self, win):
            self.hitbox = (self.x + 17, self.y + 11, 29, 52)
            # pygame.draw.rect(win, (255,0,0), self.hitbox,2)
        
            if self.walkCount + 1 >= 27:
                self.walkCount = 0
            if not(self.standing):
                if self.left:
                    win.blit(walkLeft[self.walkCount//3], (self.x,self.y))
                    self.walkCount += 1
                elif self.right:
                    win.blit(walkRight[self.walkCount//3], (self.x,self.y))
                    self.walkCount +=1
            else:
                win.blit(char, (self.x, self.y))




def redrawGameWindow():
    win.blit(bg, (0,0))
    
    man.draw(win)
    win.blit(font.render(text, True, (0, 0, 0)), (32, 48))
    for bean in beans:
        bean.draw(win)
    pygame.display.update()


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
        TextSurf, TextRect = text_objects("Energized", largeText)
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
        
        TextSurf, TextRect = text_objects("Side To Side", mText)
        TextRect.center = ((500/2),(480/4))
        win.blit(TextSurf, TextRect)
        
        TextSurf, TextRect = text_objects("Left Arrow Key", sText)
        TextRect.center = ((500/2),(480/3))
        win.blit(TextSurf, TextRect)
        
        TextSurf, TextRect = text_objects("Right Arrow Key", sText)
        TextRect.center = ((500/2),(480/2.6))
        win.blit(TextSurf, TextRect)
        
        TextSurf, TextRect = text_objects("Up", mText)
        TextRect.center = ((500/2),(480/2))
        win.blit(TextSurf, TextRect)
        
        TextSurf, TextRect = text_objects("Space Bar", sText)
        TextRect.center = ((500/2),(480/1.8))
        win.blit(TextSurf, TextRect)
        
        button("Play!", 147, 350, 200, 50, (0, 200, 0), (0, 255, 0), game_loop)
        
        
        pygame.display.update()
        clock.tick(15)
           

def game_score(text,scores):
    score = True
    
    if scores == 0:
        color = (255, 0, 0)
    else:
        color = (0, 255, 0)
    
    while score:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()
                
        win.fill(color)
        largeText = pygame.font.Font('freesansbold.ttf', 20)
        TextSurf, TextRect = text_objects(f"{text}", largeText)
        TextRect.center = ((500/2),(480/2))
        win.blit(TextSurf, TextRect)
        
        button("Go Home", 190, 400, 100, 50, (0, 200, 0), (0, 255, 0), MiniGame.home_loop)

        
        pygame.display.update()
        clock.tick(15)
        


    
def game_loop():
    global man
    global font
    global text
    global beans
    
    counter, text = 60, '60'.rjust(3)
    pygame.time.set_timer(pygame.USEREVENT, 1000)
    font = pygame.font.SysFont('Consolas', 20)

    man = player(300, 400, 64, 64)
    bean_Count = 0.01
    isDoned = ''
    beans = []
    beanFill = 10
    Scores = 0
    time = 0
    
    run = True
    finish = False
    while run:
        clock.tick(27)

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                run = False
                pygame.quit()
                quit()
            if event.type == pygame.USEREVENT: 
                counter -= 1 
                time += 0.5
                if counter > 0:
                    text = str(counter).rjust(3) 
                else: 
                    text = f'Time is up your score is {Scores * 10}'
                    finish = True
                    isDoned = game_score(text, int(Scores * 10))
                    return isDoned
                
        if len(beans) < round(beanFill + time):
            beans.append(Bean(random.randint(10, 420), random.randint(10, 400), 6))
            
        for bean in beans:
            if bean.y - bean.raduis < man.hitbox[1] + man.hitbox[3] and bean.y + bean.raduis > man.hitbox[1]: # Checks x coords
                if bean.x + bean.raduis > man.hitbox[0] and bean.x - bean.raduis < man.hitbox[0] + man.hitbox[2]:
                    beans.pop(beans.index(bean))
                    bean_Count += 0.0000000001
                    Scores += 1

        keys = pygame.key.get_pressed()

        if not (finish):
            man.vel = man.vel + bean_Count
            if keys[pygame.K_LEFT] and man.x > man.vel:
                man.x -= man.vel
                man.left = True
                man.right = False
                man.standing = False
            elif keys[pygame.K_RIGHT] and man.x <= 500 - man.width - man.vel:
                man.x += man.vel
                man.right = True
                man.left = False
                man.standing = False
            elif keys[pygame.K_SPACE]:
                man.y -= man.vel
            elif keys[pygame.K_SPACE] and keys[pygame.K_LEFT]:
                man.x -= man.vel
                man.y -= man.vel
                man.left = True
            else:
                man.standing = True
                man.walkCount = 0
                man.y += man.vel
        
            
        
        redrawGameWindow()
# game_intro()
# pygame.quit()



