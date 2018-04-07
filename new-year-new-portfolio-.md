# Project diary

Alright, I have a really bad, ugly, don't-know-where-it-came-from portfolio site that I did back in September, at the very first step of my coding journey. It's a horrible thing to look at (but if you think you're brave enough [go ahead](https://davide2894.github.io/portfolio-old/))

## New year, new portfolio 
During the past few days I have been working on the design while hitting my head against the wall every time I changed my mind.

I must have been struct by a lightening last evening because "Whatch out, whatch out!" I pulled (finally) a mockup outta nowhere (any wrestling fan?).

This is what I came up with.

!!! LINKS OF MOCKUPS !!!


It's a new day. Let's get to work. The first thing I need to do is to write the HTML of the website. 

## HTML
The homepage is going to have a big collapsible menu as the main attraction, with four item, plus a footer. Something like the following:
1. into
2. main section
    * skills
    * projects
    * blog
    * about
    * contacts 
    
Up until now I didn't know anything about collapsible. Time to learn them then! 

1:13pm - have problems with livepreview. need to find a way to update live

## Day 3 - March 3 2018
8:17am - gulp setup is ready, mockups are ready, let's start building the blog.

First, the intro. I think it's better if I also put social icons right away at the top. Let's see.


9:59am - made html bare structure, no coolapsible yet. Set fonts and colors. 
Next is setting project section:
* Projects
    * create small mockup img
    * create img w/mu+cyan bg
    * put bg in project sec with link to gh repo
    
* Skills
    * check good skill sections 
    
* About
    * style text as per mu

* Say hi 
    * style section as per mu

...

5:38pm - collapsible is at a good point, gonna take a break and come back to add animations.

8:50 pm - I'm tired, need to refresh mentally. Tomorrow the first thing to do is to add animations.

## Day 4 - March 4 2018
8:11am - it's Sunday, a new day I use to life my life mission to the fullest. Let's go.
As of yesterday's last update: let's add animation to the collapsibles.

11:16am - now I need to create an overlay with two buttons:
    * visit
    * code
    
## Day 5 - March 5 2018
I think mobile version it's done. Now I need to make a version for tables and another one for desktop

## Day 7 - March 7 2018
9:26am - I was not satisfied with how it looked so I spent yesterday and last hour and a half to rebuild it. What's left to do:
//* add links to navbar items 
//* remove hover effect from mobile versions
//* add links to icons: each to its main explanatory page
//* add git, github devicons

7:40pm - desktop version idea: have all pages at height 100vh and switch between them with scroll animations:
* portfolio: 
    * full page 
    * header huge background
* blog:
    * full page
    * full logo as header
    * desdcription in small, lato font
* about: 
    * full page
    * split:
        *left: pic
        *right: description + skills
scroll animation that changes the background color smoothly like johathan

## Day 8 - Mon 12 March 2018
6:27pm - added landing animation and smooth scroll, but there's a problem: the scroll goes to the top of the section but doesn't care of internal margins. 
Probably the issue is to be located on .section or content classes. 

Tomorrow morning I'm going to check this problem out. If it's not solved I'll leave it because I need to continue the course now, in order to meet upcoming projects deeadlines

## Day 9 - Thu 5/4/18
Need to fix the link that doesn't work. 
Fixed the link changing color when shouldn't.

6:45am - now I want to make the html accessible.

1:05pm - trying to add fade in on scroll. It should work but somehow it doesn't. I don't understand. Observer works. Entries are registered, class show is added but doesn't work. Could it be that it's not specific?
So .show class gets added and removed when necessary. It works, so that shouldn't be the problem. Then it means the problem is in CSS, not JS. So CSS .show class is not specific enough?

opacity is applied but show class doesn't apply.

show is added but doesn't apply. Why???

2:09pm - sass was probably not injecting again....Anyway: now this freaking feature is working.

## Day 9 - Fri 6/4/18
10:42am - goal: to make a portfolio project page. Now, I could 
- make a separate page for each project
- make a brief description with likns like maeva
- have a card like area dedicated to each project, at the bottom show source code and visit buttons

I guess the third option is the one to go. So, each project will have a card containing:
- project mockup
- brief description including:
   * what is it
   * skills used
   * website button
   * surce code button


## Day 10 - Sat 7/4/18
5:46am - for some reason, on small/mdium screens observer doesn't notice projects section entrance in the viewport

6:20am - solved. Problem was lack of margin-top on header.
Now I should handle the about section icons' position.

11:58am - guess now website has good accessibility. Need to add noticeable focus for blog and project sections