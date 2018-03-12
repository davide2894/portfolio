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