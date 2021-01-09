export default `

# Second Update and Thoughts

#### December 26, 2020 by [Min](/)

Hello!

Wow this sure has been a while.

I haven't worked on the website in so long, so I kind of wanted to describe how my experience was.

Once I finished my co-op term, I felt a lot more confident with my ability in development, and started to feel more ambitious.
This newfound confidence allowed me to push into further learning web development through React and various React libraries.
Since I'm still working on the front-end, I delved quite a bit into furthering my knowledge of front-end tools, techniques,
and general tips on how to make a website more appealing. 

Despite that, I have to admit that my site clearly has it's flaws. It's pretty old-fashioned (far less modern than the typical
websites that can be created through a drag and drop like wix or squarespace), isn't completely fleshed out (as I am still
in the process of learning), and doesn't have that much functionality. But that's alright, it takes time to learn anyways,
and it's better to be patient with it so knowledge doesn't slip out of my brain easily. 

## The *Updated* Tech Stack

The website was initially designed through a fairly popular *React* library: *Material UI*. This is still true to the new design,
however a few new libraries have also been utilized, and the Material framework is not followed as strictly as before. For
example, all the animation and transitions currently implemented are from *Motion API* (*Framer Motion*): a super convenient 
and deep animation library. Hooks and timers were mostly used for the various standalone transition animations, such as
the fading text on the landing page. *React Router* was utilized to allow for simple browsing between the existing pages
of my website. Finally, *React Icons* replaced all the previous icon implementations due to its vast library and choice.

There is no back-end implemented still, within this code. I have yet to determine what sort of back-end functionality I
want to add to this website, or if I even want to do that at all. 

To deploy the website, I used *Netlify*. Deploying this website was a massive pain, as I had faced several compatibility and
deployment errors through two other deployment tools: *GitHub Pages*, and *Heroku*. GH pages couldn't host React websites,
and utilizing the npm package for GH pages didn't work either. Funny that *Git LFS* is not compatible with the GH pages package.
Heroku on the other hand, took even longer. I learned its platform pretty quickly and understood its potential, but hosting
my webpage on Heroku felt like I was going through a jungle of compatibility problems. It involved the strange 'serve' library
required to host it, then Git LFS compatibility issues once again, and finally 'heroku restart'. I gave up on both of them,
attempted Netlify, and finally managed to get my site up on the internet. Unfortunately, as it is a free web host, the loading
times aren't amazing. That pretty much explains why my loading page background video freezes up at times, and where animations
lag.

I considered using *AWS*, *GCP* or *Microsoft Azure* as platforms, though they all requested that I input some form of payment
information. I didn't like that, and avoided them for my personal website.

## My Reflection

Getting back into web design / development is great. It's fun implementing something interesting, then seeing it right away
and making sure that it works as intended. I was pretty busy with my work term, so I didn't have time to complete the last
design nor host it, but I took the initiative to give it a nice makeover before I put it up now. 

I certainly appreciate how simple React is with front-end development. It's not difficult to get things up and running, though
it does take time to learn how to use it. I can see why it's a popular framework, and assume that it's especially popular
for prototyping. Though the 'wrap' and 'flex' concepts of React are still ...wrapping around my head (Haha, dkm), I'm sure
I'll definitely understand how to better use them, as they are important concepts for cross-platform capabilities.

I'm also planning on learning more about the vitality of React keys. It seems like I have a good bit of React concepts to 
learn.

- Eric (Min) Park, 2020 December 26th

`;